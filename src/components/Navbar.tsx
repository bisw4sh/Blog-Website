import React from "react";
import Link from "next/link";

type Props = {};

export default function Navbar({}: Props) {
  return (
    <nav className="w-full flex justify-between items-center text-lg ">
      <div className="font-semibold cursor-pointer">
        <Link href='/'>
        <span className="text-2xl font-bold text-teal-400">B</span>logs
        </Link>
      </div>
      <ul className="flex gap-3 capitalize">
        <li className="cursor-pointer">log in</li>
        <li className="cursor-pointer">sign up</li>
      </ul>
    </nav>
  );
}
