"use client";

import ICONS from "@web-learning/public/assets/icons";
import IMAGES from "@web-learning/public/assets/images";
import { Globe, MessagesSquare, Search, Users } from "lucide-react";
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
    title: "Grup operator alat berat wonosobo",
    date: "Terakhir aktif 11 hari lalu",
    member: 120,
    is_public: true,
  },
  {
    id: 2,
    image: IMAGES.GroupThumbnail,
    title: "Teknisi indonesia di Jepang",
    date: "Terakhir aktif 11 hari lalu",
    member: 120,
    is_public: true,
  },
  {
    id: 3,
    image: IMAGES.GroupThumbnail,
    title: "Persiapan jadi TKI",
    date: "Terakhir aktif 11 hari lalu",
    member: 120,
    is_public: true,
  },
];

const AllGroup = [
  {
    id: 1,
    image: IMAGES.AllGroupThumbnail,
    title: "Grup operator alat berat wonosobo",
    date: "Terakhir aktif 11 hari lalu",
    member: 120,
    is_public: true,
  },
  {
    id: 2,
    image: IMAGES.AllGroupThumbnail,
    title: "Teknisi indonesia di Jepang",
    date: "Terakhir aktif 11 hari lalu",
    member: 120,
    is_public: true,
  },
  {
    id: 3,
    image: IMAGES.AllGroupThumbnail,
    title: "Persiapan jadi TKI",
    date: "Terakhir aktif 11 hari lalu",
    member: 120,
    is_public: true,
  },
];

const CommunityContainer = () => {
  const [activeTab, setActiveTab] = React.useState("berita");
  const [activeTabGroup, setActiveTabGroup] = React.useState("all-group");
  const displayedDataGroup = activeTabGroup === "all-group" ? AllGroup : group;

  return (
    <div className="max-w-7xl mx-auto mt-6 px-4 h-screen overflow-y-auto py-14">
      <div className="flex items-center justify-between rounded-xl pl-8 pt-6 bg-gradient-to-r from-teal-800 to-teal-500 text-white overflow-hidden max-w-5xl mx-auto">
        {/* Left Text Section */}
        <div>
          <h2 className="text-4xl text-white font-semibold mb-1">Komunitas</h2>
          <p className="text-xl text-white font-normal">
            Jelajahi postingan terhangat dari komunitas BEN Indonesia
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
          <div className="flex flex-row items-center px-4 py-2 border border-[#E2E8F0] bg-gray-50 rounded-lg">
            <Search size={12} color="#0F172A" className="mr-2" />
            <input
              type="text"
              placeholder="Cari berita terkini di BEN Indonesia"
              className=" placeholder-[#5C5A57] text-sm text-[#1E1F24] focus:outline-none"
            />
          </div>
        </div>

        {activeTab === "group" && (
          <div className="flex space-x-2 mb-6 rounded-md bg-[#F1F5F9] p-1 w-max">
            <button
              className={`rounded-md px-3 py-1.5 text-sm font-medium focus:outline-none cursor-pointer ${
                activeTabGroup === "all-group"
                  ? "bg-white text-[#1E1F24]"
                  : "bg-[#F1F5F9] text-[#5C5A57]"
              }`}
              onClick={() => setActiveTabGroup("all-group")}
            >
              Semua Grup (20)
            </button>
            <button
              className={`rounded-md px-3 py-1.5 text-sm font-medium focus:outline-none cursor-pointer ${
                activeTabGroup === "own-group"
                  ? "bg-white text-[#1E1F24]"
                  : "bg-[#F1F5F9] text-[#5C5A57]"
              }`}
              onClick={() => setActiveTabGroup("own-group")}
            >
              Grup saya (4)
            </button>
          </div>
        )}

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <>
            {activeTab === "berita" ? (
              <>
                {news.map((item, index) => (
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
              </>
            ) : (
              <>
                {displayedDataGroup.map((item, index) => (
                  <div
                    key={index}
                    className="max-w-sm rounded-xl overflow-hidden border border-[#D9DAE1] shadow-sm flex flex-col justify-between flex-1"
                  >
                    <Image src={item.image} alt="Image Group" />

                    <div className="p-4">
                      <h3 className="text-lg font-semibold text-[#1E1F24]">
                        {item.title}
                      </h3>
                      <p className="text-sm text-[#5C5A57] mt-1">{item.date}</p>
                    </div>

                    <div className="px-4 py-2 border-t border-[#D9DAE1] flex items-center text-sm text-gray-600 space-x-4">
                      <div className="flex items-center space-x-1">
                        <Globe size={10} color="#5C5A57" />
                        <span className="text-sm text-[#5C5A57] font-normal">
                          {item.is_public ? `Grup Publik` : `Grup Privat`}
                        </span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Users size={10} color="#5C5A57" />
                        <span className="text-sm text-[#5C5A57] font-normal">{`${item.member} Anggota`}</span>
                      </div>
                    </div>

                    <div className="px-4 py-2 flex justify-between items-center border-t border-gray-100 pb-4">
                      <span className="text-xs font-medium text-white bg-[#178484] px-3 py-1.5 rounded-md">
                        Sudah bergabung
                      </span>
                      <a
                        href="#"
                        className="text-xs font-medium text-[#178484] hover:underline"
                      >
                        Lihat postingan
                      </a>
                    </div>
                  </div>
                ))}
              </>
            )}
          </>
        </div>
      </div>
    </div>
  );
};

export default CommunityContainer;
