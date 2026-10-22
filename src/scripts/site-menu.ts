/**
 * The compact-screen menu is a native popover: it opens, closes, dismisses on Escape and outside
 * clicks, and reports its state to assistive technology without script. The one thing it cannot
 * know is that following a link inside it should also put it away.
 */
for (const menu of document.querySelectorAll<HTMLElement>("[data-site-menu]")) {
  menu.addEventListener("click", (event) => {
    if (event.target instanceof Element && event.target.closest("a[href]")) menu.hidePopover();
  });
}
