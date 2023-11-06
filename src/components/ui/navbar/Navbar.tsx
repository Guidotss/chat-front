import { FriendsIcon } from "../Icons";
export const Navbar = () => {
  return (
    <nav className="flex items-center gap-2 px-10">
      <div className="flex items-center gap-2">
        <i>
          <FriendsIcon />
        </i>
        <h3 className="text-sm font-semibold text-gray-400">Amigos</h3>
      </div>
      <div className="h-7 w-[1px] bg-gray-500"/>
      <ul className="flex gap-5 items-center">
        <li className="text-gray-300 text-sm cursor-pointer">En linea</li>
        <li className="text-gray-300 text-sm cursor-pointer">Todos</li>
        <li className="bg-green-700 text-slate-50 text-sm py-1 px-2 rounded-lg cursor-pointer hover:bg-green-800 transition-colors duration-300 ease-out">Añadir amigo</li>
      </ul>
    </nav>
  );
};
