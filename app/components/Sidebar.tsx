import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 h-full w-14 sm:w-20 md:w-32 z-50 border-r-2 border-outline-variant bg-surface flex flex-col items-center justify-between py-8 md:py-12">
      <div className="font-serif text-[10px] sm:text-[11px] md:text-[13px] uppercase tracking-[0.28em] text-primary select-none text-center leading-none px-1 sm:px-2">
        namelessman
      </div>
      <nav className="flex flex-col gap-8 sm:gap-12 md:gap-24 items-center">
        {[
          { label: "HOME", icon: "home", href: "#home" },
          { label: "PROJECTS", icon: "architecture", href: "#projects" },
          { label: "RESUME", icon: "history", href: "#resume" },
          { label: "CONTACT", icon: "mail", href: "#contact" },
        ].map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className="group flex flex-col items-center justify-center text-foreground hover:text-primary transition-colors duration-300"
          >
            <span className="material-symbols-outlined mb-1 sm:mb-2 group-hover:scale-110 transition-transform text-[18px] sm:text-[24px]">
              {item.icon}
            </span>
            <span
              className="font-mono text-[10px] sm:text-label-caps tracking-widest uppercase"
              style={{
                writingMode: "vertical-rl",
                transform: "rotate(180deg)",
              }}
            >
              {item.label}
            </span>
          </Link>
        ))}
      </nav>
      <div className="text-primary">
        <span className="material-symbols-outlined animate-bounce text-[18px] sm:text-[24px]">
          south
        </span>
      </div>
    </aside>
  );
}
