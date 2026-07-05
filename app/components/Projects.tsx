export default function Projects() {
  const projects = [
    {
      id: "01",
      title: "Favour - NZ's DIY Meal Kit",
      link: "https://www.tryfavour.com/",
      tech: ["REACT NATIVE", "PYTHON", "AWS"],
      description:
        "Led React Native client development and integrated Customer.io for targeted push notifications. Built Python backend services for personalized email automation.",
    },
    {
      id: "02",
      title: "Triply - Ride Sharing",
      link: "https://triply.co.nz",
      tech: ["NEXT.JS", "POSTGRESQL", "VERCEL"],
      description:
        "Founded Triply, designing and building a carpooling platform targeting travelers in NZ. Handled end-to-end full-stack development, RESTful APIs, and deployment.",
    },
    {
      id: "03",
      title: "ROC (Resource Operating Center)",
      link: null,
      tech: ["REACT", "CI/CD", "MICROSERVICES"],
      description:
        "Developed a platform managing 6,000+ resources (servers, containers, RDS, domains). Optimized image handling with CDN, reducing load time by 20%.",
    },
    {
      id: "04",
      title: "Hipac E-commerce Platform",
      link: null,
      tech: ["WECHAT MINI-PROGRAM", "MOBILE APP", "REACT"],
      description:
        "Developed core product pages for Hipac's WeChat Mini Program. Enhanced performance contributing to a 15% conversion rate increase for 200,000+ users.",
    },
  ];

  const forFunProjects = [
    {
      id: "05",
      title: "Kea Motel - Hospitality Website",
      link: "https://keamotel.co.nz",
      tech: ["WEB DEVELOPMENT", "HOSTING", "DOMAIN MGMT"],
      description:
        "Engaged directly with the motel owner to scope requirements, align on design direction, and iterate on content. Designed, deployed, and maintain the site end-to-end as the single point of contact.",
    },
    {
      id: "06",
      title: "SubShield - Subtitle Blocker",
      link: "https://chromewebstore.google.com/detail/subshield-%E2%80%93-subtitle-bloc/llbeeoipfcniidgpknggeckkcobfnhmn",
      tech: ["CHROME EXTENSION", "JAVASCRIPT", "CSS"],
      description:
        "A lightweight browser extension that blocks subtitles on video platforms to help language learners improve listening comprehension. Features customizable blackout boxes and keyboard shortcuts.",
    },
    {
      id: "07",
      title: "Kogan Helper - Mobile Usage Tracker",
      link: "https://chromewebstore.google.com/detail/kogan-helper/mcponoabcngmejbmhimhmkhmkikhmphe",
      tech: ["CHROME EXTENSION", "JAVASCRIPT", "API"],
      description:
        "Fetches and displays Kogan Mobile usage summary with one click from any website. Includes push notifications for low data alerts. Serves 500+ users on the Chrome Web Store.",
    },
  ];

  const renderProject = (
    project: (typeof projects)[0] | (typeof forFunProjects)[0],
    index: number
  ) => (
    <div
      key={project.id}
      data-reveal
      style={{ transitionDelay: `${index * 90}ms` }}
      className="border-b border-outline-variant pb-12"
    >
      <span className="font-label-caps text-primary">
        {project.id} / {project.title.split(" ")[0].toUpperCase()}
      </span>
      <h3 className="font-serif text-headline-md mt-4 mb-6">
        {project.title}
      </h3>
      <p className="text-secondary max-w-xl mb-6">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <span
            key={t}
            className="px-3 py-1 bg-surface border border-outline-variant font-label-caps text-xs"
          >
            {t}
          </span>
        ))}
      </div>
      {project.link && (
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 text-primary hover:text-primary-container transition-colors font-label-caps"
        >
          → VIEW PROJECT
        </a>
      )}
    </div>
  );

  return (
    <section
      id="projects"
      className="py-block-gap px-margin-mobile sm:px-margin-desktop bg-surface-container-low border-y border-outline-variant snap-start"
    >
      <div className="grid grid-cols-12 gap-gutter">
        <div data-reveal className="col-span-12 md:col-span-4 mb-12 md:mb-0">
          <h2 className="font-serif text-headline-lg uppercase sticky top-32">
            SELECTED <br /> <span className="text-primary italic">WORKS</span>
          </h2>
        </div>
        <div className="col-span-12 md:col-span-7 md:col-start-6 space-y-24">
          {projects.map((project, index) => renderProject(project, index))}
        </div>
      </div>

      {/* For Fun Section */}
      <div id="for-fun" className="grid grid-cols-12 gap-gutter mt-24">
        <div data-reveal className="col-span-12 md:col-span-4 mb-12 md:mb-0">
          <h2 className="font-serif text-headline-lg uppercase sticky top-32">
            FOR <br /> <span className="text-primary italic">FUN</span>
          </h2>
        </div>
        <div className="col-span-12 md:col-span-7 md:col-start-6 space-y-24">
          {forFunProjects.map((project, index) =>
            renderProject(project, index)
          )}
        </div>
      </div>
    </section>
  );
}
