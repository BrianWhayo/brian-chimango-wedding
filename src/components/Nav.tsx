"use client";

import { useEffect, useState } from "react";
import { couple } from "@/lib/wedding-data";

const links = [
  { href: "#details", label: "Wedding Details" },
  { href: "#schedule", label: "Our Day" },
  { href: "#gallery", label: "Gallery" },
  { href: "#outfit", label: "Dress Inspiration" },
  { href: "#faq", label: "FAQ" },
  { href: "#rsvp", label: "RSVP" },
  { href: "#wishes", label: "Wishes" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeHref, setActiveHref] = useState("#top");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);


  useEffect(() => {
    const sectionIds = ["details", "schedule", "gallery", "outfit", "faq", "rsvp", "wishes"];
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target.id) {
          setActiveHref(`#${visible.target.id}`);
        } else if (window.scrollY < window.innerHeight * 0.55) {
          setActiveHref("#top");
        }
      },
      { rootMargin: "-22% 0px -60% 0px", threshold: [0.01, 0.25, 0.5] }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        scrolled || open
          ? "bg-ivory/92 shadow-[0_1px_0_0_rgba(0,0,0,0.06)] backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-10">
        <a
          href="#top"
          className={`shrink-0 font-serif text-lg tracking-wide transition-colors ${
            scrolled || open ? "text-ink" : "text-ivory"
          }`}
        >
          {couple.partnerOne} <span className="text-gilt">&amp;</span> {couple.partnerTwo}
        </a>

        <ul className="hidden items-center gap-5 xl:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                aria-current={activeHref === link.href ? "location" : undefined}
                className={`relative text-[10px] uppercase tracking-[0.18em] transition-colors hover:text-moss after:absolute after:-bottom-2 after:left-1/2 after:h-px after:-translate-x-1/2 after:bg-gilt after:transition-all ${
                  scrolled ? "text-charcoal" : "text-ivory"
                } ${activeHref === link.href ? "after:w-full" : "after:w-0"}`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#rsvp"
          className={`hidden rounded-full border px-5 py-2 text-[10px] uppercase tracking-[0.2em] transition-colors md:inline-block ${
            scrolled
              ? "border-evergreen text-evergreen hover:bg-evergreen hover:text-ivory"
              : "border-ivory text-ivory hover:bg-ivory hover:text-evergreen"
          }`}
        >
          RSVP
        </a>

        <button
          type="button"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
          className="relative flex h-11 w-11 flex-col items-center justify-center gap-1.5 xl:hidden"
        >
          <span
            className={`block h-px w-6 transition-transform duration-300 ${
              scrolled || open ? "bg-ink" : "bg-ivory"
            } ${open ? "translate-y-[3.5px] rotate-45" : ""}`}
          />
          <span
            className={`block h-px w-6 transition-transform duration-300 ${
              scrolled || open ? "bg-ink" : "bg-ivory"
            } ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`}
          />
        </button>
      </nav>

      <div
        id="mobile-menu"
        aria-hidden={!open}
        className={`grid overflow-hidden transition-[grid-template-rows] duration-500 ease-out xl:hidden ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <ul className="flex flex-col gap-1 px-6 pb-8 pt-2 sm:px-10">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  tabIndex={open ? undefined : -1}
                  aria-current={activeHref === link.href ? "location" : undefined}
                  className={`block border-b border-mist/60 py-3.5 font-serif text-2xl transition-colors ${
                    activeHref === link.href ? "text-moss" : "text-ink"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}
