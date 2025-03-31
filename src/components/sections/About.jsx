import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const frontendSkills = [
    "React",
    "JavaScript",
    "HTML",
    "CSS",
    "TailwindCSS",
  ];

  const backendSkills = ["Node.js", "Java", "Spring Boot", "MongoDB", "mySQL"];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {" "}
            About Me
          </h2>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
              Passionate developer with expertise in building scalable web
              applications and creating innovative solutions.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 🏫 Education </h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>
                  <strong> Back End Bootcamp </strong> - Factoría F5 (2024) - Completed a 550-hour bootcamp, building real-world projects with Java, Spring Boot, and MySQL. Skilled in backend development, databases, API REST and agile methodologies.
                </li>
              <li>
                  <strong> Web Development Apps </strong> - ASATA (2023) - Completed a 510-hour bootcamp plus 80 hours of work experience, building real-world projects with HTML, CSS, Bootstrap, PHP, and MySQL. Skilled in web development, database management, API REST and responsive design.
                </li>
              <li>
                  <strong> Full Stack Bootcamp </strong> - Ironhack (2022) - Completed a 600-hour bootcamp in English, developing real-world projects with React, MongoDB, JavaScript, HTML, Bootstrap, Git, and GitHub. Skilled in frontend and backend development, database management, and version control.
                </li>
              
                
              </ul>
            </div>
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 💼 Work Experience </h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h4 className="font-semibold">
                   
                    Intern Front End Developer at Ingenium S.L. (Llanera- Asturias 2023)
                  </h4>
                  <p>
                  Internship period in which I developed a web application for resolving technical issues with home automation devices.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold">
                
                    Intern at Quinky Startups (Remote - Netherlands 2022)
                  </h4>
                  <p>
                  Creating a mock app with given wireframes, looking for competitors's features and documenting them.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};