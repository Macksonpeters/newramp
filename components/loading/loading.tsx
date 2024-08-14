import Image from "next/image";
import React from "react";
import LoadingGif from "../../public/images/loadinganime.gif";

const Loading = () => {
  return (
    <div>
      <Image
        src={LoadingGif}
        width={100}
        height={100}
        alt="loading-gif"
        className="object-contain w-[max-content] scale-150 flex  mx-auto justify-center"
      />
    </div>
  );
};

export default Loading;
