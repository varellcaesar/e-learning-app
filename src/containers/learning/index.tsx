"use client";

import * as React from "react";
import Image from "next/image";
import IMAGES from "../../../public/assets/images";
import ICONS from "@web-learning/public/assets/icons";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import type { Swiper as SwiperType } from "swiper";
import { User } from "lucide-react";

const learningSummary = [
  {
    label: "Ratusan pilihan kursus",
    description: "Pilih yang sesuai minat dan tujuan karir anda",
    icon: ICONS.CourseIcon,
  },
  {
    label: "Kelas online",
    description: "Belajar dari mana saja, kapan saja dengan mudah",
    icon: ICONS.AudioWaveformIcon,
  },
  {
    label: "Sertifikat setelah selesai",
    description: "Dapatkan sertifikat penyelesaian untuk menunjang karirmu",
    icon: ICONS.ThropyIcon,
  },
];

const courses = Array(5).fill({
  title: "How to easily create a website with React",
  price: "Gratis",
  duration: "Durasi kursus 2 jam 40 menit",
  instructor: "Surabi Notosuman",
  level: "Cocok untuk pemula",
  rating: "4.8",
  reviews: "247",
  imageUrl: IMAGES.CourseThumbnail,
});

const LearningContainer = () => {
  const swiperRef = React.useRef<SwiperType | null>(null);

  const handleNextSlide = () => {
    if (swiperRef.current) {
      swiperRef.current?.slideNext();
    }
  };

  return (
    <div className="max-w-7xl mx-auto mt-6 px-4 h-screen overflow-y-auto py-14">
      {/* Component Banner */}
      <div className="bg-gradient-to-r from-teal-800 to-teal-500 rounded-t-xl px-6 pt-6 flex justify-between items-center text-white w-full max-w-5xl mx-auto overflow-hidden shadow-md">
        <div>
          <h2 className="text-4xl font-semibold text-white">Learning</h2>
          <p className="text-xl font-normal text-white mt-1">
            Kumpulan kursus online yang diajarkan oleh ahli, hanya untuk anda
          </p>
        </div>

        <div className="relative flex items-center justify-end">
          {/* <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white opacity-30 text-6xl">
            <Image src={ICONS.BookIcon} alt="Icon Book" />
          </div> */}
          <Image src={IMAGES.PeopleBaner} alt="Icon People" />
        </div>
      </div>

      {/* Component Summary */}
      <div className="bg-white rounded-b-xl shadow-sm border flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-gray-200 overflow-hidden w-full max-w-5xl mx-auto">
        {learningSummary.map((item, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-start gap-4 p-6 flex-1"
          >
            <Image src={item.icon} alt="Icon Course" className="mt-1" />
            <div>
              <p className="font-semibold text-lg text-[#1E1F24]">
                {item.label}
              </p>
              <p className="text-sm font-normal text-[#5C5A57]">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="relative max-w-6xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Paling Populer
        </h2>

        {/* Custom Nav Button */}
        <button
          className="absolute right-2 bottom-40 z-10 w-10 h-10 bg-white border border-gray-300 rounded-lg shadow-md flex items-center justify-center hover:bg-gray-100 transition cursor-pointer"
          onClick={handleNextSlide}
        >
          <Image src={ICONS.ChevronRightIcon} alt="Icon Chevron Right" />
        </button>

        <Swiper
          modules={[Navigation]}
          onSwiper={(swiper: SwiperType) => (swiperRef.current = swiper)}
          spaceBetween={20}
          slidesPerView={1.2}
          breakpoints={{
            640: { slidesPerView: 1.5 },
            768: { slidesPerView: 2.2 },
            1024: { slidesPerView: 3 },
          }}
          className="max-w-5xl mx-auto"
        >
          {courses.map((course, index) => (
            <SwiperSlide key={index}>
              <div className="w-[320px] rounded-xl overflow-hidden border border-gray-200 shadow-sm bg-white cursor-pointer">
                <Image
                  src={course.imageUrl}
                  alt="Course Cover"
                  className="w-full h-[180px] object-cover"
                />
                <div className="px-4 pt-4">
                  <h3 className="text-lg font-semibold text-[#1E1F24] mb-3 leading-snug">
                    {course.title}
                  </h3>
                  <ul className="text-sm text-gray-600 space-y-1 mb-4">
                    <li className="flex items-center gap-2">
                      <Image src={ICONS.TagIcon} alt="Icon Tag" />{" "}
                      {course.price}
                    </li>
                    <li className="flex items-center gap-2">
                      <Image src={ICONS.DurationIcon} alt="Icon Duration" />{" "}
                      {course.duration}
                    </li>
                    <li className="flex items-center gap-2">
                      <Image src={ICONS.SignalIcon} alt="Icon Signal" />{" "}
                      {course.level}
                    </li>
                  </ul>
                </div>
                <div className="flex items-center justify-between bg-[#EFEFEF] px-4 py-4 text-sm text-gray-700 rounded-b-xl">
                  <div className="flex items-center gap-2">
                    <Image src={ICONS.ProfileFillIcon} alt="Icon Profile" />
                    <span className="text-sm font-medium">
                      Surabi Notosuman
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="flex items-center text-yellow-500 text-sm">
                      {Array.from({ length: 5 }, (_, i) => (
                        <span key={i}>★</span>
                      ))}
                    </div>
                    <span className="text-gray-500 text-sm">(247)</span>
                    <button className="text-gray-400 hover:text-gray-600 transition">
                      <Image src={ICONS.BookmarkFillIcon} alt="Icon Bookmark" />
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default LearningContainer;
