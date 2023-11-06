export const Sidebar = () => {
  return (
    <div className="flex flex-col">
      <div className="flex h-screen">
        <nav className="flex flex-col h-full items-center w-20 bg-jet_black px-2 gap-2">
          <h3 className="text-sm font-semibold text-gray-400">Discord</h3>
          <ul>
            <li className="flex justify-center items-center h-11 w-11 rounded-full bg-gunmetal_gray hover:rounded-lg hover:h-12 hover:w-12 duration-150 ease-in-out cursor-pointer">
              <p className="text-gray-500 font-semibold">G</p>
            </li>
          </ul>
        </nav>
        <nav></nav>
      </div>
    </div>
  );
};
