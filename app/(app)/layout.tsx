export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar shell — wired in the app-shell task */}
      <main className="flex-1">{children}</main>
    </div>
  )
}
