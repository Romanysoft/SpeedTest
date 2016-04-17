(function () {
    window['UI'] = window['UI'] || {};
    window.UI.c$ = window.UI.c$ || {};
})();

(function(){
        ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    var c$ = {};
    c$ = $.extend(window.UI.c$, {});
    
    c$.updateFeaturesPage = function(){
        
        var l10n_doc = c$.l10nFormatObj(c$.l10n["HomePage"] || {});
        var htmlContent = "";
        
        // 更新Features(引用主页内容)
        htmlContent = template('features-content-tmpl', {SectionName: l10n_doc["Features"].SectionName, list:l10n_doc["Features"].list});
        $('.section-features').html(htmlContent);
        
    };
    
    c$.MC_l10n.add(c$.updateFeaturesPage);
    
    window.UI.c$ = $.extend(window.UI.c$, c$);
})();