"use client";
import { useEffect, useState } from "react";
import getData from "@/util/getData";
import Blog from "./Blog";

type DataArr = {
  title: string;
  author: string;
  category: string;
  img: string;
  date: string;
  content: string;
};

export default function Blogs() {
  const [dataArr, setDataArr] = useState<DataArr[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getData();
        setDataArr(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <main className="flex flex-col justify-start items-center">
        {dataArr?.map(
          ({ title, author, category, img, date, content }: DataArr, index) => (
            <Blog
              key={index}
              title={title}
              author={author}
              category={category}
              img={img}
              date={date}
              content={content}
            />
          )
        )}
      </main>
    </div>
  );
}
