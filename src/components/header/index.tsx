import ICONS from "@web-learning/public/assets/icons";
import Image from "next/image";
import React from "react";

interface HeaderProps {
  children: React.ReactNode;
  openProfile: () => void;
  isProfile: boolean;
  dropdownRef: React.RefObject<HTMLDivElement>;
}

const Header: React.FC<HeaderProps> = (props) => {
  return (
    <nav className="fixed top-0 left-0 right-0 w-full bg-white shadow-sm px-6 py-2 flex items-center justify-between z-50">
      <div className="flex items-center space-x-4">
        <Image src={ICONS.SmallBenLogo} alt="BEN Talent Centre Logo" />
      </div>

      <div className="flex space-x-8 text-sm font-medium text-gray-600">
        {props.children}
      </div>
      <div
        className="flex items-center space-x-4 relative"
        ref={props.dropdownRef}
      >
        <button className="relative cursor-pointer">
          <Image src={ICONS.NotificationIcon} alt="Notification icon" />
        </button>

        <button
          onClick={props.openProfile}
          className="flex items-center space-x-1 cursor-pointer"
        >
          <div className="w-8 h-8 rounded-full bg-gray-200 text-gray-600 flex items-center justify-center text-xs font-semibold">
            AS
          </div>
          <Image src={ICONS.SmallDropdownIcon} alt="Dropdown icon" />
        </button>

        {/* Dropdown */}
        {props.isProfile && (
          <div className="absolute right-0 top-12 w-64 rounded-md border-[#D9DAE1] bg-white shadow-lg text-sm text-gray-800 z-50">
            <div className="px-4 py-2 font-semibold border-b border-[#D9DAE1]">
              Ahmad Surahmat
            </div>

            <div className="py-1">
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                Profil Saya
              </a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                Dasbor Learning
              </a>
            </div>

            <div className="border-t border-[#D9DAE1] px-4 py-2 text-xs text-gray-500">
              Bahasa
            </div>
            <div>
              <button className="w-full flex items-center px-4 py-2 hover:bg-gray-100">
                <Image src={ICONS.UsFlag} alt="English (US)" />
                <span className="text-sm text-gray-800 ml-1">English (US)</span>
              </button>
              <button className="w-full flex items-center px-4 py-2 bg-gray-100">
                <Image src={ICONS.IndonesiaFlag} alt="Indonesia" />
                <span className="text-sm text-gray-800 flex-1 text-left ml-1">
                  Bahasa Indonesia (ID)
                </span>
                <svg
                  className="w-4 h-4 text-gray-700"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M5 13l4 4L19 7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>

            <div className="border-t border-[#D9DAE1]">
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                Contact us
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
