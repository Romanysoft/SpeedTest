(function () {
    window['UI'] = window['UI'] || {};
    window.UI.c$ = window.UI.c$ || {};
})();

(function(){
        ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    var c$ = {};
    c$ = $.extend(window.UI.c$, {});

    c$.updateLanguagesPage = function(){
        
        var l10n = c$.l10nFormatObj(c$.l10n["LanguagesPage"] || {});
        var htmlContent = "";

        var langList = [];
        try{
            if(typeof c$.languageMap.local !== "undefined"){
                var ele = c$.languageMap.local;
                for(var key in ele){
                    var obj = {"key":key, "name":ele[key]};
                    langList.push(obj);
                }
            }
        }catch(e){
            console.error(e);
        }

                        
        // 更新Lanuges
        htmlContent = template('language-content-tmpl', {SectionName: l10n.SectionName || "", list:langList || []});
        $('.section-languages').html(htmlContent);
        $('.section-languages .common-list > li > a').on("click", function(){
            var lang_key = $(this).attr('data-langID');
            console.log(lang_key);

            c$.setUserCustomLanguage(lang_key);
            c$.LoadAppLanguage(c$.getPreTryLangList());
        });
    };
    
    c$.MC_l10n.add(c$.updateLanguagesPage);
    
    window.UI.c$ = $.extend(window.UI.c$, c$);
})();