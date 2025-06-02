"use client";

import * as React from "react";
import Image from "next/image";
import IMAGES from "../../../public/assets/images";

// Course Card Component
const CourseCard = ({ 
  title, 
  imageUrl, 
  instructor, 
  duration, 
  level, 
  isFree = true 
}: {
  title: string;
  imageUrl: string;
  instructor: string;
  duration: string;
  level: string;
  isFree?: boolean;
}) => {
  return (
    <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden flex flex-col">
      {/* Course Image */}
      <div className="h-40 w-full relative">
        <Image 
          src={imageUrl} 
          alt={title}
          fill
          style={{ objectFit: 'cover' }}
        />
      </div>
      
      {/* Course Title */}
      <div className="p-4">
        <h3 className="text-gray-900 font-medium text-lg mb-2">{title}</h3>
      </div>
      
      {/* Course Details */}
      <div className="px-4 pb-2 space-y-2 flex-grow">
        {/* Free Tag */}
        <div className="flex items-center space-x-1">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-600">
            <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path>
            <line x1="7" y1="7" x2="7.01" y2="7"></line>
          </svg>
          <span className="text-sm text-gray-600">{isFree ? 'Gratis' : 'Berbayar'}</span>
        </div>
        
        {/* Duration */}
        <div className="flex items-center space-x-1">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-600">
            <circle cx="12" cy="12" r="10"></circle>
            <polyline points="12 6 12 12 16 14"></polyline>
          </svg>
          <span className="text-sm text-gray-600">Durasi kursus {duration}</span>
        </div>
        
        {/* Level */}
        <div className="flex items-center space-x-1">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-600">
            <path d="M2 20h.01"></path>
            <path d="M7 20v-4"></path>
            <path d="M12 20v-8"></path>
            <path d="M17 20v-12"></path>
            <path d="M22 20V8"></path>
          </svg>
          <span className="text-sm text-gray-600">{level}</span>
        </div>
      </div>
      
      {/* Separator */}
      <div className="border-t border-gray-200 my-2"></div>
      
      {/* Instructor */}
      <div className="px-4 pb-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center text-xs text-gray-900">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-900">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </div>
          <span className="text-sm text-gray-900">{instructor}</span>
        </div>
        <div className="flex">
          {[1, 2, 3, 4, 5].map((star) => (
            <svg key={star} xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="#FFC107" stroke="#FFC107" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
            </svg>
          ))}
        </div>
      </div>
    </div>
  );
};

// Category Button Component
const CategoryButton = ({ 
  icon, 
  label, 
  isActive = false 
}: {
  icon: React.ReactNode;
  label: string;
  isActive?: boolean;
}) => {
  return (
    <button 
      className={`flex items-center space-x-2 px-4 py-2 rounded-lg ${isActive ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-100'}`}
    >
      <span className={isActive ? 'text-blue-600' : 'text-gray-600'}>{icon}</span>
      <span className="text-sm font-medium">{label}</span>
    </button>
  );
};

// Featured Course Banner Component
const FeaturedCourseBanner = () => {
  return (
    <div className="bg-teal-700 text-white rounded-t-xl pt-6 px-6 flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0 md:space-x-6 shadow-md max-w-5xl mx-auto mb-8">
        <div className="text-5xl font-semibold md:w-1/2">
          <p>Cari lowongan melalui</p>
          <p>BEN Indonesia</p>
        </div>
        <div className="flex items-center space-x-4">
          <Image src={IMAGES.Banner} alt="Banner" />
        </div>
      </div>
  );
};

const LearningContainer = () => {
  // Mock data for courses
  const courses = [
    {
      id: 1,
      title: "How to easily create a website with React",
      imageUrl: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2070&auto=format&fit=crop",
      instructor: "Surabi Notosuman",
      duration: "2 jam 40 menit",
      level: "Cocok untuk pemula",
      isFree: true
    },
    {
      id: 2,
      title: "Learn JavaScript Fundamentals",
      imageUrl: "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?q=80&w=2070&auto=format&fit=crop",
      instructor: "Budi Santoso",
      duration: "3 jam 15 menit",
      level: "Cocok untuk pemula",
      isFree: true
    },
    {
      id: 3,
      title: "Advanced CSS Techniques",
      imageUrl: "https://images.unsplash.com/photo-1523437113738-bbd3cc89fb19?q=80&w=2071&auto=format&fit=crop",
      instructor: "Diana Purnama",
      duration: "1 jam 50 menit",
      level: "Tingkat menengah",
      isFree: false
    },
    {
      id: 4,
      title: "UI/UX Design Principles",
      imageUrl: "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=2071&auto=format&fit=crop",
      instructor: "Eko Prasetyo",
      duration: "4 jam 20 menit",
      level: "Tingkat menengah",
      isFree: true
    }
  ];

  return (
    // <div className="flex flex-col w-full pt-20 pb-10">
    <div className="max-w-7xl mx-auto mt-6 px-4 h-screen overflow-y-auto py-14">

        {/* Featured Course Banner */}
        <FeaturedCourseBanner />
        
        {/* Categories Section */}
        <div className="mb-8 max-w-5xl">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Kategori Kursus</h2>
          <div className="flex flex-wrap gap-2">
            <CategoryButton 
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                </svg>
              } 
              label="Semua Kursus" 
              isActive={true} 
            />
            <CategoryButton 
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5z"></path>
                  <path d="M8 7h6"></path>
                  <path d="M8 11h8"></path>
                </svg>
              } 
              label="Kursus Saya" 
            />
            <CategoryButton 
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"></path>
                  <path d="M7 2v20"></path>
                  <path d="M21 15V2"></path>
                  <path d="M18 15a3 3 0 1 0 0 6 3 3 0 0 0 0-6z"></path>
                </svg>
              } 
              label="Audio" 
            />
            <CategoryButton 
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M8 21h8"></path>
                  <path d="M12 21v-4"></path>
                  <path d="M12 3v4"></path>
                  <path d="M6 8a6 6 0 0 1 12 0c0 4.97-6 8-6 13"></path>
                </svg>
              } 
              label="Sertifikasi" 
            />
          </div>
        </div>

        {/* Course List Section */}
        <div className="mb-8 max-w-5xl">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-gray-900">Kursus Populer</h2>
            <button className="text-sm text-blue-600 font-medium flex items-center">
              Lihat Semua
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
          </div>

          {/* Course Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {courses.map((course) => (
              <CourseCard 
                key={course.id}
                title={course.title}
                imageUrl={course.imageUrl}
                instructor={course.instructor}
                duration={course.duration}
                level={course.level}
                isFree={course.isFree}
              />
            ))}
          </div>
        </div>
      </div>
    // </div>
  );
};

export default LearningContainer;
