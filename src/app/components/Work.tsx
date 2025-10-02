export const Work = () => {
  const projects = [
    {
      title: "Book me",
      description:
        "Book me нь хүссэн байгууллага компани бүртгэлээ үүсгээд цаг захиалгын системтэй болох боломжтой юм.Ингэснээр утсаар заавал залгах хэрэггүй болно.",
      image: "/works/bookme.png",
      tech: [
        "React",
        "TailwindCSS",
        "TypeScript",
        "Express.js",
        "Next.js",
        "Node.js",
        "Vercel",
        "MongoDB",
        "ShadcnUI",
      ],
      link: "https://book-me-123.vercel.app/",
    },
    {
      title: "MovieZ",
      description:
        "Кино зах зээл хурдацтай өргөжин хөгжиж, олон сонирхолтой бүтээлүүд ар араасаа нээлтээ хийж байгаа ч эдгээр киноны талаарх мэдээллийг төвлөрсөн нэг эх сурвалжаас, цаг алдалгүй авах боломж хомс байна. Энэ нь хэрэглэгчдийн мэдээлэл авах хэрэгцээг бүрэн хангахад хүндрэл учруулж байгаа юм. Иймээс бид киноны танилцуулга, мэдээллийг нэг дороос, хялбархан авах боломжтой вэбсайтыг хөгжүүлэхээр зорьж байна.Энэхүү төслийг хэрэгжүүлэх явцад Server Components, Client Components зэрэг орчин үеийн технологиудыг ашиглаж, олон төрлийн үүрэг бүхий API endpoint-уудтай харилцах, өгөгдлийг параллель байдлаар татах, мөн хайлтын үйлдлийг оновчтой болгох зэрэг дэвшилтэт арга барилыг эзэмших боломжтой бөгөөд сурагчдын ур чадварыг шинэ түвшинд гаргах чухал алхам болох юм.",
      image: "/works/movieZ.png",
      tech: [
        "Next.js",
        "Figma",
        "TailwindCSS",
        "Typescript",
        "ShadcnUI",
        "Vercel",
        "Rest Api",
      ],
      link: "https://movie-web-real-2ju5.vercel.app/",
    },
    {
      title: "Food delivery",
      description:
        "Энэхүү вэбсайт нь зоогийн газрын үйлчилгээний чанарыг сайжруулж, хэрэглэгчдэд цэс үзэх, захиалга өгөх үйл явцыг хялбаршуулснаар тав тухтай, сэтгэл ханамжтай туршлага бий болгохоор хийсэн.",
      image: "/works/food.png",
      tech: [
        "NextJs",
        "Shadcn UI",
        "ExpressJs",
        "JWT",
        "Bcrypt",
        "MongoDB",
        "Cloudinary",
        "vercel",
        "TailwindCSS",
      ],
      link: "https://last-food.vercel.app/",
    },
  ];

  return (
    <div
      id="work"
      className="w-full max-w-[1440px] px-6 sm:px-12 lg:px-20 py-16 lg:py-24 mx-auto "
    >
      <div className="flex flex-col items-center gap-3 mb-12">
        <div className="px-4 py-1 bg-gray-200 rounded-xl text-sm font-medium text-gray-700">
          Work
        </div>
        <p className="text-gray-600 text-center">Миний хийсэн зарим төслүүд:</p>
      </div>
      <div className="flex flex-col gap-10">
        {projects.map((project) => (
          <div
            key={project.title}
            className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden flex flex-col md:flex-row gap-6 p-6"
          >
            <div className="w-full md:w-1/3 flex items-center justify-center">
              <img
                src={project.image}
                alt={project.title}
                className="rounded-lg object-cover shadow-sm"
              />
            </div>
            <div className="flex flex-col justify-between flex-1 gap-4">
              <div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-600 mt-2">
                  {project.description}
                </p>
              </div>
              <div className="flex flex-wrap gap-2 mt-2">
                {project.tech.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-3">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm text-blue-600 hover:underline"
                >
                  View Project
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 6H18m0 0v4.5m0-4.5L10.5 15M6 18h12"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
