export default function Contact() {
  return (
    <section
      id="contact"
      className="py-block-gap px-margin-mobile sm:px-margin-desktop bg-surface-container-low border-t border-outline-variant flex flex-col justify-between snap-start"
    >
      <div className="grid grid-cols-12 gap-gutter mb-24">
        <div data-reveal className="col-span-12 md:col-span-4 mb-12 md:mb-0">
          <h2 className="font-serif text-headline-lg uppercase sticky top-32">
            INITIATE <br />{" "}
            <span className="text-primary italic">CONNECTION</span>
          </h2>
        </div>
        <div className="col-span-12 md:col-span-7 md:col-start-6 space-y-12">
          <div data-reveal className="border-b border-outline-variant pb-12">
            <p className="font-body-lg leading-relaxed text-secondary mb-8">
              Currently accepting inquiries for select software engineering and
              full-stack development roles or projects. Let&apos;s build
              something extraordinary together.
            </p>
          </div>

          <div
            data-reveal
            style={{ transitionDelay: "90ms" }}
            className="border-b border-outline-variant pb-12"
          >
            <span className="font-label-caps text-primary mb-4 block">
              EMAIL
            </span>
            <a
              href="mailto:morrison@namelessman.com"
              className="font-headline-md text-foreground hover:text-primary transition-colors"
            >
              morrison@namelessman.com
            </a>
          </div>

          <div
            data-reveal
            style={{ transitionDelay: "180ms" }}
            className="border-b border-outline-variant pb-12"
          >
            <span className="font-label-caps text-primary mb-4 block">
              LOCATION
            </span>
            <p className="font-body-lg text-secondary">Auckland, New Zealand</p>
          </div>

          <div
            data-reveal
            style={{ transitionDelay: "270ms" }}
            className="pb-12"
          >
            <span className="font-label-caps text-primary mb-4 block">
              CONNECT
            </span>
            <div className="flex flex-col gap-3">
              <a
                href="https://linkedin.com/in/morrison-zhou"
                target="_blank"
                rel="noopener noreferrer"
                className="font-body-lg text-foreground hover:text-primary transition-colors"
              >
                → LinkedIn: morrison-zhou
              </a>
              <a
                href="https://github.com/namelessman"
                target="_blank"
                rel="noopener noreferrer"
                className="font-body-lg text-foreground hover:text-primary transition-colors"
              >
                → GitHub: namelessman
              </a>
              <a
                href="https://namelessman.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-body-lg text-foreground hover:text-primary transition-colors"
              >
                → Website: namelessman.com
              </a>
            </div>
          </div>
        </div>
      </div>

      <footer className="mt-8 bg-primary text-surface min-h-[280px] md:min-h-[360px] border-t border-outline-variant flex items-end p-gutter">
        <div className="font-label-caps text-white">© 2026 NAMELESSMAN</div>
      </footer>
    </section>
  );
}
