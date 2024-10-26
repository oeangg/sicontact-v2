import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center md:flex-row">
      <div className=" bg-teal-500 w-full h-full flex md:w-1/2 ">
        <Image
          src="/contact.png"
          width={400}
          height={400}
          alt="image contact"
          className="m-auto"
        />
      </div>
      <div className="text-center flex flex-col gap-2 justify-center items-center py-8 md:w-1/2">
        <h1 className=" text-5xl text-teal-300 font-bold font-Pacifico ">
          Si<span className="text-teal-400 text-6xl">Contacts</span>
        </h1>
        <h1 className=" w-2/3 text-base font-normal mb-6">
          Build Stronger Relationships and Increase Sales with an Organized
          Contact Database
        </h1>
        <Link
          className=" px-5 py-2 bg-red-500  rounded-xl text-background text-xl font-semibold hover:bg-red-600"
          href="/contacts"
        >
          Try for Free
        </Link>
      </div>
    </div>
  );
}
