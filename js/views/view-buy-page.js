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
                        
        // 更新Buy
        htmlContent = template('buy-content-tmpl', {SectionName: l10n.SectionName, list:l10n.list});
        $('.section-buy').html(htmlContent);
    };
    
    c$.MC_l10n.add(c$.updateBuyPage);
    
    window.UI.c$ = $.extend(window.UI.c$, c$);
})();