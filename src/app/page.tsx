import { Sidebar } from '@/components/ui/sidebar/Sidebar'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <aside className='w-64 bg-charcoal_gray min-h-screen'>
        <Sidebar/>
      </aside>
    </main>
  )
}
