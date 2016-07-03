(function () {
    window['UI'] = window['UI'] || {};
    window.UI.c$ = window.UI.c$ || {};
})();

(function(){
        ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    var c$ = {};
    c$ = $.extend(window.UI.c$, {});
    
    c$.updateBuyPage = function(){
        
        var l10n = c$.l10nFormatObj(c$.l10n["BuyPage"] || {});
        var htmlContent = "";
        
        var navLang = navigator.language;
        
        
        var formatList = [];
        $.each(l10n.list, function(index, buyObj){
            if($.isArray(buyObj["regionalLanguage"])){
                var arryLangs = buyObj.regionalLanguage;
                if($.inArray(navLang, arryLangs) > -1){
                    formatList.push(buyObj);
                }
            }else{
                formatList.push(buyObj);
            }
        })
        
                        
        // 更新Buy
        htmlContent = template('buy-content-tmpl', {SectionName: l10n.SectionName, list:formatList});
        $('.section-buy').html(htmlContent);
    };
    
    c$.MC_l10n.add(c$.updateBuyPage);
    
    window.UI.c$ = $.extend(window.UI.c$, c$);
})();