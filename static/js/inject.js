// Yandex.Metrika — counter 109377314
(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
m[i].l=1*new Date();
for(var j=0;j<document.scripts.length;j++){if(document.scripts[j].src===r){return;}}
k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)}
)(window,document,'script','https://mc.yandex.ru/metrika/tag.js','ym');
ym(109377314,'init',{clickmap:true,trackLinks:true,accurateTrackBounce:true,webvisor:true});

// Market-Place / MPSU ads for stiralka-info.vercel.app
// Articles only: horizontal after 1st, 5th, and 9th safe paragraphs, corner sticker
(function () {
  var MPSU_SCRIPT_SRC = 'https://statika.mpsuadv.ru/scripts/11594.js';
  function isArticlePage() {
    if (!document.body) return false;
    if (document.body.classList.contains('home') || document.body.classList.contains('category') || document.body.classList.contains('archive')) return false;
    return !!document.querySelector('article, .article-body');
  }
  function getArticleRoot() { return document.querySelector('article') || document.querySelector('.article-body'); }
  function isUnsafeAdParent(node, root) {
    while (node && node !== root && node !== document.body) {
      if (node.matches && node.matches('ol, ul, li, blockquote, table, thead, tbody, tr, td, th, figure, figcaption, aside, details, summary, pre, code')) return true;
      if (node.matches && node.matches('.important, .note, .warning, .alert, .callout, .highlight, .tip, .info, .notice, .attention, .danger, .success, .faq, .steps, .pros-cons, .toc, .contents')) return true;
      if (node.className && typeof node.className === 'string' && /(important|note|warning|alert|callout|highlight|tip|info|notice|attention|danger|success|faq|steps|pros-cons|toc|contents)/i.test(node.className)) return true;
      node = node.parentElement;
    }
    return false;
  }
  function getSafeParagraphs(root) {
    if (!root) return [];
    return Array.prototype.filter.call(root.querySelectorAll('p'), function (paragraph) {
      if (!paragraph || !paragraph.parentElement || isUnsafeAdParent(paragraph.parentElement, root)) return false;
      return paragraph.textContent && paragraph.textContent.replace(/\s+/g, '').length >= 40;
    });
  }
  function loadMpsuScript() {
    if (document.querySelector('script[src="' + MPSU_SCRIPT_SRC + '"]')) return;
    var script = document.createElement('script'); script.async = true; script.src = MPSU_SCRIPT_SRC; document.head.appendChild(script);
  }
  function startWidget(widgetId) { window.mpsuStart = window.mpsuStart || []; window.mpsuStart.push(widgetId); }
  function createWidget(widgetId) {
    if (document.getElementById('mp_custom_' + widgetId)) return null;
    var block = document.createElement('div'); block.id = 'mp_custom_' + widgetId; return block;
  }
  function insertAfterParagraph(widgetId, paragraphNumber) {
    var paragraphs = getSafeParagraphs(getArticleRoot()); if (paragraphs.length < paragraphNumber) return;
    var block = createWidget(widgetId); if (!block) return;
    paragraphs[paragraphNumber - 1].insertAdjacentElement('afterend', block); startWidget(widgetId);
  }
  function insertFloatingWidget(widgetId) {
    var block = createWidget(widgetId); if (!block) return; document.body.appendChild(block); startWidget(widgetId);
  }
  function initAds() {
    if (!isArticlePage()) return; loadMpsuScript();
    // Rotator Static ZBT stiralka-info.vercel.app horizontal 1 №45598
    insertAfterParagraph(45598, 1);
    // Rotator Static ZBT stiralka-info.vercel.app horizontal 2 №45600
    insertAfterParagraph(45600, 5);
    // Rotator Static ZBT stiralka-info.vercel.app horizontal 3 №45601
    insertAfterParagraph(45601, 9);
    // Rotator Recom V stiralka-info.vercel.app corner/floating №45604
    insertFloatingWidget(45604);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', initAds); else initAds();
})();
