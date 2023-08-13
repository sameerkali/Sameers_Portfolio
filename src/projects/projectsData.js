import projectOne from "../assets/project-1.png";
import projectTwo from "../assets/project-2.png";
import projectThree from "../assets/project-3.png";
import projectFour from "../assets/project-4.png";
import projectFive from "../assets/project-5.png";
import projectSix from "../assets/project-6.png";

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
    title: "🎙️LingoFlow",
    image: projectTwo,
    description: (
      <>
        <p>
          🎙️LingoFlow: Speak & Transcribe 🚀 Turn speech into text effortlessly
          with React 18 magic! Real-time conversion, multiple languages, and
          data security combined. Maximize productivity, creativity, and
          accessibility. Embrace the future of communication today! 🗣️📝🌟
          #ReaccuVoice
        </p>
      </>
    ),
    github: "https://github.com/sameerkali/LingoFlow",
    demo: "https://lingo-flow.vercel.app/"
  },
  3: {
    title: "Todo Ace",
    image: projectThree,
    description: (
      <>
        <p>
          Introducing Todo Ace: 🚀 A stylish, advanced todo app crafted with
          React 18 and TypeScript. Organize tasks effortlessly with three
          tabs—📝 pending, ✅ completed, and 🗂️ all tasks. Enjoy a convenient
          delete feature and an impressive UI for seamless task management.
        </p>
      </>
    ),
    github: "https://github.com/sameerkali/Todo_Ace",
    demo: "https://react-todo-youtube-h8vc.vercel.app/"
  },
  4: {
    title: "Forecastify",
    image: projectFour,
    description: (
      <>
        <p>
          Forecastify: React with TypeScript is your ultimate weather companion.
          Stay ahead of the elements with precise forecasts, interactive maps,
          and real-time updates. Seamlessly crafted using React and TypeScript,
          it offers a smooth user experience that keeps you informed about the
          weather conditions that matter most to you.
        </p>
      </>
    ),
    github: "https://github.com/sameerkali/Forecastify",
    demo: "https://indie-gems-portal.vercel.app/"
  },
  5: {
    title: "Daily Diary",
    image: projectFive,
    description: (
      <>
        <p>
          📔 Daily Diary is a web app for jotting and organizing daily thoughts.
          Crafted using Node.js, MongoDB, Express.js, EJS, and Lodash, it offers
          smooth diary management and creative expression. 🚀
        </p>
      </>
    ),
    github: "https://github.com/sameerkali/DAILY_DIARY",
    demo: "https://daily-diary-eight.vercel.app/"
  },
  6: {
    title: "3D Portfolio Website",
    image: projectSix,
    description: (
      <>
        <p>
          This project showcases a scroll-based 3D animation implemented using
          GSAP (GreenSock Animation Platform) with ScrollTrigger plugin. The
          animation responds to the users scrolling behavior, creating an
          engaging and interactive experience.
        </p>
      </>
    ),
    github: "https://github.com",
    demo: "https://sameer-dun.vercel.app/"
  }
};

export default projects;
