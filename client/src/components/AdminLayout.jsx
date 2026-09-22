import { Link } from "react-router";

function AdminLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* TOPBAR */}
      <header className="bg-amber-500 text-black px-6 py-4 flex justify-between items-center shadow-sm">
        <h1 className="text-3xl font-semibold">Admin</h1>
      </header>

      <div className="flex flex-1">
        {/* SIDEBAR */}
        <aside className="w-40 bg-amber-200 border-r-2 border-amber-200 p-4 shrink-0">
          <nav className="space-y-6">
            <Link 
              to="/admin/animals" 
              className="block font-medium text-black hover:text-amber-600">
              Lägg till djur
            </Link>
             <Link 
              to="/admin/applications" 
              className="block font-medium text-black hover:text-amber-600"> 
              Ansökningar
            </Link>
            <Link 
              to="/animals" 
              className="block font-medium text-black hover:text-amber-600">
              Se alla djur
            </Link>
          </nav>
        </aside>

        {/* INNEHÅLLSYTA */}
        <main className="flex-1 bg-amber-50 p-12 flex justify-center items-start overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
}

export default AdminLayout;
