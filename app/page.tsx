import TodoApp from '@/components/TodoApp'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen p-4 sm:p-6 lg:p-8">
      <TodoApp />
      <Footer />
    </main>
  )
}
