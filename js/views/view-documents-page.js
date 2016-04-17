(function () {
  window['UI'] = window['UI'] || {};
  window.UI.c$ = window.UI.c$ || {};
})();

(function(){
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  var c$ = {};
  c$ = $.extend(window.UI.c$, {});

  c$.updateDocumentsPage = function(){

    var l10n = c$.l10nFormatObj(c$.l10n["DocumentsPage"] || {});

    htmlContent = template('doc-content-tmpl', {list:l10n.list || []});
    $('.section-documents').html(htmlContent);
  };

  c$.MC_l10n.add(c$.updateDocumentsPage);

  window.UI.c$ = $.extend(window.UI.c$, c$);
})();