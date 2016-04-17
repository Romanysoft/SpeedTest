(function(){

    

    $(document).ready(function(){
        var htmlContent ="            <span class=\"site-footer-owner\"><a href=\"" + window.RTYConfig.gitHome +"\">"  + window.RTYConfig.appName + "</a> is developed by <a href=\"http://www.romanysoft.com\">Romanysoft LAB.</a></span>";
        htmlContent += "            <span class=\"site-footer-credits\">" + window.RTYConfig.copyright +"</span>";
        
        
        $('.site-footer').html(htmlContent);
    })
})();