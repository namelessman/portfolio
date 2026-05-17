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
    const sections = Array.from(
      document.querySelectorAll<HTMLElement>("main > section"),
    );

    let isAutoScrolling = false;
    let autoScrollTimeout: ReturnType<typeof window.setTimeout> | null = null;

    const updateScroll = () => {
      root.style.setProperty(
        "--scroll-y",
        `${scrollContainer?.scrollTop ?? window.scrollY}px`,
      );
    };

    const getCurrentSectionIndex = () => {
      if (!scrollContainer || sections.length === 0) {
        return -1;
      }

      const scrollTop = scrollContainer.scrollTop;
      const viewportCenter = scrollTop + scrollContainer.clientHeight / 2;

      return sections.findIndex((section) => {
        const top = section.offsetTop;
        const bottom = top + section.offsetHeight;
        return viewportCenter >= top && viewportCenter < bottom;
      });
    };

    const scrollToSection = (direction: 1 | -1) => {
      if (isAutoScrolling || !scrollContainer) {
        return;
      }

      let targetIndex = getCurrentSectionIndex();

      if (targetIndex === -1) {
        targetIndex = 0;
      }

      const nextIndex = Math.min(
        Math.max(targetIndex + direction, 0),
        sections.length - 1,
      );

      if (nextIndex === targetIndex) {
        return;
      }

      isAutoScrolling = true;
      scrollContainer.scrollTo({
        top: sections[nextIndex].offsetTop,
        behavior: "smooth",
      });

      if (autoScrollTimeout) {
        window.clearTimeout(autoScrollTimeout);
      }

      autoScrollTimeout = window.setTimeout(() => {
        isAutoScrolling = false;
      }, 900);
    };

    const onWheel = (event: WheelEvent) => {
      if (Math.abs(event.deltaY) < 8) {
        return;
      }

      if (!scrollContainer || sections.length === 0 || isAutoScrolling) {
        return;
      }

      const currentIndex = getCurrentSectionIndex();

      if (currentIndex === -1) {
        return;
      }

      const currentSection = sections[currentIndex];
      const sectionTop = currentSection.offsetTop;
      const sectionBottom = sectionTop + currentSection.offsetHeight;
      const viewportHeight = scrollContainer.clientHeight;
      const scrollTop = scrollContainer.scrollTop;
      const maxScrollWithinSection = sectionBottom - viewportHeight;
      const nearSectionTop = scrollTop <= sectionTop + 16;
      const nearSectionBottom = scrollTop >= maxScrollWithinSection - 16;

      if (event.deltaY > 0) {
        if (!nearSectionBottom && maxScrollWithinSection > sectionTop) {
          return;
        }

        event.preventDefault();
        scrollToSection(1);
        return;
      }

      if (!nearSectionTop) {
        return;
      }

      event.preventDefault();
      scrollToSection(-1);
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
    scrollContainer?.addEventListener("wheel", onWheel, { passive: false });

    return () => {
      scrollContainer?.removeEventListener("scroll", updateScroll);
      scrollContainer?.removeEventListener("wheel", onWheel);
      if (autoScrollTimeout) {
        window.clearTimeout(autoScrollTimeout);
      }
      observer.disconnect();
    };
  }, []);

  return null;
}
