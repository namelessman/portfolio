export default function TopBar() {
  return (
    <header className="hidden sm:flex fixed top-0 right-0 w-full z-40 bg-transparent justify-between items-center px-gutter py-8 pl-32 md:pl-40 pointer-events-none">
      <div className="flex items-center gap-4 pointer-events-auto">
        <span className="material-symbols-outlined text-foreground">
          grid_view
        </span>
        <span className="font-label-caps text-foreground uppercase font-bold tracking-tighter">
          PORTFOLIO_01
        </span>
      </div>
      <div className="flex items-center gap-8 pointer-events-auto">
        <span className="font-label-caps text-foreground">
          LOC: AUCKLAND, NZ
        </span>
        <span className="material-symbols-outlined text-foreground">
          sensors
        </span>
      </div>
    </header>
  );
}
