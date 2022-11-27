import React from "react";
import { RiVideoAddFill } from "react-icons/ri";
import { BiSearch } from "react-icons/bi";
import { CgMoreAlt } from "react-icons/cg";
import Contacts from "../components/Contacts";

const RightSidebar = () => {
  return (
    <div className="hidden md:inline-flex flex-col pt-4 max-w-xl md:min-[200px] lg:min-w-[250px]">
      <div className="flex items-center text-gray-500">
        <p className="flex text-lg font-semibold flex-grow">Contacts</p>
        <div className="flex space-x-1 px-2">
          <div className="rounded-full p-2 hover:bg-gray-200">
            <RiVideoAddFill />
          </div>{" "}
          <div className="rounded-full p-2 hover:bg-gray-200">
            <BiSearch />
          </div>{" "}
          <div className="rounded-full p-2 hover:bg-gray-200">
            <CgMoreAlt />
          </div>
        </div>
      </div>
      <Contacts
        src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        name="Admin user"
        status="Online"
      />{" "}
      <Contacts
        src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        name="Tanaka user"
        status="Offline"
      />{" "}
      <Contacts
        src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        name="John tonny"
        status="Online"
      />
    </div>
  );
};

export default RightSidebar;
