(function () {
    window['UI'] = window['UI'] || {};
    window.UI.c$ = window.UI.c$ || {};
})();

(function(){
        ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    var c$ = {};
    c$ = $.extend(window.UI.c$, {});
    
    c$.updateVersionsPage = function(){
        
        var l10n = c$.l10nFormatObj(c$.l10n["VersionPage"] || {});
       
        var htmlContent = template('version-content-tmpl', {labelVersion:l10n["labelVersion"] || "Version", list:l10n["list"] || []});
        $('#versions-content').html(htmlContent);
    };
    
    c$.MC_l10n.add(c$.updateVersionsPage);
    
    window.UI.c$ = $.extend(window.UI.c$, c$);
})();