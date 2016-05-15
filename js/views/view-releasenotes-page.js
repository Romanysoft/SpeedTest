(function () {
    window['UI'] = window['UI'] || {};
    window.UI.c$ = window.UI.c$ || {};
})();

(function(){
        ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    var c$ = {};
    c$ = $.extend(window.UI.c$, {});
    
    c$.updateReleasenotesPage = function(){
        try{
            if(window.location.href != RTYConfig.changeLogUrl){
                window.location.href = RTYConfig.changeLogUrl;
            }
        }catch(e){
            console.error(e);
        }
        
        var l10n = c$.l10nFormatObj(c$.l10n["ReleaseNotePage"] || {});
        var htmlContent = "";
        
        // 更新Features(引用主页内容)
        htmlContent = template('changelog-content-tmpl', {labelVersion:l10n["labelVersion"] || "Version", list:l10n.list});
        $('.section-releasenotes').html(htmlContent);
        
        
    };
    
    c$.MC_l10n.add(c$.updateReleasenotesPage);
    
    window.UI.c$ = $.extend(window.UI.c$, c$);
})();