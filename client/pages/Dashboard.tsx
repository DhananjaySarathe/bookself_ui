import { Menu } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Dashboard() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-100 via-orange-50 to-pink-100">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-800">Bookworm</h1>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <Menu className="w-6 h-6 text-gray-700" />
          </button>
        </div>
        {menuOpen && (
          <div className="px-6 pb-4 space-y-2 border-t border-gray-200">
            <Link to="/search" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg">
              Search
            </Link>
            <Link to="/library" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg">
              Library
            </Link>
            <Link to="/progress" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg">
              Progress
            </Link>
            <Link to="/settings" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg">
              Settings
            </Link>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex-1 flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-md text-center">
          <div className="bg-white rounded-3xl shadow-lg p-8 space-y-4">
            <h1 className="text-2xl font-bold text-gray-800">Home Dashboard</h1>
            <p className="text-gray-600">
              This will be the main dashboard showing child selector, recommended books, and continue reading section.
            </p>
            <p className="text-sm text-gray-500">
              Continue prompting me to fill in this page content!
            </p>
            <div className="pt-4 space-y-2">
              <Link
                to="/search"
                className="block py-2 px-4 bg-orange-400 text-white rounded-lg hover:bg-orange-500 transition-colors font-medium"
              >
                Go to Search
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
