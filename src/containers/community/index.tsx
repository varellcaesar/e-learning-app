"use client";

import ICONS from "@web-learning/public/assets/icons";
import IMAGES from "@web-learning/public/assets/images";
import { MessagesSquare } from "lucide-react";
import Image from "next/image";
import * as React from "react";

const news = [
  {
    id: 1,
    image: IMAGES.NewsThumbnail,
    tags: ["Buruh", "Serikat Pekerja"],
    title: "Kisah Buruh di May Day 2025",
    date: "1 Mei 2025",
    likes: 98,
    comments: 30,
  },
  {
    id: 2,
    image: IMAGES.NewsThumbnail,
    tags: ["Kontrak", "PHK"],
    title: "Gelombang PHK Besar di Awal 2025",
    date: "17 Maret 2025",
    likes: 120,
    comments: 45,
  },
  {
    id: 3,
    image: IMAGES.NewsThumbnail,
    tags: ["Inovasi", "Swasta"],
    title: "Talentlytics Luncurkan SIAP untuk Pekerja Blue Collar",
    date: "17 Oktober 2024",
    likes: 85,
    comments: 20,
  },
  {
    id: 3,
    image: IMAGES.NewsThumbnail,
    tags: ["Buruh", "Serikat Pekerja"],
    title: "Kisah Buruh di May Day 2025",
    date: "1 Mei 2025",
    likes: 98,
    comments: 30,
  },
  {
    id: 4,
    image: IMAGES.NewsThumbnail,
    tags: ["Kontrak", "PHK"],
    title: "Gelombang PHK Besar di Awal 2025",
    date: "17 Maret 2025",
    likes: 120,
    comments: 45,
  },
  {
    id: 5,
    image: IMAGES.NewsThumbnail,
    tags: ["Inovasi", "Swasta"],
    title: "Talentlytics Luncurkan SIAP untuk Pekerja Blue Collar",
    date: "17 Oktober 2024",
    likes: 85,
    comments: 20,
  },
];

const group = [
  {
    id: 1,
    image: IMAGES.GroupThumbnail,
    tags: ["Buruh", "Serikat Pekerja"],
    title: "Kisah Buruh di May Day 2025",
    date: "1 Mei 2025",
    likes: 98,
    comments: 30,
  },
  {
    id: 2,
    image: IMAGES.GroupThumbnail,
    tags: ["Kontrak", "PHK"],
    title: "Gelombang PHK Besar di Awal 2025",
    date: "17 Maret 2025",
    likes: 120,
    comments: 45,
  },
  {
    id: 3,
    image: IMAGES.GroupThumbnail,
    tags: ["Inovasi", "Swasta"],
    title: "Talentlytics Luncurkan SIAP untuk Pekerja Blue Collar",
    date: "17 Oktober 2024",
    likes: 85,
    comments: 20,
  },
];

const CommunityContainer = () => {
  const [activeTab, setActiveTab] = React.useState("berita");
  const displayedData = activeTab === "berita" ? news : group;

  return (
    <div className="max-w-7xl mx-auto mt-6 px-4 h-screen overflow-y-auto py-14">
      <div className="flex items-center justify-between rounded-xl pl-8 pt-6 bg-gradient-to-r from-teal-800 to-teal-500 text-white overflow-hidden max-w-5xl mx-auto">
        {/* Left Text Section */}
        <div>
          <h2 className="text-4xl text-white font-semibold mb-1">Komunitas</h2>
          <p className="text-xl text-white font-normal">
            Jelajahi postingan terhangat dari komunitas BENI Indonesia
          </p>
        </div>

        {/* Right Image Section */}
        <div className="relative">
          <Image
            src={IMAGES.PersonalCommunityThumbnail}
            alt="Thumbnail Personal Community"
          />
          <MessagesSquare size={118} className="absolute bottom-14 right-14" />
        </div>
      </div>

      <div className="px-2 py-10 max-w-5xl mx-auto">
        {/* Tabs and Search */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex space-x-6 text-lg font-medium">
            <button
              className={`cursor-pointer border-b-2 ${
                activeTab === "berita"
                  ? "text-[#178484] border-[#178484]"
                  : "text-[#5C5A57] border-transparent"
              }`}
              onClick={() => setActiveTab("berita")}
            >
              Berita
            </button>
            <button
              className={`cursor-pointer border-b-2 ${
                activeTab === "group"
                  ? "text-[#178484] border-[#178484]"
                  : "text-[#5C5A57] border-transparent"
              }`}
              onClick={() => setActiveTab("group")}
            >
              Grup
            </button>
          </div>
          <div className="relative">
            <input
              type="text"
              placeholder="Cari berita terkini di BEN Indonesia"
              className="pl-10 pr-4 py-2 border border-[#E2E8F0] bg-gray-50 rounded-lg placeholder-[#5C5A57] text-sm text-[#1E1F24] focus:outline-none"
            />
            <svg
              className="absolute left-3 top-2.5 w-4 h-4 text-gray-400"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M21 21l-4.35-4.35M17 10a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {displayedData.map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              className="w-[320px] rounded-xl border border-[#D9DAE1] shadow-sm overflow-hidden bg-white flex flex-col justify-between flex-1"
            >
              {/* Image */}
              <Image src={item.image} alt="News" />

              {/* Content */}
              <div className="p-4 space-y-1">
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-[#F4FAFA] px-2 py-1 border border-[#178484] text-[#178484] rounded-[6px] font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {/* Title */}
                <h3 className="text-lg font-semibold text-[#1E1F24]">
                  {item.title}
                </h3>
              </div>
              {/* Footer Info */}
              <div className="flex items-center text-sm text-gray-500 gap-4 p-4 border-t border-[#D9DAE1] mt-3">
                <span className="text-sm text-[#5C5A57] font-normal">
                  {item.date}
                </span>
                <span className="flex items-center gap-1 cursor-pointer">
                  <Image src={ICONS.LikeIcon} alt="Icon Like" />{" "}
                  <span className="text-sm text-[#5C5A57] font-normal">
                    {item.likes}
                  </span>
                </span>
                <span className="flex items-center gap-1 cursor-pointer">
                  <Image src={ICONS.CommentIcon} alt="Icon Comment" />{" "}
                  <span className="text-sm text-[#5C5A57] font-normal">
                    {item.comments}
                  </span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CommunityContainer;
