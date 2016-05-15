(function () {
  window['UI'] = window['UI'] || {};
  window.UI.c$ = window.UI.c$ || {};
})();


(function () {
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  var c$ = {};
  c$ = $.extend(window.UI.c$, {});


  c$.l10n = {}; // 多语言对象
  c$.l10nFormatObj = function (obj) { // 带有
    var transalteObj = null;

    if ($.type(obj) === "array") {
      transalteObj = [];
      $.each(obj, function (idx, ele) {
        transalteObj.push(c$.l10nFormatObj(ele));
      })
    }

    if ($.type(obj) === "object") {
      var json = obj;
      transalteObj = {};
      for (var x in json) {
        var ele = json[x];
        transalteObj[x] = c$.l10nFormatObj(ele);
      }
    }

    if ($.type(obj) === "string") {
      var org = obj;
      org = org.replace(/(%){2,}/, "");
      org = org.replace(/({){2,}/, "");
      org = org.replace(/(}){2,}/, "");
      transalteObj = org;
    }

    if ($.type(obj) === "number"
        || $.type(obj) === "date"
        || $.type(obj) === "function"
        || $.type(obj) === "boolean"
        || $.type(obj) === "regexp") {

      transalteObj = obj;
    }

    return transalteObj;
  };

  c$.l10nPre = "app_";
  c$.languageMap = {};
  c$.l10nLangKey = "";
  c$.MC_l10n = $.Callbacks();

  c$.LoadLanguageMap = function(url, next){
    $.ajax({
      url: url,
      dataType: "json",
      jsonp: false,
      error: function () {
        next && next();
      },
      success: function (data) {
        console.log('----- load LoadLanguageMap .... ' + url);
        c$.languageMap = data;
        next && next();
      }
    })
  };

  c$.l10nGetLocalKey = function(){
    var localKey = "+userConfig";
    try{
      var b$ = BS.b$;
      localKey = b$.App.getAppId() + localKey;
    }catch(e){
      localKey = RTYConfig.appID + localKey;
    }
    return localKey;
  };

  c$.setUserCustomLanguage = function(langID){
    var localKey = c$.l10nGetLocalKey();
    var userConfig = null;
    userConfig = (userConfig = localStorage.getItem(localKey)) && JSON.parse(userConfig);
    userConfig = userConfig || {};

    userConfig["lang"] = langID;
    localStorage.setItem(localKey, JSON.stringify(userConfig));
  };

  c$.getUserCustomLanguage = function(){
    var localKey = c$.l10nGetLocalKey();
    var userConfig = null;
    userConfig = (userConfig = localStorage.getItem(localKey)) && JSON.parse(userConfig);
    userConfig = userConfig || {};

    return userConfig["lang"];
  };

  c$.LoadAppLanguage = function (languageList) {
    function trySetLocal(langObj, next) {
      var url = langObj.path, key = langObj.key;
      $.ajax({
        url: url,
        dataType: "json",
        jsonp: false,
        error: function () {
          next && next();
        },
        success: function (data) {
          console.log('----- load 110n .... ' + url);
          c$.l10n = data;
          c$.l10nLangKey = key;
          c$.MC_l10n.fire();
        }
      })
    }

    function gotoTry(langArray) {
      if ($.isArray(langArray) && langArray.length > 0) {
        trySetLocal(langArray[0], function () {
          var newArray = langArray.splice(1);
          gotoTry(newArray);
        })
      }
    }

    gotoTry(languageList);
  };

  c$.getPreTryLangList = function(){
    var navLang = navigator.language;
    var tryLangList = [
      //要求以英语为主, 其他语言地位缩减
      {path:"l10n/" + c$.l10nPre + "en.json", key:"en"},
      {path:"l10n/" + c$.l10nPre + navLang + ".json", key:navLang},
      {path:"l10n/" + c$.l10nPre + navLang.split('-')[0] + ".json",key:navLang.split('-')[0]},
      {path:"l10n/" + c$.l10nPre + navLang.split('_')[0] + ".json",key:navLang.split('_')[0]},
      {path:"l10n/" + c$.l10nPre + "en-US.json",key:"en-US"},
      {path:"l10n/" + c$.l10nPre + "en_US.json",key:"en_US"}
    ];

    var userLang = this.getUserCustomLanguage();
    if(userLang){
      tryLangList =[{path:"l10n/" + c$.l10nPre + userLang + ".json", key:userLang}].concat(tryLangList);
    }

    return tryLangList;
  };

  c$.loadL10n = function (successCB) {
    try {

      c$.MC_l10n.add(function(){
        successCB && successCB();
      });

      c$.LoadLanguageMap("l10n/lang.json", function(){
        /// 启动翻译尝试
        c$.LoadAppLanguage(c$.getPreTryLangList());
      });


    } catch (e) {
    }
  };

  window.UI.c$ = $.extend(window.UI.c$, c$);
})();