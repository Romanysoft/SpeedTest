(function() {
    window['UI'] = window['UI'] || {};
    window.UI.c$ = window.UI.c$ || {};
})();

(function() {
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    var c$ = {};
    c$ = $.extend(window.UI.c$, {});

    c$.updateHomePage = function() {

        var l10n = c$.l10nFormatObj(c$.l10n["HomePage"] || {});
        var htmlContent = "";
 
        /**
        *** 更新页头部分的数据
        **/
        htmlContent = template('page-header-content-tmpl',{
            appName: window.RTYConfig.appName,
            appDescription: l10n["ProjectTagline"],
            supportPlatfroms: RTYConfig.supportPlatforms,
            btnList:[
                {href: "./versions.html", title: l10n['BtnDownload'] || "Download", class:"btn-download", description: l10n['BtnDownloadDescription'] || "Free | Official trial version."}
                ,{href: "./buy.html", title: l10n['BtnBuy'] || "Buy", class:"btn-download", description: l10n['BtnBuyDescription'] || " | Official free upgrade."}
                ,{href: "//www.romanysoft.com", title: l10n['BtnLearnMore'] || "www.romanysoft.com", class:"btn-romanysoft", description: ""}
            ]
        });
        $('.page-header').html(htmlContent);

        // 更新Screents
        htmlContent = template('screen-content-tmpl', {
            list: l10n["Screens"]
        });
        $('.app-screens').html(htmlContent);

        // 更新Features
        htmlContent = template('features-content-tmpl', {
            SectionName: l10n["Features"].SectionName,
            list: l10n["Features"].list
        });
        $('.section-features').html(htmlContent);

        // 更新Reviews
        htmlContent = template('review-content-tmpl', {
            SectionName: l10n["UserReviews"].SectionName,
            list: l10n["UserReviews"].list
        });
        $('.section-reviews').html(htmlContent);

        // 是否需要图片旋转
        var wantSlider = true;
        if(wantSlider){
            $(function() {
                var Page = (function() {
                    var $navArrows = $('#nav-arrows').hide(),
                        $shadow = $('#shadow').hide(),
                        slicebox = $('#sb-slider').slicebox({
                            onReady: function() {
                                $navArrows.show();
                                $shadow.show();
                            },
                            orientation: 'r',
                            cuboidsRandom: true,
                            disperseFactor: 30
                        }),

                        init = function() {
                            initEvents();
                        },
                        initEvents = function() {
                            setInterval(function(){slicebox.next()}, 2500);
                        };

                    return {
                        init: init
                    };

                })();

                Page.init();
            });
        }

    };

    c$.MC_l10n.add(c$.updateHomePage);

    window.UI.c$ = $.extend(window.UI.c$, c$);
})();