/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
const Avatar = ({ url, className }) => {
  return (
    <img
      loading="lazy"
      className={` rounded-full h-10 cursor-pointer transition duration-150 
      transform hover:scale-110 ${className} `}
      src={url}
      alt="profile pic"
    />
  );
};

export default Avatar;
