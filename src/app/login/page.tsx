"use client";

import PAGE_NAME from "@web-learning/constants/page_name";
import ICONS from "@web-learning/public/assets/icons";
import { LOCAL_STORAGE_KEYS } from "@web-learning/utils/constants";
import { localStorageExt } from "@web-learning/utils/local-storage";
import Image from "next/image";
import { redirect, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const LoginPage = () => {
  const [user, setUser] = useState({ username: "", password: "" });
  const router = useRouter();
  const searchParams = useSearchParams();
  const urlSearch = searchParams.get("url") || "";
  const users = localStorageExt.getToken();

  const urlPathCallback = (): string => {
    let url = "";
    if (urlSearch) {
      const urlLen = location.search?.length;
      url = location.search?.slice?.(5, urlLen);
    }
    return url;
  };

  const handleLogin = () => {
    localStorageExt.setLocalStorage(LOCAL_STORAGE_KEYS.USER_INFO, user);
  };

  useEffect(() => {
    if (users) {
      return redirect(
        urlPathCallback() ? urlPathCallback() : PAGE_NAME.cari_lowongan
      );
    }
  }, [users, router]);

  return (
    <div className="flex h-[100vh] justify-center bg-[#F9FAFB]">
      <div className="flex flex-1 justify-center items-center">
        <Image src={ICONS.BenLogo} alt="Ben Logo" />
      </div>
      <div className="flex flex-1 flex-col justify-center items-center">
        <div className="min-h-screen flex items-center justify-center">
          <div className="w-full max-w-sm p-6 bg-white rounded-xl shadow-md">
            <div className="mb-6">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-semibold text-[#1E1F24]">Masuk</h2>
                <div className="text-sm text-[#1E1F24] cursor-pointer">
                  <span className="mr-1">🌐</span>Indonesia (ID) ▼
                </div>
              </div>
              <p className="text-sm text-[#1E1F24] mt-1">
                Untuk dapat mengakses platform BEN Indonesia, anda perlu masuk
                dulu.
              </p>
            </div>

            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-[#1E1F24]">
                  Username atau email
                </label>
                <input
                  type="text"
                  className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 placeholder:text-gray-400 text-[#1E1F24]"
                  placeholder="Username atau email"
                  onChange={(e) =>
                    setUser({ ...user, username: e.target.value })
                  }
                />
              </div>

              <div>
                <div className="flex justify-between items-center mt-1">
                  <label className="block text-sm font-medium text-[#1E1F24]">
                    Kata sandi
                  </label>
                  <a
                    href="#"
                    className="text-sm text-teal-600 ml-2 whitespace-nowrap hover:underline"
                  >
                    Lupa sandi?
                  </a>
                </div>
                <input
                  type="password"
                  className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 placeholder:text-gray-400 text-[#1E1F24]"
                  placeholder="Kata sandi"
                  onChange={(e) =>
                    setUser({ ...user, password: e.target.value })
                  }
                />
              </div>

              <div className="flex items-center">
                <input
                  id="remember"
                  type="checkbox"
                  className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
                />
                <label
                  htmlFor="remember"
                  className="ml-2 block text-sm text-gray-700"
                >
                  Biarkan saya tetap masuk
                </label>
              </div>

              <button
                onClick={handleLogin}
                type="submit"
                className="w-full py-2 px-4 bg-teal-600 text-white rounded-lg hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 cursor-pointer"
              >
                Masuk
              </button>
            </form>

            <div className="mt-4 text-center text-sm">
              <span className="text-gray-600">Baru ke BEN Indonesia?</span>
              <a href="#" className="text-teal-600 font-medium hover:underline">
                Daftar
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LoginPage;
