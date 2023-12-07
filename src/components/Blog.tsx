import React from 'react'
import Image from 'next/image'

type Props = {
  title: string;
  author: string;
  category: string;
  img: string;
  date: string;
  content: string;
};

export default function Blog({ title, author, category, img, date, content }: Props) {
  return (
    <div>
      {/* <Image
        src={`/img/${src}`}
        alt={alt}
        height={400}
        width={400}
        className="rounded-xl"
      /> */}

      <li key={title}>
        {/* Render data properties here */}
        <p>Title: {title}</p>
        <p>Author: {author}</p>
        <p>Category: {category}</p>
        <p>Image: {img}</p>
        <p>Date: {date}</p>
        <p>Content: {content}</p>
      </li>
    </div>
  );
}