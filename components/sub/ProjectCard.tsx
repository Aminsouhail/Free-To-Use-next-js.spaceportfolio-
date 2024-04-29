// Add this line at the top of the file
"use client";

import React from "react";
import Image from "next/image";
import Button from "../sub/Button";

interface Props {
  src: string;
  title: string;
  description: string;
  githubUrl: string;
}

const ProjectCard = ({ src, title, description, githubUrl }: Props) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61]">
      <Image
        src={src}
        alt={title}
        width={1000}
        height={1000}
        className="w-full object-contain"
      />

      <div className="relative p-4">
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
        <p className="mt-2 text-gray-300">{description}</p>
        <Button
          onClick={() => window.open(githubUrl, "_blank")}
          className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded mt-4"
        >
          Source Code
        </Button>
      </div>
    </div>
  );
};

export default ProjectCard;












