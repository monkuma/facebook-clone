import Image from "next/image";
import React from "react";

const Post = () => {
  return (
    <div className="flex flex-col">
      <div className="bg-white mt-6 rounded-md p-4">
        <div className="flex items-center space-x-2">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/800px-2021_Facebook_icon.svg.png"
            className="rounded-full w-10 h-10"
          />
          <div>
            <p className="font-medium">Name user</p>
            <p className="text-xs text-gray-500">
              {new Date().toLocaleString()}
            </p>
          </div>
        </div>
        <p className="py-2">hello world...</p>
      </div>
      {/* If any image */}
      <div className="relative h-60 md:h-96 bg-white">
        <Image
          src="https://images.pexels.com/photos/14208371/pexels-photo-14208371.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          layout={"fill"}
          objectFit={"cover"}
        />
      </div>
      {/* Footer */}
    </div>
  );
};

export default Post;
