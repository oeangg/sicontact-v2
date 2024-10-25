import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className=" bg-teal-500 w-1/2 h-full flex items-center  justify-center">
        <Image
          src="/contact.png"
          width={500}
          height={500}
          alt="image contact"
        />
      </div>
      <div className=" w-1/2 text-center flex flex-col gap-2 justify-center items-center">
        <h1 className=" text-5xl text-teal-300 font-bold font-Pacifico ">
          Si<span className="text-teal-400 text-6xl">Contacts</span>
        </h1>
        <h1 className=" w-2/3 text-base font-normal mb-6">
          Build Stronger Relationships and Increase Sales with an Organized
          Contact Database
        </h1>
        <Link
          className=" px-5 py-2 bg-orange-600  rounded-xl text-background text-xl font-semibold hover:bg-orange-700"
          href="/contacts"
        >
          Try for Free
        </Link>
      </div>
    </div>
  );
}
