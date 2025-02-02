import Image from "next/image";
import contactImage from "../assets/contact.jpg";
import { IoIosArrowForward } from "react-icons/io";
import { LinkBtn } from "@/components/ui/link-btn";

export default function Home() {
  return (
    <div className="w-full h-screen flex flex-col  items-center justify-center md:flex-row">
      <div className=" w-full h-full relative  flex items-center justify-center md:w-1/2 ">
        {/* <div className="relative w-full"> */}
        <Image
          src={contactImage}
          fill
          alt="image contact"
          style={{ height: "100%", width: "100%", objectFit: "cover" }}
          className="m-auto"
        />
        {/* </div> */}
      </div>
      <div className="text-center flex flex-col gap-2 justify-center items-center py-8 md:w-1/2">
        <h1 className=" text-5xl bg-gradient-to-r from-twYellow to-foreground text-transparent  bg-clip-text font-bold font-Pacifico ">
          Si<span className=" text-6xl">Contacts</span>
        </h1>
        <h1 className=" w-2/3 text-base md:text-lg font-light tracking-wider mb-6">
          Build Stronger Relationships and Increase Sales with an Organized
          Contact Database
        </h1>
        <LinkBtn href="/contacts">
          Try for Free
          <IoIosArrowForward size={26} />
        </LinkBtn>
        {/* <Link
          className=" group px-5 py-2 bg-background ring-2 ring-foreground border-4 flex justify-center items-center gap-2 border-twYellow transition-all duration-300 ease-in-out  rounded-full text-foreground text-xl uppercase font-semibold hover:bg-twYellow  hover:transform hover:scale-105"
          href="/contacts"
        >
          Try for Free{" "}
          <IoIosArrowForward
            size={26}
            className="group-hover:transform group-hover:translate-x-2"
          />
        </Link> */}
      </div>
    </div>
  );
}
