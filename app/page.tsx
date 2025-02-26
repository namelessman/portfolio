export default function Home() {
  return (
    <main className="py-8 px-8 lg:py-24 lg:px-64 lg:max-w-7xl mx-auto">
      <section className="w-full mb-24">
        <h1 className="mb-2 text-4xl font-bold">
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
            href="https://namelssman.js.org"
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
            <a href="">Email</a>
          </li>
          <li>
            <a href="">GitHub</a>
          </li>
          <li>
            <a href="">LinkedIn</a>
          </li>
        </ul>
      </section>
    </main>
  );
}
