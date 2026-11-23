/* Drag-to-resize for the navigation and the table of contents.
 *
 * A column's width is the custom property assets/extra.css already reads, so
 * dragging changes the same number you would otherwise edit by hand, and the
 * value is kept in localStorage under that property's own name.
 * tools/mkdocs_hooks.py applies the stored value inline in the <head> so the
 * columns are already the right width at first paint; this file only adds the
 * grab strips and the dragging. */

(() => {
  "use strict";

  /* `edge` is the side of the column the divider sits on. The table of contents
     is `order: 2`, so its divider is on its left and dragging left widens it. */
  const COLUMNS = [
    {
      selector: ".md-sidebar--primary",
      property: "--gm-nav-width",
      minimum: "--gm-nav-min-width",
      modifier: "gm-resizer--nav",
      edge: "right",
      label: "Resize the navigation",
    },
    {
      selector: ".md-sidebar--secondary",
      property: "--gm-toc-width",
      minimum: "--gm-toc-min-width",
      modifier: "gm-resizer--toc",
      edge: "left",
      label: "Resize the table of contents",
    },
  ];

  /* How far one arrow key press moves a divider, in rem. */
  const STEP = 1;

  const root = document.documentElement;

  /* Custom properties come back from getComputedStyle unresolved -- "9rem", not
     a pixel count -- so the sizing variables are read as a number of rem and
     converted here. That is why extra.css asks for them to be written in rem. */
  const rootFontSize = () => parseFloat(getComputedStyle(root).fontSize);
  const readPx = (name) =>
    parseFloat(getComputedStyle(root).getPropertyValue(name)) * rootFontSize();

  /* Store rem rather than pixels, so a width still means the same thing if the
     root font size ever changes. */
  function apply(column, px) {
    const width = `${(px / rootFontSize()).toFixed(3)}rem`;
    root.style.setProperty(column.property, width);
    try {
      localStorage.setItem(column.property, width);
    } catch (error) {
      /* Private browsing, or storage full. The drag still works for this page. */
    }
  }

  function reset(column) {
    root.style.removeProperty(column.property);
    try {
      localStorage.removeItem(column.property);
    } catch (error) {
      /* As above. */
    }
  }

  /* Neither the row nor the opposite column moves during a drag, so this is
     measured once when one starts. */
  function limits(column, row) {
    const other = COLUMNS.find((candidate) => candidate !== column);
    const sibling = row.querySelector(other.selector);
    const taken = sibling ? sibling.getBoundingClientRect().width : 0;
    const smallest = readPx(column.minimum);
    const largest =
      row.getBoundingClientRect().width - taken - readPx("--gm-content-min-width");
    return [smallest, Math.max(smallest, largest)];
  }

  const clamp = (value, [smallest, largest]) =>
    Math.min(largest, Math.max(smallest, value));

  /* The strips are children of the content column, positioned against its two
     borders in CSS, so nothing here has to know where a divider is: moving one
     moves the border, and the strip comes with it. `element` below is still the
     sidebar, because that is what the drag arithmetic measures. */
  function build(column, element, content, row) {
    const handle = document.createElement("div");
    handle.className = `gm-resizer ${column.modifier}`;
    handle.setAttribute("role", "separator");
    handle.setAttribute("aria-orientation", "vertical");
    handle.setAttribute("aria-label", column.label);
    handle.tabIndex = 0;

    handle.addEventListener("pointerdown", (event) => {
      if (event.pointerType === "mouse" && event.button !== 0) {
        return;
      }
      const box = element.getBoundingClientRect();
      /* The column's other edge stays put while it is resized, so the width is
         just the distance from it to the pointer. */
      const anchor = column.edge === "right" ? box.left : box.right;
      const bounds = limits(column, row);

      const move = (moved) => {
        const width =
          column.edge === "right" ? moved.clientX - anchor : anchor - moved.clientX;
        apply(column, clamp(width, bounds));
      };

      const release = () => {
        handle.removeEventListener("pointermove", move);
        delete handle.dataset.gmDragging;
        delete document.body.dataset.gmResizing;
      };

      /* Capturing keeps the drag alive once the pointer outruns the strip. */
      handle.setPointerCapture(event.pointerId);
      handle.dataset.gmDragging = "";
      document.body.dataset.gmResizing = "";
      handle.addEventListener("pointermove", move);
      handle.addEventListener("pointerup", release, { once: true });
      handle.addEventListener("pointercancel", release, { once: true });
      /* Deliberately no preventDefault: it suppresses the compatibility mouse
         events and takes `dblclick` with them in some browsers. Both things it
         would have bought are already covered -- `touch-action: none` on the
         strip, and `user-select: none` from the attribute just set on the
         body. */
    });

    handle.addEventListener("keydown", (event) => {
      if (event.key === "Home") {
        reset(column);
        event.preventDefault();
        return;
      }
      const towards = { ArrowLeft: -1, ArrowRight: 1 }[event.key];
      if (towards === undefined) {
        return;
      }
      /* Arrow keys move the divider; whether that widens or narrows the column
         depends on which side of it the divider is. */
      const grows = column.edge === "right" ? towards : -towards;
      const width = element.getBoundingClientRect().width + grows * STEP * rootFontSize();
      apply(column, clamp(width, limits(column, row)));
      event.preventDefault();
    });

    /* Back to whatever extra.css says. */
    handle.addEventListener("dblclick", () => reset(column));

    content.appendChild(handle);
    return handle;
  }

  function attach() {
    const row = document.querySelector(".md-main__inner");
    const content = row && row.querySelector(".md-content");
    if (!content) {
      return;
    }

    for (const column of COLUMNS) {
      const element = row.querySelector(column.selector);
      if (element) {
        build(column, element, content, row);
      }
    }
  }

  /* The theme's `navigation.instant` swaps the page container rather than
     reloading, which takes `.md-content` and the strips parented to it with it.
     This file is loaded outside that container, so it is never re-executed and
     the strips would not come back. `document$` is the theme's own "a document
     is ready" signal, emitted on first load and again after every swap, so the
     strips are rebuilt each time -- against the new elements, which is why
     everything above is looked up inside `attach`. The fallback covers the file
     being used without the theme's bundle; by then the DOM is ready either way,
     since scripts are loaded at the end of the body. */
  if (window.document$ && typeof window.document$.subscribe === "function") {
    window.document$.subscribe(attach);
  } else {
    attach();
  }
})();
