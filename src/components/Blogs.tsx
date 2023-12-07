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
  // Assuming getData returns an array of DataArr
  const [dataArr, setDataArr] = useState<DataArr[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getData();
        setDataArr(data);
      } catch (error) {
        console.error("Error fetching data:", error);
        // Handle error as needed
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Blogs below</h1>
      <ul>
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
      </ul>
    </div>
  );
}
