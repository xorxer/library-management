// app/(main)/page.tsx
export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold mb-4">Welcome to the Main Page</h1>
      <p className="text-lg text-gray-600">
        This is your home page, served at <code>/</code>!
      </p>
    </main>
  );
}
