import Image from "next/image";
import React from "react";
import SideBarItems from "./SideBarItems";
import { ImUsers } from "react-icons/im";
import {
  MdGroups,
  MdOutlineOndemandVideo,
  MdOutlineExpandMore,
} from "react-icons/md";
import { AiOutlineShop } from "react-icons/ai";
import { BsStopwatch } from "react-icons/bs";
import { useSession } from "next-auth/react";

const SideBar = () => {
  const { data: session } = useSession();
  return (
    <div
      className="hidden lg:inline-flex flex-col py-2 pl-2
    max-w-xl lf:min-w-[320px]"
    >
      <div
        className="flex items-center space-x-2 py-3 pl-4 hover:bg-gray-200 rounded-l-xl
    cursor-pointer"
      >
        <Image
          src={session?.user.image}
          height={40}
          width={40}
          className="rounded-full cursor-pointer"
        />
        <p className="hidden sm:inline-flex font-medium">
          {" "}
          {session?.user.name}
        </p>
      </div>
      <SideBarItems Icon={ImUsers} value="Friends" />
      <SideBarItems Icon={MdGroups} value="Groups" />
      <SideBarItems Icon={AiOutlineShop} value="Marketplace" />
      <SideBarItems Icon={MdOutlineOndemandVideo} value="Watch" />
      <SideBarItems Icon={BsStopwatch} value="Memories" />
      <SideBarItems Icon={MdOutlineExpandMore} value="See More" />
    </div>
  );
};

export default SideBar;
