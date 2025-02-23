import Layout from "../components/Layout/Layout";
const skillGroups = [
  {
    groupName: "Frontend",
    skills: [
      {
        name: "HTML",
        logo: "https://github.com/devicons/devicon/raw/master/icons/html5/html5-original.svg",
        description: "The backbone of web pages, used to structure content.",
      },
      {
        name: "CSS",
        logo: "https://github.com/devicons/devicon/raw/master/icons/css3/css3-original.svg",
        description: "Styles web pages to make them visually appealing.",
      },
      {
        name: "Sass/Scss",
        logo: "http://vanseodesign.com/blog/wp-content/uploads/2015/09/sass-logo-2.png",
        description:
          "a popular CSS preprocessor that extends CSS with features like variables, nested rules, and functions. It helps write more maintainable and dynamic stylesheets.",
      },
      {
        name: "Bootstrap CSS",
        logo: "https://github.com/devicons/devicon/raw/master/icons/bootstrap/bootstrap-original.svg",
        description: "A CSS framework for building responsive layouts.",
      },
      {
        name: "Tailwind CSS",
        logo: "https://static-00.iconduck.com/assets.00/tailwind-css-icon-2048x1229-u8dzt4uh.png",
        description:
          "A utility-first CSS framework for rapid UI development.",
      },
      {
        name: "JavaScript (ES6+)",
        logo: "https://github.com/devicons/devicon/raw/master/icons/javascript/javascript-original.svg",
        description: "A powerful scripting language for web interactivity.",
      },
      {
        name: "jQuery",
        logo: "https://github.com/devicons/devicon/raw/master/icons/jquery/jquery-original.svg",
        description:
          "A fast, small JavaScript library for simplified DOM manipulation.",
      },
      {
        name: "React",
        logo: "https://github.com/devicons/devicon/raw/master/icons/react/react-original.svg",
        description:
          "A library for building dynamic and interactive user interfaces.",
      },
      {
        name: "React Query",
        logo: "https://tse3.mm.bing.net/th?id=OIP.ksUBjXevPMEvCB86E4jx1AAAAA&pid=Api&P=0&h=180",
        description:
          "A library for efficient data fetching and caching in React apps.",
      },
      {
        name: "HeadlessUI",
        logo: "https://img.stackshare.io/service/21223/default_35e005510911711d35edae2841151dfb76f2b3f5.png",
        description: "Accessible UI components tailored for Tailwind CSS.",
      },
      {
        name: "Shadcn UI",
        logo: "https://tse4.mm.bing.net/th?id=OIP.uzZT_Gwd2PH7Mkz5Q_VcUgAAAA&pid=Api&P=0&h=180",
        description: "A modern component library for fast UI prototyping.",
      },
      {
        name: "Daizy UI",
        logo: "https://skillhub.gallerycdn.vsassets.io/extensions/skillhub/daisy-ui-latest-snippets/0.0.1/1691390254091/Microsoft.VisualStudio.Services.Icons.Default",
        description:
          "Pre-designed Tailwind CSS components for rapid UI development.",
      },
      {
        name: "Vite",
        logo: "https://tse2.mm.bing.net/th?id=OIP.wf8ivLs6ExVeBxZ7R26nHwAAAA&pid=Api&P=0&h=180",
        description: "A fast frontend build tool and development server.",
      },
      {
        name: "Flowbite UI",
        logo: "https://flowbite.s3.amazonaws.com/brand/logo-light/mark/flowbite-logo.png",
        description:
          "Components for Tailwind CSS, including navigation and modals.",
      },
      {
        name: "Zustand",
        logo: "https://img.stackshare.io/service/11559/zustand.png",
        description: "A small, fast state-management library for React.",
      },
      {
        name: "Redux",
        logo: "https://github.com/devicons/devicon/raw/master/icons/redux/redux-original.svg",
        description: "State management for complex React applications.",
      },
      {
        name: "Next.js",
        logo: "https://github.com/devicons/devicon/raw/master/icons/nextjs/nextjs-original.svg",
        description:
          "A React framework for server-rendered apps and static sites.",
      },
      {
        name: "Gsap",
        logo: "https://tse2.mm.bing.net/th?id=OIP.W3GxPQjCTXCbMxPqmoiSdwAAAA&pid=Api&P=0&h=180",
        description:
          "A JavaScript library for creating high-performance animations.",
      },
      {
        name: "Framer Motion",
        logo: "https://tse4.mm.bing.net/th?id=OIP.UE1ujLsoCEZjqro7vpiSqwAAAA&pid=Api&P=0&h=180",
        description: "A library for declarative animations in React.",
      },
      {
        name: "TypeScript",
        logo: "https://github.com/devicons/devicon/raw/master/icons/typescript/typescript-original.svg",
        description: "A superset of JavaScript that adds static typing.",
      },
      {
        name: "ThreeJS",
        logo: "https://tse1.mm.bing.net/th?id=OIP.nHP10Bd6QZpoDWY1A5uHkAHaHd&pid=Api&P=0&h=180",
        description:
          "A 3D JavaScript library for creating WebGL-rendered scenes.",
      },
    ],
  },
  {
    groupName: "Backend",
    skills: [
      {
        name: "Node.js",
        logo: "https://github.com/devicons/devicon/raw/master/icons/nodejs/nodejs-original.svg",
        description:
          "A JavaScript runtime built on Chrome's V8 JavaScript engine that helps build scalable, high-performance applications.",
      },
      {
        name: "REST APIs",
        logo: "https://cdn-icons-png.flaticon.com/512/7983/7983502.png",
        description:
          "A set of web services that allow different systems to communicate using HTTP, usually in a stateless manner.",
      },
      {
        name: "JSON Server",
        logo: "https://github.com/devicons/devicon/raw/master/icons/json/json-original.svg",
        description:
          "A full fake REST API with zero coding required, useful for prototyping and testing.",
      },
      {
        name: "JWT",
        logo: "https://jwt.io/img/pic_logo.svg",
        description:
          "A compact, URL-safe method for representing claims to be transferred between two parties, commonly used for user authentication.",
      },
      {
        name: "Bcrypt",
        logo: "https://stackjava.com/wp-content/uploads/2018/03/bcrypt-logo.jpg",
        description:
          "A library for hashing passwords in a secure way, making them resistant to brute force attacks.",
      },
      {
        name: "Cookie-parser",
        logo: "https://cookie-parser.michaelbonner.dev/og-image.png",
        description:
          "A middleware for Express.js that simplifies working with cookies. It parses cookies sent by the client.",
      },
      {
        name: "CORS",
        logo: "https://velog.velcdn.com/cloudflare/jooa7878/91a981a5-e6a9-438e-81c6-d8f8cc856d23/CORS.png",
        description:
          "A middleware for Express.js to enable Cross-Origin Resource Sharing (CORS), allowing controlled access to resources on a server from different origins.",
      },
      {
        name: "Express.js",
        logo: "https://github.com/devicons/devicon/raw/master/icons/express/express-original.svg",
        description:
          "A minimal and flexible Node.js web application framework that provides a robust set of features to develop web and mobile applications.",
      },
      {
        name: "Prisma",
        logo: "https://i.pinimg.com/originals/39/b2/e4/39b2e4ad77c23a2c11e5950a7dfa2aec.png",
        description:
          "a modern ORM for Node.js and TypeScript that simplifies database interactions.",
      },
      {
          name: "PHP",
          logo: "https://www.logotypes101.com/logos/203/272663FA02DE2DAA2BBAE2FC39F14783/php.png",
          description: "A widely-used server-side scripting language designed for web development. It powers dynamic websites and applications with seamless backend logic.",
        },
        {
          name: "Laravel",
          logo: "https://logospng.org/download/laravel/logo-laravel-icon-1024.png",
          description: "A modern PHP framework known for its elegant syntax and powerful features. It simplifies web application development with built-in tools and robust security.",
        },
        
    ],
  },
  {
    groupName: "Databases",
    skills: [
      {
        name: "MySQL",
        logo: "https://github.com/devicons/devicon/raw/master/icons/mysql/mysql-original.svg",
        description:
          "A popular relational database management system based on SQL (Structured Query Language).",
      },
      {
        name: "Firebase",
        logo: "https://github.com/devicons/devicon/raw/master/icons/firebase/firebase-plain.svg",
        description:
          "A platform developed by Google that provides backend services like real-time database, user authentication, and cloud storage.",
      },
      {
        name: "MongoDB",
        logo: "https://github.com/devicons/devicon/raw/master/icons/mongodb/mongodb-original.svg",
        description:
          "A NoSQL database known for its flexibility and scalability, allowing for the storage of data in JSON-like documents.",
      },
      {
        name: "PostgreSQL",
        logo: "https://github.com/devicons/devicon/raw/master/icons/postgresql/postgresql-original.svg",
        description:
          "A powerful, open-source relational database system that uses and extends the SQL language.",
      },
      {
        name: "Supabase",
        logo: "https://cf.appdrag.com/dashboard-openvm-clo-b2d42c/uploads/supabase-TAiY.png",
        description:
          "An open-source Firebase alternative that offers real-time databases, authentication, and file storage.",
      },
      {
        name: "MariaDB",
        logo: "https://github.com/devicons/devicon/raw/master/icons/mariadb/mariadb-original.svg",
        description:
          "An open-source relational database that is a drop-in replacement for MySQL, offering improved features and performance.",
      },
      {
        name: "Cassandra",
        logo: "https://tse2.mm.bing.net/th?id=OIP.mhPclQfU64GpU6wOsql98AHaE9&pid=Api&P=0&h=180",
        description:
          "A distributed NoSQL database designed for handling large amounts of data across many commodity servers without a single point of failure.",
      },
    ],
  },
  {
    groupName: "Stacks",
    skills: [
      {
        name: "Basic",
        logo: "https://thumbs.dreamstime.com/b/vector-collection-web-development-shield-signs-html-css-javascript-isolated-icons-white-background-38571884.jpg",
        description:
          "The foundational technologies for web development: HTML for structure, CSS for styling, and JavaScript for functionality web & a scalable full stack applications.",
      },
      {
        name: "MERN",
        logo: "https://www.tridentspark.com/wp-content/uploads/2023/07/mern-stack-icon-1.png",
        description:
          "A full-stack JavaScript framework that uses MongoDB, Express.js, React, and Node.js to build modern scalable full stack applications.",
      },
      {
        name: "PERN",
        logo: "https://repository-images.githubusercontent.com/141744474/1ce68080-769e-11ea-8f62-d743905db95e",
        description:
          "A full-stack web development framework using PostgreSQL, Express.js, React, and Node.js to build scalable full stack applications.",
      },
      {
          name: "LRT",
          logo: "https://miro.medium.com/v2/resize:fit:1358/1*FQIlE1Xxu9ckg06KMNrIqw.png",
          description:
            "A full-stack web development framework using, Laravel & mysql(mariadb), React/Vite, and inertiaJS to build scalable full stack applications.",
        },
    ],
  },
  {
    groupName: "CMS",
    skills: [
      {
        name: "WordPress",
        logo: "https://pngimg.com/uploads/wordpress/wordpress_PNG28.png",
        description:
          "A popular open-source content management system for building websites and blogs.",
      },
      {
        name: "Sanity",
        logo: "https://images.g2crowd.com/uploads/product/image/large_detail/large_detail_96102ac6497377cd53da621075fe828e/sanity.png",
        description:
          "A modern, flexible, and customizable headless CMS for structured content.",
      },
      {
        name: "Payload",
        logo: "https://seeklogo.com/images/P/payload-logo-A8D673164C-seeklogo.com.png",
        description:
          "A self-hosted, TypeScript-based CMS focused on developer experience.",
      },
    ],
  },
  {
    groupName: "Others",
    skills: [
      {
        name: "Office 365",
        logo: "https://www.seekpng.com/png/detail/772-7721081_office-365-logo-and-products-microsoft-office.png",
        description:
          "a cloud-based subscription service by Microsoft that includes access to popular applications like Word, Excel, PowerPoint, and Outlook, along with cloud storage and collaboration tools.",
      },
      {
        name: "VS Code",
        logo: "https://iconape.com/wp-content/png_logo_vector/visual-studio-code.png",
        description:
          "a free, open-source code editor by Microsoft with support for multiple programming languages and features like syntax highlighting and debugging",
      },
      {
        name: "NPM",
        logo: "https://github.com/devicons/devicon/raw/master/icons/npm/npm-original-wordmark.svg",
        description:
          "The package manager for JavaScript, helping to manage dependencies and install libraries in Node.js projects.",
      },
      {
        name: "YARN",
        logo: "https://tse3.mm.bing.net/th?id=OIP.m9u-T43srIyuGcR0r8wlAAHaHa&pid=Api&P=0&h=180",
        description:
          "A fast, reliable, and secure alternative to NPM that improves the way dependencies are handled in JavaScript projects.",
      },
      {
        name: "JSX",
        logo: "https://tse2.mm.bing.net/th?id=OIP.lBy7OnDqF59ZMsvRi75ULwAAAA&pid=Api&P=0&h=180",
        description:
          "A syntax extension for JavaScript that allows mixing HTML with JavaScript to create dynamic UIs in React.",
      },
      {
        name: "JSON",
        logo: "https://github.com/devicons/devicon/raw/master/icons/json/json-original.svg",
        description:
          "A lightweight data-interchange format that is easy for humans to read and write and easy for machines to parse and generate.",
      },
      {
        name: "Git",
        logo: "https://github.com/devicons/devicon/raw/master/icons/git/git-original.svg",
        description:
          "A distributed version control system used for tracking changes in source code during software development.",
      },
      {
        name: "GitHub",
        logo: "https://github.com/devicons/devicon/raw/master/icons/github/github-original.svg",
        description:
          "A platform for version control and collaboration, allowing multiple people to work on projects simultaneously.",
      },
      {
        name: "Docker",
        logo: "https://github.com/devicons/devicon/raw/master/icons/docker/docker-original.svg",
        description:
          "A platform for developing, shipping, and running applications inside containers, ensuring consistency across environments.",
      },
      {
        name: "Canva",
        logo: "https://pnghq.com/wp-content/uploads/canvas-logo-png-png-transparent-elements-download-38292-768x768.png",
        description:
          "A graphic design tool that allows for easy creation of visual content with drag-and-drop simplicity.",
      },
      {
        name: "Figma",
        logo: "https://logodownload.org/wp-content/uploads/2022/12/figma-logo-0-1080x1080.png",
        description:
          "A web-based UI/UX design tool used for collaborative design and prototyping.",
      },
      {
        name: "Stripe",
        logo: "https://tse1.mm.bing.net/th?id=OIP.Dzrn6ms9CYcy71rvEe6E1wHaHa&pid=Api&P=0&h=180",
        description:
          "An online payment processing service for internet businesses, allowing easy handling of transactions.",
      },
      {
          name: "Inertia JS",
          logo: "https://avatars0.githubusercontent.com/u/47703742?s=280&v=4",
          description: "A modern framework that connects Laravel and React, Vue, or Svelte seamlessly. It allows for full-stack development without needing a traditional API.",

        },
    ],
  },
]


export default function DevSkills() {
 
  return (
      <Layout title="Projects">
       <div className="container">
        {skillGroups.map((group) => (
          <div key={group.groupName} className="skill-group">
            <h2 className="group-title">{group.groupName}</h2>
            <div className="skills-list">
              {group.skills.map((skill) => (
                <div key={skill.name} className="skill-card">
                  <img src={skill.logo} alt={skill.name} className="skill-logo" />
                  <span className="skill-name">{skill.name}</span>
                  <div className="tooltip">{skill.description}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
}
