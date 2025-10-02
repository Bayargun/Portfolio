import { MapPin } from "lucide-react";
import Image from "next/image";

export const Hero = () => {
  return (
    <section
      id="about"
      className="w-full max-w-[1440px] px-6 sm:px-12 lg:px-20 py-16 lg:py-24 mx-auto"
    >
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start lg:items-center">
        <div className="flex-1 flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Hi, I'm Bayargun 👋
            </h1>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              Pinecone academy Frontend болон Fullstack хөгжүүлэгчийн чиглэлээр
              төгссөн. Мэдээллийн технологи, программ хангамжийн салбарт шинэ
              технологиудыг судлах, хөгжүүлэхэд идэвхтэй оролцдог. Багаар
              ажиллах, асуудал шийдвэрлэх, цагийн менежмент зэрэг ур
              чадваруудтай. Хувийн сахилга бат, дасан зохицох чадвар нь ажлын
              орчинд үр дүнтэй ажиллахад тусалдаг. Англи хэлний ахисан дунд
              шатны мэдлэгтэй бөгөөд JavaScript, HTML/CSS, React зэрэг
              технологиудад сайн мэдлэгтэй.
            </p>
          </div>
          <div className="flex flex-col h-[56px] gap-2">
            <div className="flex items-center gap-2 text-gray-600">
              <MapPin className="w-4 h-4" />
              <p className="text-base sm:text-lg">Ulaanbaatar, Mongolia</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-[blink_2s_ease-in-out_infinite]" />
              <p className="text-base sm:text-lg text-gray-600">
                Available for a new job
              </p>
            </div>
          </div>
        </div>
        <div className="flex-1 flex justify-center relative">
          <div className="absolute w-[200px] h-[200px] sm:w-[240px] sm:h-[240px] lg:w-[320px] lg:h-[320px] bg-gray-200 rounded-2xl -z-10 top-1 right-10 lg:right-20" />
          <div className="relative w-[180px] h-[180px] sm:w-[220px] sm:h-[220px] lg:w-[300px] lg:h-[300px] rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/cvzurag.jpg"
              alt="Bayargun"
              fill
              priority
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
