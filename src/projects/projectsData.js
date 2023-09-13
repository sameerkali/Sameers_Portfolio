import projectOne from "../assets/project-1.png";
import projectTwo from "../assets/project-2.png";
import projectThree from "../assets/project-3.png";

const projects = {
  1: {
    title: "Indie Gems Portal",
    image: projectOne,
    description: (
      <>
        <p>
          Indie Gems Portal is a web application that allows users to search for
          games based on genres, platforms, release dates, and ratings. It
          provides a convenient way to explore and find games that match your
          preferences.
        </p>
      </>
    ),
    github: "https://github.com/sameerkali/Indie_Gems_Portal",
    demo: "https://indie-gems-portal.vercel.app/"
  },
  2: {
    title: "Film Sloth",
    image: projectTwo,
    description: (
      <>
        <p>
          🕵️‍♂️ FilmSloth: Unlock cinematic secrets! Discover hidden 🎥 gems
          effortlessly and delve into the world of entertainment with our
          intuitive app.
          <code>#React18 #TMDB #API #materialUI #vite</code>
        </p>
      </>
    ),
    github: "https://github.com/sameerkali/FilmSloth",
    demo: "https://filmsloth.netlify.app/"
  },
  3: {
    title: "Portfolio for client",
    image: projectThree,
    description: (
      <>
        <p>
          Welcome to my cutting-edge Personal Portfolio Project! 🚀 In this
          project, I've harnessed the power of modern technologies to create a
          unique and immersive experience for showcasing my artistic endeavors.
        </p>
      </>
    ),
    github: "https://github.com/sameerkali/portfolio69",
    demo: "https://sameer69.netlify.app/"
  }
};

export default projects;
