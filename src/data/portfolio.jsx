import SassLogo from "/images/skills/sass-logo.webp";
import TypeScriptLogo from "/images/skills/typescript.svg";
import BootstrapLogo from "/images/skills/bootstrap-logo.svg";
import WordPressLogo from "/images/skills/wordpress-logo.svg";
import ReactLogo from "/images/skills/react-icon.png";
import ViteLogo from "/images/skills/vitejs.svg";
import TailwindLogo from "/images/skills/tailwind-logo.webp";
import GreenSockLogo from "/images/skills/gsap-greensock.svg";
import GatsbyLogo from "/images/skills/gatsby-js-icon.svg";

function JavaScript() {
  return <span className="javascript-color">JavaScript</span>;
}

export default [
  {
    title: "Fé Media Website",
    imgUrl: "images/femediapreview.png",
    description:
      "This project is based on my advertising startup, with it, I was able to improve my WordPress skills, I created this website with the base editor from WordPress and without a layout template. The main plugins I used were Greenshift and Gutenberg.",
    stack: [WordPressLogo],
    link: "https://femedia.xyz/",
    codeLink: false,
  },
  {
    title: "React Shopping Cart",
    imgUrl: "images/ecommerce-website-preview.png",
    description: `This is a working project that I will keep updating from time to time to make it a fully working e-commerce page based on React. This project helped me fully understand React props, components, and how to use TypeScript rather than regular JavaScript.`,
    stack: [ReactLogo, BootstrapLogo, TypeScriptLogo],
    link: "https://fred-ecommerce-website.netlify.app/",
    codeLink: "https://github.com/fred-gutierrez/ecommerce-website",
  },
  {
    title: "Old Portfolio Website",
    imgUrl: "images/oldportfoliopreview.png",
    description:
      "This was my first considerable project that allowed me to comprehend and sharpen my skills in CSS3, SASS, HTML5, and Bootstrap 4. The design for this page is mostly the same but the reasoning behind doing a new portfolio page was due to the chaos I did with the code back then, which lead to performance, maintainability, and re-usability issues. Therefore this portfolio is made with React props, components, and more.",
    stack: [SassLogo, BootstrapLogo],
    link: "https://fredwilliams.netlify.app/",
    codeLink:
      "https://github.com/fred-gutierrez/Fred-David-Solis-Gutierrez-Portfolio",
  },
];

// TODO: Add color to the skills like WordPress, React, Bootstrap and add class names to them
