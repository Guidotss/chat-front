function SidebarChannels() {
  const channels = new Array(10).fill(0);

  return (
    <>
      {channels.map((_: number, i: number) => (
        <li
          key={i}
          className="flex justify-center items-center h-11 w-11 rounded-full bg-gunmetal_gray hover:rounded-lg duration-150 ease-in-out cursor-pointer"
        >
          <p className="text-gray-500 font-semibold">G</p>
        </li>
      ))}
    </>
  );
}

function SidebarUsers() {
  const users = new Array(10).fill(0);

  return (
    <>
      {users.map((_: number, i: number) => (
        <li key={i}>
          <div className="flex justify-between items-center h-11 px-4 hover:bg-gunmetal_gray rounded-lg cursor-pointer">
            <p className="text-sm text-gray-300 font-semibold">
              Nombre de usuario
            </p>
            <p className="text-sm text-gray-300 font-semibold">{i + 1}</p>
          </div>
        </li>
      ))}
    </>
  );
}

export const Sidebar = () => {
  return (
    <div className="flex flex-col">
      <div className="flex h-screen">
        <nav className="flex flex-col h-full items-center w-20 bg-jet_black px-2 gap-2 py-1">
          <h3 className="text-sm font-semibold text-gray-400">Discord</h3>
          <ul className="flex flex-col gap-5">
            <SidebarChannels />
          </ul>
        </nav>
        <nav>
          <header className="p-2 border-b-2 border-b-transparent shadow-lg">
            <input
              placeholder="Buscar o iniciar un chat"
              className="w-full h-8 px-4 bg-gunmetal_gray text-sm text-gray-300 rounded-md placeholder-gray-300 outline-none"
            />
          </header>
          <ul className="flex flex-col p-2">
            <SidebarUsers />
          </ul>
        </nav>
      </div>
    </div>
  );
};
