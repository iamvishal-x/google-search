import HeaderOption from "./HeaderOption";
import {
  DotsVerticalIcon,
  MapIcon,
  NewspaperIcon,
  PhotographIcon,
  PlayIcon,
  SearchIcon,
} from "@heroicons/react/outline";

const HeaderOptions = () => {
  return (
    <div
      className="flex w-full text-gray-700 
    justify-evenly text-sm pl-2
    lg:text-base lg:justify-start 
    lg:space-x-36 lg:pl-52 
    border-b" //border-b-[1px] || border-b , its 1px default
    >
      {/* left */}
      <div className="flex space-x-6">
        <HeaderOption Icon={SearchIcon} title="All" selected />
        <HeaderOption Icon={PhotographIcon} title="Images" />
        <HeaderOption Icon={NewspaperIcon} title="News" />
        <HeaderOption Icon={PlayIcon} title="Videos" />
        <HeaderOption Icon={MapIcon} title="Map" />
        <HeaderOption Icon={DotsVerticalIcon} title="More" />
      </div>
      {/* right */}
      <div className="flex space-x-4 ">
        <p className="link">Settings</p>
        <p className="link">Tools</p>
      </div>
    </div>
  );
};

export default HeaderOptions;
