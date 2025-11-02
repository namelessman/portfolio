import Image from "next/image";
// import packageJson from "../package.json";

export default function Home() {
  const basePath = process.env.PAGES_BASE_PATH || "";
  const contact = {
    email: "zhoumq.good@gmail.com",
    github: "https://github.com/namelessman",
    linkedin: "https://www.linkedin.com/in/morrison-zhou-444919280",
  };
  const blog = "https://namelessman.js.org";

  return (
    <main className="py-8 px-8 lg:py-24 lg:px-64 lg:max-w-7xl mx-auto">
      <section className="w-full mb-24">
        <h1 className="mb-4 text-4xl font-bold">
          Yo! This&apos;s namelessman.
        </h1>
        <p className="text-xl mb-8">
          Code simplifies the world, liberates humanity — I create it.
        </p>

        <p>
          Hi, I’m namelessman, a passionate Software Developer with 7+ years of
          experience building scalable and high-performance web and mobile
          applications. I specialize in React, TypeScript and Node.js, creating
          intuitive and efficient user experiences.
        </p>
      </section>
      <section className="mb-24">
        <h2 className="text-xl font-bold mb-8">Skills</h2>
        <div className="grid md:grid-cols-2 md:gap-4">
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>React</li>
            <li>React Native</li>
          </ul>
          <ul>
            <li>Node.js</li>
            <li>GraphQL</li>
            <li>Next.js</li>
            <li>Git</li>
            <li>CI/CD</li>
          </ul>
        </div>
      </section>

      <section className="mb-24">
        <h2 className="text-xl font-bold mb-8">Projects</h2>
        <ul>
          <li className="mb-8">
            <article>
              <h3 className="text-lg font-bold mb-4">
                <a
                  href="https://www.tryfavour.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Favour – NZ’s DIY Meal Kit app →
                </a>
              </h3>
              <p>
                The{" "}
                <span className="font-bold">
                  Favour – NZ’s DIY Meal Kit app
                </span>{" "}
                is a New Zealand–based mobile solution by FoodMe Ltd designed to
                offer a fully customizable DIY meal‑kit experience. It provides
                users with{" "}
                <span className="font-bold">hundreds of recipes each week</span>{" "}
                that they can swap, substitute, or filter by dietary needs,
                budget, brand preference, or ingredients already in their
                fridge. <br />
                As a <span className="font-bold">Front‑End Engineer</span>, I
                led React Native client development and drove multiple
                performance and feature improvements:
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>
                  Reduced app launch time from <strong>~16 s to ~2 s</strong> by
                  optimizing resource loading and cold start workflows in RN.
                </li>
                <li>
                  Integrated <strong>Customer.io</strong> as the messaging
                  backend for targeted push notifications and email campaigns,
                  boosting user engagement and retention.
                </li>
                <li>
                  Built supporting <strong>Python backend services</strong> to
                  feed Customer.io with personalized triggers and user event
                  data.
                </li>
                <li>
                  Configured and maintained separate{" "}
                  <strong>
                    development, staging, and production environments
                  </strong>
                  , streamlining CI/CD and testing.
                </li>
              </ul>
              <p className="mt-2">
                The app connects seamlessly to <strong>Countdown NZ</strong>,
                automatically transferring selected ingredients into the
                user&apos;s trolley for delivery or pickup—typically within
                24 hours—while offering unlimited recipe customization and
                budget awareness (e.g. filtering by per‑serving cost). The app
                holds a <strong>4.8‑star rating</strong> on the App Store from
                ~193 ratings, with user comments praising its ease of use,
                grocery‑list automation, and time/money savings. Overall,
                Favour’s platform empowers food planning, kitchen inventory
                awareness, allergy and budget control, and streamlined grocery
                automation. My contributions delivered a fast, reliable, and
                maintainable front‑end architecture that supports personalized,
                end‑to‑end meal planning for users across New Zealand.
              </p>
            </article>
          </li>

          <li className="mb-8">
            <article>
              <h3 className="text-lg font-bold mb-4">
                ROC (Resource Operations and Control Platform)
              </h3>
              <p>
                The{" "}
                <span className="font-bold">
                  ROC (Resource Operations and Control) Platform
                </span>{" "}
                is a cloud-based system designed for managing large-scale
                resources such as{" "}
                <span className="font-bold">
                  servers, containers, databases, and domains
                </span>
                . Similar to AWS or Azure, it enables efficient{" "}
                <span className="font-bold">
                  monitoring, automation, and access control
                </span>
                , helping businesses optimize their cloud infrastructure. As a{" "}
                <span className="font-bold">front-end developer</span>, I
                contributed to the platform by building{" "}
                <span className="font-bold">
                  scalable and reusable UI components
                </span>{" "}
                with <span className="font-bold">React and TypeScript</span>,
                improving both performance and maintainability. I also optimized{" "}
                <span className="font-bold">CDN-based resource loading</span>,
                reducing page load time by{" "}
                <span className="font-bold">20%</span>, and enhanced the{" "}
                <span className="font-bold">CI/CD pipeline</span>, streamlining
                deployments across global teams. ROC plays a key role in{" "}
                <span className="font-bold">enterprise cloud management</span>,
                providing a more efficient and automated approach to resource
                operations.
              </p>
            </article>
          </li>
          <li className="mb-8">
            <article>
              <h3 className="text-lg font-bold mb-4">
                Invisible Ink Scanner App
              </h3>
              <p>
                The <span className="font-bold">Invisible Ink Scanner App</span>{" "}
                is a mobile application designed to detect and interpret
                invisible ink markings using a{" "}
                <span className="font-bold">Bluetooth-enabled scanner</span>.
                Built with <span className="font-bold">React Native</span>, the
                app provides a seamless experience on both{" "}
                <span className="font-bold">iOS and Android</span>, allowing
                users to scan and verify hidden security features in real-time.
                By integrating directly with a{" "}
                <span className="font-bold">custom Bluetooth scanner</span>, the
                app ensures instant communication with a{" "}
                <span className="font-bold">cloud-based system</span>, enabling
                secure and accurate authentication. This was{" "}
                <span className="font-bold">
                  the first project I worked on in New Zealand
                </span>
                , marking my transition into an international development
                environment. Developed for industries requiring{" "}
                <span className="font-bold">anti-counterfeiting measures</span>,
                it enhances product security by offering a fast, reliable, and
                user-friendly solution for verifying authenticity.
              </p>
            </article>
          </li>
          <li>
            <article>
              <h3 className="text-lg font-bold mb-4 hover:underline">
                <a
                  href="https://chromewebstore.google.com/detail/kogan-helper/mcponoabcngmejbmhimhmkhmkikhmphe"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Kogan Helper →
                </a>
              </h3>
              <p>
                The <span className="font-bold">Kogan Helper</span> is a Chrome
                extension designed to simplify mobile account management for
                Kogan Mobile users in New Zealand. With a single click, it
                provides instant access to current plan details, data usage, and
                remaining balance, eliminating the need for manual navigation
                through multiple pages. Built with a focus on efficiency and
                user convenience, the extension enhances the overall experience
                by offering a fast, seamless, and intuitive way to stay informed
                about mobile usage.
              </p>
            </article>
          </li>
        </ul>
      </section>
      <section className="mb-24">
        <h2 className="text-xl font-bold mb-8">Blog</h2>
        <div className="">
          <p className="mb-4">
            I write about front-end development, technology, and personal
            growth. Most posts are in Chinese, but I&apos;m gradually adding
            more English content.
          </p>
          <a
            href={blog}
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold hover:underline"
          >
            Visit My Blog →
          </a>
        </div>
      </section>
      <section className="mb-24">
        <h2 className="text-xl font-bold mb-8">Contact</h2>
        <ul className="flex justify-between">
          <li>
            <a href={`mailto:${contact.email}`}>
              <Image
                src={`${basePath}/mail.svg`}
                className="invert"
                alt="Email"
                width={36}
                height={36}
              />
            </a>
          </li>
          <li>
            <a href={contact.github}>
              <Image
                src={`${basePath}/github.svg`}
                className="invert"
                alt="GitHub"
                width={36}
                height={36}
              />
            </a>
          </li>
          <li>
            <a href={contact.linkedin}>
              <Image
                src={`${basePath}/linkedin.svg`}
                className="invert"
                alt="LinkedIn"
                width={36}
                height={36}
              />
            </a>
          </li>
        </ul>
      </section>
    </main>
  );
}
