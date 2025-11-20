import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Library() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-100 via-orange-50 to-pink-100">
      <div className="pt-6 px-6">
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-2 text-gray-700 hover:text-gray-900 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="font-medium">Back</span>
        </button>
      </div>

      <div className="flex-1 flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-md text-center">
          <div className="bg-white rounded-3xl shadow-lg p-8 space-y-4">
            <h1 className="text-2xl font-bold text-gray-800">Library</h1>
            <p className="text-gray-600">
              This page will show three tabs: Current (reading now), Completed (finished books), and Wishlist.
            </p>
            <p className="text-sm text-gray-500">
              Continue prompting me to fill in this page content!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
