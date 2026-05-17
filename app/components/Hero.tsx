export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen snap-start flex flex-col justify-center px-margin-mobile sm:px-margin-desktop relative overflow-hidden pt-24 sm:pt-32"
    >
      <div className="z-10 max-w-5xl">
        <div className="mb-8 flex w-fit items-center gap-4 rounded-none border-2 border-outline-variant bg-surface px-3 py-3 sm:px-4 sm:py-4 shadow-[8px_8px_0_0_var(--foreground)]">
          <div className="flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center border-2 border-primary bg-primary-container text-primary overflow-hidden">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCNT5HE57WRVmY_DZNe2NQyoqKhPahBAiSP0hD_v4lc-0xHwLwF7felsNn578f-_Tx243pLwpJ4l5PmzvdCPNcAxChjpbBJCxyC7-vQgaMffUFCbWe6KURMC68byGX5LhHA9WmungTPx4OV7yug-rXXrvsriKWuK2piFYp4qE8iJDPmEgSBNuJQ6ElAlsaS__IgfRmpom_kemhiLqs9i_3cqrws5X7qfVKmLz6nmC83agOXvCkiPXq_QQqhlOXhHPlsxKzpa7JZLWUS"
              alt="Identity mark"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="hidden sm:block">
            <div className="font-label-caps text-primary">PROFILE</div>
            <div className="font-serif text-headline-md leading-none">
              namelessman
            </div>
          </div>
        </div>
        <p
          data-reveal
          className="mt-20 sm:mt-24 font-label-caps text-primary mb-4 tracking-widest"
        >
          NAMELESSMAN / SOFTWARE ENGINEER
        </p>
        <h1
          data-reveal
          style={{ transitionDelay: "90ms" }}
          className="font-serif text-headline-lg-mobile md:text-display-2xl uppercase leading-[0.9] relative"
        >
          <span className="relative z-20 block mb-3 md:mb-0">namelessman</span>
          <span className="relative z-30 inline-block mt-2 md:-mt-6 bg-primary text-surface px-5 py-2 md:px-8 md:py-3 shadow-[0_0_0_2px_var(--color-primary)]">
            Software Engineer
          </span>
        </h1>
        <div className="grid grid-cols-12 gap-gutter mt-12">
          <div
            data-reveal
            style={{ transitionDelay: "180ms" }}
            className="col-span-12 md:col-span-6"
          >
            <p className="font-body-lg leading-relaxed border-l-4 border-primary pl-6 text-secondary max-w-xl">
              Software Engineer with 8 years&apos; experience delivering
              scalable web applications. Architecting digital systems that
              transcend utility—where underlying logic is as beautiful as the
              canvas of a master.
            </p>
          </div>
        </div>
      </div>
      <div
        data-parallax="slow"
        className="absolute left-0 top-32 md:top-24 w-20 md:w-52 h-24 md:h-64 bg-secondary-container -z-10 opacity-70 md:opacity-100"
      />
      <div
        data-parallax="medium"
        className="absolute right-0 top-28 md:top-20 w-24 md:w-[32rem] h-24 md:h-[36rem] bg-primary-container -z-10 opacity-60 md:opacity-100"
      />
      <div
        data-parallax="fast"
        className="absolute right-[8%] md:right-[18%] bottom-24 md:bottom-20 w-16 md:w-64 h-16 md:h-64 bg-tertiary-container -z-10 opacity-70"
      />
      <div
        data-parallax="medium"
        className="absolute left-[34%] md:left-[38%] top-[30%] md:top-[22%] w-12 md:w-32 h-12 md:h-32 bg-primary opacity-85 -z-10"
      />
      <div className="absolute bottom-12 right-margin-desktop font-label-caps text-foreground flex-col items-end hidden md:flex">
        <span>SCROLL TO EXPLORE</span>
        <span className="material-symbols-outlined animate-bounce mt-2">
          south
        </span>
      </div>
    </section>
  );
}
