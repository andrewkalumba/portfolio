"use client"
import ProjectCard from "../ProjectCard"

const projectData = [
  {
    title: "MealsDb Website",
    description: "My meals website built with Next.js, TailwindCSS. It consists of dynamic routing and the use of context",
    githubLink: "https://github.com/andrewkalumba/world_foods#",
    liveLink: "https://vercel.com/andrewkalumbas-projects/world-foods",
    image: "/mealDb.jpg"
  },
  {
    title: "A game website",
    description: "A group Website built using next.js, tailwind about a game called OK RHAMS CREATIONS. I was one of the group who made sure this design and piece of art is put into reality and so contributed to the nice outcome of the design",
    githubLink: "https://github.com/Endorze/Yahwehs-Creations",
    liveLink: "https://vercel.com/andrewkalumbas-projects/yahwehs",
    image: "/game.jpg"
  },
  {
    title: "Spanish Food Website",
    description: "Website i built because of the experiment i got from Spain vacation abou their foods, created a cart to add food.",
    githubLink: "https://github.com/andrewkalumba/spanishfood#",
    liveLink: "https://vercel.com/andrewkalumbas-projects/spanishfood",
    image: "/spain.jpg"
  },
  {
    title: "Hangman Game",
    description: "A hangman game where a user has to guess a word, when you fail, hangman is hang and you fail. Technologies used are CSS, Javascript, Jquery.",
    githubLink: "https://github.com/andrewkalumba/Responsive-hangman",
    liveLink: "https://vercel.com/andrewkalumbas-projects/responsive-hangman",
    image: "/hangman.jpg"
  },
  {
    title: "Thornbound project",
    description: "A group Website built using next.js, tailwind about a game called Thornbound built by the game students. I was one of the group who contributed to the nice outcome of the design",
    githubLink: "https://github.com/Endorze/Thornbound",
    liveLink: "https://vercel.com/andrewkalumbas-projects/thornbound",
    image: "/game2.jpg"
  },
  {
    title: "Nasa API",
    description: "An API fetch website showcasing skills in data fetching",
    githubLink: "git@github.com:andrewkalumba/nasa.git",
    liveLink: "https://vercel.com/andrewkalumbas-projects/nasa",
    image: "/nasa.jpg"
  },
  {
    title: "Website showcasing styling with SASS and Styled Components",
    description: "Website i built to show knowledge of styled components and SASS as some of the different ways of styling",
    githubLink: "https://github.com/andrewkalumba/CssLibraries",
    liveLink: "https://vercel.com/andrewkalumbas-projects/css-libraries",
    image: "/styling.jpg"
  }
]

const Projects = () => {
  return (
    <div id="projects" className="bg-[#466995] py-12 flex flex-wrap justify-center gap-6 px-4 md:px-0">
      {projectData.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </div>
  )
}
export default Projects
