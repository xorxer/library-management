export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen">
      <aside className="w-64 bg-gray-800 text-white p-4">
        {/* Sidebar navigation */}
        <nav>
          <ul>
            <li><a href="/admin">Home</a></li>
            <li><a href="/admin/users">Users</a></li>
            {/* More links */}
          </ul>
        </nav>
      </aside>
      <main className="flex-1 p-8 bg-white">
        {children} {/* This is where the page.tsx content renders */}
      </main>
    </div>
  );
}