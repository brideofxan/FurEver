import { Link } from "react-router";

function AdminLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* TOPBAR */}
      <header className="bg-gray-800 text-white px-6 py-4 flex justify-between items-center shadow-sm">
        <h1 className="text-3xl font-semibold">Admin</h1>
      </header>

      <div className="flex flex-1">
        {/* SIDEBAR */}
        <aside className="w-40 bg-gray-300 border-r-2 bg-gray-300 p-4 shrink-0">
          <nav className="space-y-6">
            <Link 
              to="/admin/animals" 
              className="block font-medium text-black hover:bg-sky-100/70"> 
              Lägg till djur
            </Link>
             <Link 
              to="/admin/applications" 
              className="block font-medium text-black hover:bg-sky-100/70"> 
              Ansökningar
            </Link>
            <Link 
              to="/animals" 
              className="block font-medium text-black hover:bg-sky-100/70"> 
              Se alla djur
            </Link>
             <Link 
              to="/admin/texts" 
              className="block font-medium text-black hover:bg-sky-100/70"> 
              Redigera texter
              </Link>
          </nav>
        </aside>

        {/* INNEHÅLLSYTA */}
        <main className="flex-1 bg-gray-100 p-12 flex justify-center items-start overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
}

export default AdminLayout;
