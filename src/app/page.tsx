import { Sidebar, Navbar } from "@/components/ui";

export default function Home() {
  return (
    <main className="flex min-h-screen">
      <aside className="w-64 2xl:w-80 bg-charcoal_gray min-h-screen">
        <Sidebar />
      </aside>
      <header className="flex h-[50px] w-full border-b-2 border-b-transparent shadow-lg">
        <Navbar/>
      </header>
    </main>
  );
}
