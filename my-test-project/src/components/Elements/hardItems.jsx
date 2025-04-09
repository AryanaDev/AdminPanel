"use client";
import { useState } from "react";


export default function HardItems({item}) {
    const [openSection, setOpenSection] = useState(null);

    const toggleSection = (section) =>{
        setOpenSection(openSection === section ? null : section)
    }

    return (
        <div className="bg-black rounded-md shadow-md w-full border-b">
            <button
                onClick={() => toggleSection(1)}
                className={`flex items-center justify-between w-full px-4 py-2 text-black ${
                    openSection === 1 ? "bg-gray-100" : "bg-white"
                }`}
            >
                {item.icon}
                {item.title}
                <svg
                    className={`h-6 w-6 transform transition-transform duration-300 ${
                        openSection === 1 ? "rotate-180" : ""
                    }`}
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"></path>
                </svg>
            </button>
            {openSection === 1 && (
                <div className="bg-gray-50 text-black">
                    <div className="px-4 py-2 space-y-2">
                        {/*  for aryana comment
                        What's the issue?
                        item.children is an array of objects (each containing a title property).
                            React doesn't know how to render objects directly.
                        You need to map over item.children and render each child properly.*/}
                        {item.children?.map((child, index) => (
                            <div key={index} className="pl-4 py-1 hover:bg-gray-200">
                                {child.title}
                            </div>
                        ))}
                    </div>
                </div>

            )}
        </div>
    );
}
