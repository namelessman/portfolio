"use client";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export default function Resume() {
  const experience = [
    {
      period: "2025-07 - PRESENT",
      title: "AI Software Engineer",
      company: "Wallah Agency | Auckland, NZ",
      points: [
        "Developed AI-driven workflows analyzing external video content, generating structured docs, and automating Shopify product management.",
        "Integrated third-party services with Python to streamline video-to-text translation and automate content generation.",
        "Maintained internal websites and backend services (WordPress, domains, server migration).",
      ],
    },
    {
      period: "2025-04 - 2025-07",
      title: "Front End Engineer (Intern)",
      company: "FoodMe LTD | Auckland, NZ",
      points: [
        "Led React Native client development, reducing app launch time from 10s to 2s.",
        "Developed backend in Python, integrating email and push notifications with AWS Serverless.",
      ],
    },
    {
      period: "2024-07 - 2025-07",
      title: "Master of Software Engineering",
      company: "Yoobee College | Auckland, NZ",
      points: [
        "Completed advanced coursework and projects in software engineering and system design.",
      ],
    },
    {
      period: "2020-06 - 2023-06",
      title: "Software Engineer",
      company: "Tencent Group (Sogou) | Beijing, China",
      points: [
        "Developed complex web applications using micro-frontend architecture with React, TypeScript, and MobX.",
        "Led CI/CD pipeline implementation, reducing deployment time by 20%.",
        "Collaborated with teams to support flagship products impacting 450M+ active users.",
      ],
    },
    {
      period: "2018-04 - 2020-05",
      title: "Front-End Engineer",
      company: "Hangzhou Yangtuo | Hangzhou, China",
      points: [
        "Optimized responsive web and hybrid app pages for Hipac E-commerce platform (200,000+ users).",
        "Spearheaded the migration of mobile app functionality into a WeChat Mini Program.",
      ],
    },
  ];

  const formatPeriod = (period: string) => period.replace(" - ", " — ");

  const trackDownloadClick = () => {
    window.gtag?.("event", "resume_download_click", {
      event_category: "engagement",
      event_label: "Morrison_Zhou_CV.pdf",
      transport_type: "beacon",
    });
  };

  return (
    <section
      id="resume"
      className="py-block-gap px-margin-mobile sm:px-margin-desktop bg-surface snap-start"
    >
      <div className="grid grid-cols-12 gap-gutter">
        <div
          data-reveal
          className="col-span-12 md:col-span-4 mb-12 md:mb-0 md:sticky md:top-32 md:self-start"
        >
          <h2 className="font-serif text-headline-lg uppercase">
            THE <br /> <span className="text-primary italic">TRAJECTORY</span>
          </h2>
          <div className="mt-8 flex flex-col gap-3">
            <a
              href="/Morrison_Zhou_CV.pdf"
              download
              onClick={trackDownloadClick}
              className="inline-flex items-center justify-center border-2 border-primary bg-primary px-5 py-3 font-label-caps text-surface transition-colors hover:bg-surface hover:text-primary"
            >
              DOWNLOAD CV
            </a>
            <a
              href="/Morrison_Zhou_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center border-2 border-outline-variant bg-surface px-5 py-3 font-label-caps text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              VIEW CV
            </a>
          </div>
        </div>
        <div className="col-span-12 md:col-span-7 md:col-start-6 space-y-24">
          {experience.map((exp, idx) => (
            <div
              key={idx}
              data-reveal
              style={{ transitionDelay: `${idx * 90}ms` }}
              className="grid grid-cols-[24px_1fr] gap-6 border-b border-outline-variant pb-12"
            >
              <div className="relative flex justify-center pt-1">
                <span className="w-3 h-3 bg-primary rounded-full z-10" />
                <span className="absolute top-1 bottom-0 w-px bg-outline-variant" />
              </div>
              <div>
                <span className="font-label-caps text-primary block">
                  {(idx + 1).toString().padStart(2, "0")} /{" "}
                  {formatPeriod(exp.period)}
                </span>
                <h3 className="font-serif text-headline-md mt-4 mb-6">
                  {exp.title}
                </h3>
                <p className="font-body-sm text-secondary font-bold mb-4">
                  {exp.company}
                </p>
                <ul className="text-secondary max-w-xl space-y-2 list-disc pl-4 font-body-sm">
                  {exp.points.map((point, pidx) => (
                    <li key={pidx}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
