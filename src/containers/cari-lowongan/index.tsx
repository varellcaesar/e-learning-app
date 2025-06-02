"use client";

import ICONS from "@web-learning/public/assets/icons";
import IMAGES from "@web-learning/public/assets/images";
import Image from "next/image";
import * as React from "react";

const categories = [
  { name: "Customer service", count: 2, icon: ICONS.CsIcon },
  { name: "Human Resource", count: 4, icon: ICONS.HrIcon },
  { name: "Marketing", count: 3, icon: ICONS.MarketingIcon },
  { name: "Business", count: 3, icon: ICONS.BusinessIcon },
  { name: "Software", count: 5, icon: ICONS.ItIcon },
  { name: "Finance", count: 3, icon: ICONS.FinanceIcon },
  { name: "Design", count: 3, icon: ICONS.DesignIcon },
  { name: "Engineer", count: 3, icon: ICONS.EngIcon },
];

const jobs = Array(6).fill({
  title: "Operator Alat Berat",
  company: "PT ISS",
  location: "Jakarta Selatan",
  experience: "Min. 4 tahun pengalaman",
  salary: "Rp8.000.000 - 12.000.000",
  logo: "/iss-logo.png",
});

const CariLowonganContainer = () => {
  return (
    <div className="lg:max-w-7xl mx-auto mt-6 px-4 h-screen overflow-y-auto py-14">
      <div className="bg-teal-700 text-white rounded-t-xl pt-6 px-6 flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0 md:space-x-6 shadow-md max-w-7xl mx-auto">
        <div className="text-5xl font-semibold md:w-1/2">
          <p>Cari lowongan melalui</p>
          <p>BEN Indonesia</p>
        </div>
        <div className="flex items-center space-x-4">
          <Image src={IMAGES.Banner} alt="Banner" />
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-md p-4 space-y-3 w-full max-w-7xl mx-auto">
        <div className="flex items-center bg-gray-50 overflow-hidden">
          <input
            type="text"
            placeholder="Cari berdasarkan nama pekerjaan, perusahaan, atau kemampuan"
            className="flex-grow px-4 py-3 text-sm text-gray-700 placeholder-gray-500 bg-[#F9F9FB] focus:outline-none"
          />
          <button className="bg-teal-700 text-white px-4 py-3 text-sm flex items-center space-x-1 hover:bg-teal-800 ml-4 rounded-md">
            <Image src={ICONS.SearchIcon} alt="Search icon" />
            <span>Cari</span>
          </button>
        </div>

        <div className="flex flex-wrap gap-2">
          {["Level", "Jenis komitmen", "Tipe penempatan", "Lokasi", "Gaji"].map(
            (filter, idx) => (
              <button
                key={idx}
                className="flex-row px-3 py-2 text-[#1E1F24] font-medium text-xs bg-white border border-[#D9DAE1] rounded-md hover:bg-gray-100 flex items-center cursor-pointer"
              >
                {filter}
                <Image
                  className="ml-1"
                  src={ICONS.SmallDropdownIcon}
                  alt="Dropdown icon"
                />
              </button>
            )
          )}
        </div>
      </div>

      {/* Job Categories */}
      <h2 className="mt-10 text-lg font-semibold text-center text-[#1F2937]">
        Bidang pekerjaan
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
        {categories.map((cat, idx) => (
          <div
            key={idx}
            className="flex items-center space-x-3 bg-white border border-gray-200 rounded-lg p-4 w-60 shadow-sm"
          >
            <div className="text-teal-700">
              {/* <!-- Headset icon --> */}
              <Image src={cat.icon} alt={`icon ${cat.name}`} />
            </div>
            {/* <!-- Text --> */}
            <div>
              <p className="font-semibold text-sm text-gray-900">{cat.name}</p>
              <p className="text-sm text-gray-500">2 Lowongan Tersedia</p>
            </div>
          </div>
        ))}{" "}
      </div>

      {/* Job Results */}
      <div className="flex justify-between items-center mt-10">
        <h3 className="text-lg text-[#1F2937] font-semibold">
          250 lowongan ditemukan
        </h3>
        <div className="text-sm flex items-center space-x-2">
          <select className="border border-[#D9DAE1] rounded px-2 py-1 text-xs text-[#1F2937] font-medium">
            <option>Paling relevan</option>
            <option>Terbaru</option>
            <option>Gaji tertinggi</option>
          </select>
          <span className="text-xs text-[#1F2937] font-medium">Urutkan:</span>
        </div>
      </div>

      {/* Job Cards */}
      <div className="grid md:grid-cols-3 gap-4 mt-4">
        {jobs.map((job, idx) => (
          <div
            key={idx}
            className="bg-white border border-gray-200 rounded-xl shadow-sm p-4 w-80 space-y-2 relative"
          >
            {/* <!-- Save icon --> */}
            <div className="absolute top-4 right-4 text-gray-400 hover:text-teal-600 cursor-pointer">
              <Image src={ICONS.SaveIcon} alt="Save icon" />
            </div>

            {/* <!-- Header --> */}
            <div className="flex items-start space-x-3">
              <Image src={IMAGES.JobImage} alt="Job Icon" />
              <div>
                <p className="font-semibold text-gray-900 text-sm">
                  {job.title}
                </p>
                <p className="text-sm text-teal-600">{job.company}</p>
              </div>
            </div>

            {/* <!-- Details --> */}
            <div className="space-y-1 text-sm text-gray-600">
              <div className="flex items-center space-x-1">
                <Image src={ICONS.LocationIcon} alt="Location icon" />
                <span className="text-sm font-normal text-[#5C5A57] ml-2">
                  {job.location}
                </span>
              </div>
              <div className="flex items-center space-x-1">
                <Image src={ICONS.ExperienceIcon} alt="Experience icon" />
                <span className="text-sm font-normal text-[#5C5A57] ml-2">
                  {job.experience}
                </span>
              </div>
              <div className="flex items-center space-x-1">
                <Image
                  src={ICONS.SalaryIcon}
                  alt="Salary icon"
                  className="ml-[-2px]"
                />
                <span className="text-sm font-normal text-[#5C5A57] ml-2">
                  {job.salary}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CariLowonganContainer;
