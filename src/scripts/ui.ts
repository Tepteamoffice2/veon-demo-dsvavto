// Page-wide behaviour: FutureLink notes on tap, the mobile menu, and the active anchor in the header.

// FutureLink: a tap shows the note for 3 s; a note that would leave the screen is nudged back inside.
const fit = (el: HTMLElement) => {
  const note = el.querySelector<HTMLElement>(".future-link__note");
  if (!note) return;
  note.style.translate = "";
  requestAnimationFrame(() => {
    const r = note.getBoundingClientRect();
    const pad = 8;
    let dx = 0;
    if (r.right > window.innerWidth - pad) dx = window.innerWidth - pad - r.right;
    if (r.left + dx < pad) dx = pad - r.left;
    if (dx) note.style.translate = `${Math.round(dx)}px 0`;
  });
};
document.querySelectorAll<HTMLElement>("[data-future]").forEach((el) => {
  let timer = 0;
  el.addEventListener("pointerenter", () => fit(el));
  el.addEventListener("focus", () => fit(el));
  el.addEventListener("click", () => {
    document.querySelectorAll(".future-link.is-open").forEach((o) => o !== el && o.classList.remove("is-open"));
    el.classList.add("is-open");
    fit(el);
    window.clearTimeout(timer);
    timer = window.setTimeout(() => el.classList.remove("is-open"), 3000);
  });
  el.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") { e.preventDefault(); el.click(); }
  });
});
document.addEventListener("pointerdown", (e) => {
  const t = e.target as Element | null;
  if (t && t.closest("[data-future]")) return;
  document.querySelectorAll(".future-link.is-open").forEach((o) => o.classList.remove("is-open"));
});

// Mobile menu (<details>): Esc, «Закрити» and any link close it; focus returns to «Меню»; page does not scroll under it.
const menu = document.querySelector<HTMLDetailsElement>("[data-menu]");
if (menu) {
  const toggle = menu.querySelector<HTMLElement>("summary");
  const close = (refocus = true) => {
    menu.open = false;
    if (refocus) toggle?.focus();
  };
  menu.addEventListener("toggle", () => {
    document.documentElement.style.overflow = menu.open ? "hidden" : "";
    if (menu.open) menu.querySelector<HTMLElement>("[data-menu-close]")?.focus();
  });
  menu.querySelector("[data-menu-close]")?.addEventListener("click", () => close());
  menu.querySelectorAll("[data-menu-link]").forEach((a) => a.addEventListener("click", () => close(false)));
  menu.querySelectorAll('a[href^="tel:"], a[href^="https://t.me"]').forEach((a) => a.addEventListener("click", () => close(false)));
  document.addEventListener("keydown", (e) => { if (e.key === "Escape" && menu.open) close(); });
  window.matchMedia("(min-width: 75rem)").addEventListener("change", (m) => { if (m.matches && menu.open) close(false); });
}

// Header: mark the anchor of the section in view.
const links = Array.from(document.querySelectorAll<HTMLAnchorElement>("[data-spy]"));
const sections = links
  .map((a) => document.querySelector<HTMLElement>(a.getAttribute("href") || ""))
  .filter((s): s is HTMLElement => !!s);
if (sections.length && "IntersectionObserver" in window) {
  const visible = new Map<string, number>();
  const io = new IntersectionObserver((entries) => {
    for (const e of entries) visible.set(e.target.id, e.isIntersecting ? e.intersectionRatio : 0);
    let best = "";
    let max = 0;
    for (const s of sections) {
      const v = visible.get(s.id) || 0;
      if (v > max) { max = v; best = s.id; }
    }
    links.forEach((a) => {
      if (a.getAttribute("href") === `#${best}`) a.setAttribute("aria-current", "true");
      else a.removeAttribute("aria-current");
    });
  }, { rootMargin: "-30% 0px -50% 0px", threshold: [0, 0.01, 0.25, 0.5, 1] });
  sections.forEach((s) => io.observe(s));
}
