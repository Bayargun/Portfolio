export const Skill = () => {
  return (
    <div
      id="skill"
      className="w-full max-w-[1440px] px-6 sm:px-12 lg:px-20 py-16 lg:py-24 mx-auto"
    >
      <div className="flex flex-col gap-12 px-8 w-full ">
        <div className="flex flex-col items-center gap-4">
          <div className="px-4 py-1 bg-gray-200 rounded-xl text-sm font-medium text-gray-700">
            Skills
          </div>
        </div>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-8 place-items-center">
          {[
            { src: "/skills/icon-javscript.png", name: "JavaScript" },
            { src: "/skills/icon-typescript.png", name: "TypeScript" },
            { src: "/skills/icon-react.png", name: "React" },
            { src: "/skills/icon-nextjs.png", name: "Next.js" },
            { src: "/skills/icon-nodejs.png", name: "Node.js" },
            { src: "/skills/icon-express.png", name: "Express.js" },
            { src: "/skills/html.jpg", name: "HTML" },
            { src: "/skills/css.jpg", name: "CSS 3" },
            { src: "/skills/shadcn.png", name: "Shadcn ui" },
            { src: "/skills/icon-mongodb.png", name: "MongoDB" },
            { src: "/skills/graphql.jpg", name: "GraphQL" },
            { src: "/skills/icon-tailwindcss.png", name: "TailwindCSS" },
            { src: "/skills/icon-figma.png", name: "Figma" },
            { src: "/skills/icon-cypress.png", name: "Cypress" },
            { src: "/skills/icon-postgresql.png", name: "PostgreSQL" },
            { src: "/skills/icon-git.png", name: "Git" },
          ].map((skill) => (
            <div key={skill.name} className="flex flex-col items-center gap-2">
              <img
                src={skill.src}
                alt={skill.name}
                className="h-10 w-10 object-contain"
              />
              <span className="text-xs text-gray-600">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
