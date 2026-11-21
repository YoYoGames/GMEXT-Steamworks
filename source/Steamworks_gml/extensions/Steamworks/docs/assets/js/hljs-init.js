/* Runs highlight.js over the generated code fences.
 *
 * Pygments has no GML lexer, so mkdocs.yml turns it off and the fences come
 * through as <code class="language-gml"> for highlight.js to colour instead.
 * The readthedocs theme used to call highlightAll() for us; Material does not,
 * because it expects Pygments to have done the work at build time. */

(() => {
  "use strict";

  const highlight = () => {
    if (!window.hljs) {
      return;
    }
    /* Not highlightAll(): that also picks up <pre><code> with no language, and
       every syntax box on these pages is tagged. */
    document
      .querySelectorAll('pre code[class*="language-"]')
      .forEach((block) => window.hljs.highlightElement(block));
  };

  /* `document$` is Material's "a document is ready" signal, emitted on first
     load and again after any page swap. The fallback covers it being absent;
     scripts load at the end of the body, so the DOM is ready either way. */
  if (window.document$ && typeof window.document$.subscribe === "function") {
    window.document$.subscribe(highlight);
  } else {
    highlight();
  }
})();
