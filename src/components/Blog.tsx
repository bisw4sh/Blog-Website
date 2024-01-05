import React from "react";
import Image from "next/image";

type Props = {
  title: string;
  author: string;
  category: string;
  img: string;
  date: string;
  content: string;
};

export default function Blog({
  title,
  author,
  category,
  img,
  date,
  content,
}: Props) {
  const spacedContent = content.replace(/#(\w+)/g, "# $1");
  const sections = spacedContent.split("#").filter(Boolean);
  return (
    <div className="bg-zinc-800 mt-4 rounded-lg p-4 flex flex-col lg:w-1/2 justify-center items-center">
      <Image
        src={`/img/${img}`}
        priority
        alt={img}
        height={200}
        width={200}
        className="rounded-xl "
        style={{ height: "auto", width: "auto" }}
      />

      <div key={title}>
        <p className="text-xl font-semibold">{title}</p>
        <p>Author: {author}</p>
        <p>Date: {date.toString()}</p>
        <div>
          {sections.map((section, index) => {
            const [header, ...paragraphs] = section.trim().split("\n");
            return (
              <section key={index}>
                <h1>{header.trim()}</h1>
                <p>{paragraphs.join("\n").trim()}</p>
              </section>
            );
          })}
        </div>
      </div>
      <p className="self-start py-[2px] px-2 rounded-lg bg-cyan-50 text-violet-900 text-md">
        {category}
      </p>
    </div>
  );
}
