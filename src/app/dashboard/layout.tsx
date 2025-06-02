"use client";

import { Header } from "@web-learning/components";
import PAGE_NAME from "@web-learning/constants/page_name";
import ICONS from "@web-learning/public/assets/icons";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";

interface AuthLayoutProps {
  children?: React.ReactNode;
}

const AuthLayouth: React.FC<AuthLayoutProps> = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const path = usePathname();

  // Close dropdown profile when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !(dropdownRef.current as HTMLElement).contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <Header
        isProfile={dropdownOpen}
        openProfile={() => setDropdownOpen(!dropdownOpen)}
        dropdownRef={dropdownRef as React.RefObject<HTMLDivElement>}
      >
        <a
          href={PAGE_NAME.komunitas}
          className={`${
            path === PAGE_NAME.komunitas
              ? "text-gray-900 border-b-2 border-gray-800"
              : "hover:text-gray-900"
          } pb-1`}
        >
          Komunitas
        </a>
        <a
          href={PAGE_NAME.cari_lowongan}
          className={`${
            path === PAGE_NAME.cari_lowongan
              ? "text-gray-900 border-b-2 border-gray-800"
              : "hover:text-gray-900"
          } pb-1`}
        >
          Cari lowongan
        </a>
        <a
          href={PAGE_NAME.lamaran_saya}
          className={`${
            path === PAGE_NAME.lamaran_saya
              ? "text-gray-900 border-b-2 border-gray-800"
              : "hover:text-gray-900"
          } pb-1`}
        >
          Lamaran Saya
        </a>
        <a
          href={PAGE_NAME.learning}
          className={`${
            path === PAGE_NAME.learning
              ? "text-gray-900 border-b-2 border-gray-800"
              : "hover:text-gray-900"
          } pb-1`}
        >
          Learning
        </a>
      </Header>
      <div className="flex flex-1 flex-col bg-[#F9FAFB] h-screen min-h-screen">
        {props.children}
      </div>
    </>
  );
};
export default AuthLayouth;
