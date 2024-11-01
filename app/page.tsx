import { ModeToggle } from "@/components/mode-toggle";
import Image from "next/image";



export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center  p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="flex gap-2 items-center">
        <h1>
          Hey! This is a Next.js app with Tailwind CSS and TypeScript.{" "}
        </h1>
        <ModeToggle />


      </div>
    </div>
  );
}
