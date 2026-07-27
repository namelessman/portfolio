"use client";

import { useEffect } from "react";

export default function ScrollEffects() {
  useEffect(() => {
    const root = document.documentElement;
    const scrollContainer = document.querySelector<HTMLElement>(
      "[data-scroll-container]",
    );
    const revealElements =
      document.querySelectorAll<HTMLElement>("[data-reveal]");

    const updateScroll = () => {
      root.style.setProperty(
        "--scroll-y",
        `${scrollContainer?.scrollTop ?? window.scrollY}px`,
      );
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.16,
        rootMargin: "0px 0px -8% 0px",
      },
    );

    revealElements.forEach((element) => observer.observe(element));
    updateScroll();
    scrollContainer?.addEventListener("scroll", updateScroll, {
      passive: true,
    });

    return () => {
      scrollContainer?.removeEventListener("scroll", updateScroll);
      observer.disconnect();
    };
  }, []);

  return null;
}
