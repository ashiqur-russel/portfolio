import Head from 'next/head';

const Resume = () => {
  return (
    <>
      <Head>
        <title>Vera Scheunert - Resume</title>
        <meta name="description" content="Vera Scheunert" />
      </Head>

      <div className="page text-black mx-auto">
        <section className="flex items-start">
          <div>
            <h1 className="text-sm tracking-tight">Vera Scheunert</h1>
          </div>
        </section>
        <main className="mt-2 space-y-4">
          {/* Contact Section */}
          <section className="border-t border-black grid grid-cols-[1fr,5fr] gap-2 items-baseline pt-2">
            <div className="font-extrabold text-xxs tracking-tight">
              Contact
            </div>
            <div className="text-xxs tracking-tight grid grid-cols-3 gap-x-2 gap-y-2 leading-none">
              <p>Leipzig, Germany</p>
              <a href="mailto:verascheunert@pm.me">verascheunert@pm.me</a>
              <a target="blank" href="https://github.com/verascheunert">
                github.com/verascheunert
              </a>
              <p>+49 151 65181623</p>
              <a target="blank" href="https://verascheunert.com">
                verascheunert.com
              </a>
              <a
                target="blank"
                href="https://www.linkedin.com/in/verascheunert/"
              >
                linkedin.com/in/vera-scheunert
              </a>
            </div>
          </section>

          {/* About Section */}
          <section className="border-t border-black grid grid-cols-[1fr,5fr] gap-2 pt-2 items-baseline">
            <div className="font-extrabold text-xxs tracking-tight">About</div>
            <div className="text-xxs leading-relaxed tracking-tight">
              I’m a full-stack engineer who transforms ideas into complete,
              innovative digital experiences. I lead engineering teams, mentor
              emerging talent, and sometimes even step into the classroom to
              teach the craft of programming. With a background in communication
              management and a passion for design, I blend technical precision
              with creative storytelling to build solutions that are both robust
              and engaging.
            </div>
          </section>

          {/* Work Experience Section */}
          <section className="border-t border-black grid grid-cols-[1fr,5fr] gap-2 pt-2 items-baseline">
            <div className="font-extrabold text-xxs tracking-tight">
              Work Experience
            </div>
            <ul className="space-y-4">
              {/* Example of one work experience entry */}
              <div>
                <div className="flex text-xxs items-baseline">
                  <div>
                    <h3 className="text-xs font-bold">
                      Software Engineering Team Lead
                    </h3>
                    <div className="text-xxs">Aignostics</div>
                  </div>
                  <div className="text-xxs font-bold ml-auto">
                    Jun 2024 - Present
                  </div>
                </div>
                <div>
                  <p className="text-xxs tracking-tight leading-relaxed mt-1 flex gap-1">
                    <span className="flex items-center h-5">
                      <span className="border-2 block border-black size-0"></span>
                    </span>
                    Manage and mentor a diverse team, fostering a collaborative
                    culture and aligning with business needs.
                  </p>
                  {/* Additional Work Experience Items Here */}
                </div>
              </div>
              {/* Add more work experience as needed */}
            </ul>
          </section>

          {/* Projects Section */}
          <section className="border-t border-black grid grid-cols-[1fr,5fr] gap-2 pt-2 items-baseline">
            <div className="font-extrabold text-xxs tracking-tight">
              Projects
            </div>
            <ul>
              <li className="grid grid-cols-[1fr,2fr] gap-2 items-baseline">
                <div>
                  <h3 className="tracking-tight flex items-baseline flex-col">
                    <span className="text-xs font-bold">
                      Prosumio: Game-based Learning Platform
                    </span>
                    <a
                      target="blank"
                      className="block text-xxs underline-offset-1 ml-2"
                      href="https://prosumio.de/"
                    >
                      https://prosumio.de/
                    </a>
                  </h3>
                </div>
                <div>
                  <p className="text-xxs tracking-tight leading-relaxed mt-1">
                    Developed a game-based learning app (Flutter) and a teacher
                    portal (Next.js) to facilitate custom lesson creation and
                    interactive learning experiences.
                  </p>
                  <p className="text-xxs tracking-tight mt-4">
                    Flutter, Next.js, Python
                  </p>
                </div>
              </li>
              {/* Additional Projects Here */}
            </ul>
          </section>

          {/* Education Section */}
          <section className="border-t border-black grid grid-cols-[1fr,5fr] gap-2 pt-2 items-baseline">
            <div className="font-extrabold text-xxs tracking-tight">
              Education
            </div>
            <ul className="space-y-4">
              <div>
                <div className="flex text-xxs items-baseline">
                  <div>
                    <h3 className="text-xs font-bold">
                      Master of Arts in Communication Management
                    </h3>
                    <div className="text-xxs">University of Leipzig</div>
                  </div>
                  <div className="text-xxs font-bold ml-auto">
                    Oct 2018 - Jul 2021
                  </div>
                </div>
                <div>
                  <p className="text-xxs tracking-tight leading-relaxed mt-1 flex gap-1 items-center">
                    <span className="flex items-center h-5">
                      <span className="border-2 block border-black size-0"></span>
                    </span>
                    Thesis: Natural Language Processing in Communication
                    Management.
                  </p>
                </div>
              </div>
              {/* Add more education details if needed */}
            </ul>
          </section>

          {/* Skills Section */}
          <section className="border-t border-black grid grid-cols-[1fr,5fr] gap-2 pt-2 items-baseline">
            <div className="font-extrabold text-xxs tracking-tight">Skills</div>
            <div>
              <ul className="space-y-2">
                <li className="grid grid-cols-[1fr,2fr] gap-x-2">
                  <div className="text-xxs font-bold tracking-tight">
                    Programming Languages
                  </div>
                  <div className="text-xxs">
                    <span>Typescript</span>
                    <span className="mx-1">•</span>
                    <span>Javascript</span>
                    <span className="mx-1">•</span>
                    <span>Python</span>
                    <span className="mx-1">•</span>
                    <span>HTML</span>
                    <span className="mx-1">•</span>
                    <span>CSS</span>
                  </div>
                </li>
                {/* Add other skills as needed */}
              </ul>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default Resume;
