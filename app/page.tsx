import TodoList from '@/components/TodoList';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-neutral-50 to-neutral-100 dark:from-neutral-950 dark:to-neutral-900 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-neutral-800 dark:text-neutral-100 mb-4">
            Task Master
          </h1>
          <p className="text-neutral-600 dark:text-neutral-400">
            Organize your day, achieve your goals
          </p>
        </div>
        <TodoList />
      </div>
    </main>
  );
}