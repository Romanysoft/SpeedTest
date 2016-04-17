(function () {
    window['UI'] = window['UI'] || {};
    window.UI.c$ = window.UI.c$ || {};
})();

(function(){
        ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    var c$ = {};
    c$ = $.extend(window.UI.c$, {});
    
    c$.updateTopBarUI = function(){
        var l10n = c$.l10nFormatObj(c$.l10n["TopBar"] || {});

        var  navgList = [
            {name:l10n["Home"] || "Home", url:"./index.html", target:"_self"},
            {name:l10n["Feature"] || "Feature", url:"./feature.html", target:"_self"},
            {name:l10n["Video"] || "Documents", url:"./documents.html", target:"_self"},
            {name:l10n["Documents"] || "Documents", url:RTYConfig.wikiUrl ||"", target:"_blank"},
            {name:l10n["ReleaseNotes"] || "ReleaseNotes", url:RTYConfig.changeLogUrl ||"", target:"_blank"},
            {name:l10n["Downloads"] || "Downloads", url:"./versions.html", target:"_self"},
            {name:l10n["Buy"] || "Buy", url:"./buy.html", target:"_self"},
            {name:l10n["ReportIssue"] || "ReportIssue", url:RTYConfig.reportIssueUrl ||"", target:"_blank"},
            //{name:l10n["Languages"] || "Languages", url:"./languages.html", target:"_self"},
        ];
        
        var htmlContent = template('topbar-content-tmpl', {list:navgList});
        $('.top-bar').html(htmlContent);
    };
    
    c$.MC_l10n.add(c$.updateTopBarUI);
    
    window.UI.c$ = $.extend(window.UI.c$, c$);
})();