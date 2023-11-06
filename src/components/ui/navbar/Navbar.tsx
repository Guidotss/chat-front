import { FriendsIcon, NewChatIcon } from "../Icons";
import { navbarItems } from "@/constants/navbarItems";

function NavbarItem() {
  return navbarItems.map((item, index) => (
    <li
      key={index}
      className={`text-gray-300 text-sm cursor-pointer font-semibold ${
        index == navbarItems.length - 1 &&
        "py-1 px-2 rounded-lg cursor-pointer bg-green-700 text-slate-50 hover:bg-green-800 transition-colors duration-300 ease-out"
      }`}
    >
      {item.title}
    </li>
  ));
}

export const Navbar = () => {
  return (
    <nav className="w-full flex justify-between items-center px-10">
      <div className="flex items-center gap-5">
        <div className="flex items-center gap-2">
          <i>
            <FriendsIcon />
          </i>
          <h3 className="text-sm font-semibold text-gray-400">Amigos</h3>
        </div>
        <div className="h-7 w-[1px] bg-gray-500" />
        <ul className="flex gap-5 items-center">
          <NavbarItem />
        </ul>
      </div>
      <button className="p-2 rounded-full outline-none hover:bg-gray-200 hover:bg-opacity-10 transition-colors duration-300 ease-in-out">
        <i><NewChatIcon/></i>
      </button>
    </nav>
  );
};
