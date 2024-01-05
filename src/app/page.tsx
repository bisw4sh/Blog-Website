import Navbar from "@/components/Navbar"
import Blogs from '@/components/Blogs'

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <Navbar />
      <Blogs />
    </main>
  );
}
