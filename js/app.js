(function () {
    window['UI'] = window['UI'] || {};
    window.UI.c$ = window.UI.c$ || {};
})();

(function(){
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    var c$ = {};
    c$ = $.extend(window.UI.c$, {});
    
    c$.initTitleAndVersion = function () {
        document.title = window.RTYConfig.documentTitle;
    };
    
    c$.launch = function(){
        c$.initTitleAndVersion();
        c$.loadL10n();
    }
    
    window.UI.c$ = $.extend(window.UI.c$, c$);
})();

// 默认启动
(function(){
    $(document).ready(function(){
        window.UI.c$.launch();
    })
})();