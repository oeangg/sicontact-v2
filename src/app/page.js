import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className=" max-w-lg text-center">
        <h1 className="  text-4xl font-bold mb-4">SiContact</h1>
        <h1 className="text-base font-light mb-6">
          Build Stronger Relationships and Increase Sales with an Organized
          Contact Database
        </h1>
        <Link
          className=" px-5 py-2 bg-foreground rounded-lg text-background text-lg font-medium"
          href="/contacts"
        >
          Try for Free
        </Link>
      </div>
    </div>
  );
}
