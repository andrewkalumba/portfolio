"use client"
import { useState } from "react"
import ReusableH2 from "../ReusableH2"
import { FaGithub } from "react-icons/fa"

const Projects = () => {
  const [activeButton, setActiveButton] = useState<"github" | "about">("about")

  return (
    <div
      className="text-amber-50 font-bold text-2xl uppercase"
      style={{
        backgroundImage: `url("./image3.jpg")`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        minHeight: "100vh"
      }}>
      <div className="flex flex-col justify-center items-center p-6">
        <ReusableH2 title="Andrew Julius Kalumba" />
        <div className="flex gap-8 pt-5">
          <button
            onClick={() => setActiveButton("github")}
            className="flex justify-center items-center gap-2.5 text-2xl bg-[#218380] text-amber-50 rounded-3xl px-6 py-3 uppercase">
            <FaGithub className="text-2xl" />
            GitHub
          </button>
          <button
            onClick={() => setActiveButton("about")}
            className="text-2xl bg-[#218380] text-amber-50 rounded-3xl px-6 py-3 uppercase">
            About
          </button>
        </div>
      </div>

      {activeButton && (
        <div className="flex justify-center items-center px-6">
          <div className="bg-[#006E90] text-amber-50 text-lg font-normal normal-case text-center max-w-2xl p-6 rounded-xl shadow-lg">
            {activeButton === "github" && (
              <p>
                You can explore my projects on GitHub, where I regularly push code for web apps, UI
                experiments, and open-source contributions with other repositories i contribute towards to enhance the best user interface and experience:
                <a
                  href="https://github.com/andrewkalumba"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 underline mt-4"
                >
                  <FaGithub className="text-2xl" />
                  github.com/andrewkalumba
                </a>
              </p>
            )}

            {activeButton === "about" && (
              <p>
                Hi, I’m Andrew Julius Kalumba, currently studying at ChangeMaker Educations in
                Stockholm. I am a passionate and detail-oriented Frontend Developer with a strong
                foundation in modern web technologies and a unique background in hospitality
                management. I bring a user-centered approach to development, blending creativity
                with functionality to deliver seamless digital experiences. I specialize in building
                responsive, accessible, and visually engaging web interfaces using modern tools like
                React.js, Next.js, JavaScript, Tailwind CSS, MUI, and styled-components. With a
                solid grasp of both frontend frameworks and backend fundamentals like Node.js and
                Express.js, I contribute to full-stack development with a frontend focus. I can use
                tools and practices such as GitHub, Version Control, REST APIs, AJAX, jQuery, Agile
                Methodologies and now expanding my backend skills and exploring new UI/UX trends to
                stay ahead in the fast-evolving tech landscape.
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default Projects
