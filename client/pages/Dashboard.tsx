import { Menu, ChevronRight, Star, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

interface Book {
  id: number;
  title: string;
  author: string;
  cover: string;
  progress: number;
}

interface RecommendedBook {
  id: number;
  title: string;
  author: string;
  cover: string;
  level: string;
  rating: number;
}

export default function Dashboard() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedChild, setSelectedChild] = useState("Emma");

  const children = [
    { id: 1, name: "Emma", age: 8, grade: "3rd" },
    { id: 2, name: "Liam", age: 6, grade: "1st" },
  ];

  const continueReading: Book[] = [
    {
      id: 1,
      title: "The Lion, the Witch",
      author: "C.S. Lewis",
      cover: "🦁",
      progress: 65,
    },
    {
      id: 2,
      title: "Charlotte's Web",
      author: "E.B. White",
      cover: "🕷️",
      progress: 42,
    },
  ];

  const recommended: RecommendedBook[] = [
    {
      id: 1,
      title: "Percy Jackson",
      author: "Rick Riordan",
      cover: "⚡",
      level: "4-5",
      rating: 4.8,
    },
    {
      id: 2,
      title: "Wings of Fire",
      author: "Tui T. Sutherland",
      cover: "🐉",
      level: "3-4",
      rating: 4.7,
    },
    {
      id: 3,
      title: "Diary of a Wimpy Kid",
      author: "Jeff Kinney",
      cover: "📔",
      level: "2-3",
      rating: 4.6,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-100 via-orange-50 to-pink-100 pb-20">
      {/* Header */}
      <div className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
            Bookworm
          </h1>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <Menu className="w-6 h-6 text-gray-700" />
          </button>
        </div>
        {menuOpen && (
          <div className="px-6 pb-4 space-y-2 border-t border-gray-200">
            <Link
              to="/search"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
            >
              Search Books
            </Link>
            <Link
              to="/library"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
            >
              My Library
            </Link>
            <Link
              to="/progress"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
            >
              Progress
            </Link>
            <Link
              to="/settings"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
            >
              Settings
            </Link>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="max-w-2xl mx-auto px-6 py-6 space-y-8">
        {/* Child Selector */}
        <div>
          <h2 className="text-lg font-bold text-gray-800 mb-3">Select Child</h2>
          <div className="flex gap-3 overflow-x-auto pb-2">
            {children.map((child) => (
              <button
                key={child.id}
                onClick={() => setSelectedChild(child.name)}
                className={`flex-shrink-0 px-4 py-3 rounded-2xl font-semibold transition-all ${
                  selectedChild === child.name
                    ? "bg-gradient-to-r from-orange-400 to-pink-500 text-white shadow-lg"
                    : "bg-white text-gray-700 border-2 border-gray-200"
                }`}
              >
                <div className="text-sm">{child.name}</div>
                <div className="text-xs opacity-75">Age {child.age}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-3">
          <div className="bg-white rounded-2xl p-4 shadow-sm">
            <div className="text-2xl mb-1">📚</div>
            <div className="text-xs text-gray-600">Books Read</div>
            <div className="text-xl font-bold text-gray-800">12</div>
          </div>
          <div className="bg-white rounded-2xl p-4 shadow-sm">
            <div className="text-2xl mb-1">⭐</div>
            <div className="text-xs text-gray-600">Current Level</div>
            <div className="text-xl font-bold text-gray-800">4.2</div>
          </div>
          <div className="bg-white rounded-2xl p-4 shadow-sm">
            <div className="text-2xl mb-1">🏆</div>
            <div className="text-xs text-gray-600">Badges</div>
            <div className="text-xl font-bold text-gray-800">7</div>
          </div>
        </div>

        {/* Continue Reading */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-lg font-bold text-gray-800">Continue Reading</h3>
            <Link to="/library" className="text-orange-500 hover:text-orange-600 text-sm font-semibold">
              View All
            </Link>
          </div>
          <div className="space-y-3">
            {continueReading.map((book) => (
              <div key={book.id} className="bg-white rounded-2xl p-4 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="text-5xl">{book.cover}</div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-gray-800 text-sm">{book.title}</h4>
                    <p className="text-xs text-gray-600 mb-2">{book.author}</p>
                    <div className="space-y-1">
                      <div className="flex items-center justify-between text-xs text-gray-600">
                        <span>Progress</span>
                        <span>{book.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-orange-400 to-pink-500 h-2 rounded-full"
                          style={{ width: `${book.progress}%` }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recommended Books */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-lg font-bold text-gray-800">Recommended for Emma</h3>
            <Link to="/search" className="text-orange-500 hover:text-orange-600 text-sm font-semibold">
              Browse
            </Link>
          </div>
          <div className="space-y-3">
            {recommended.map((book) => (
              <Link key={book.id} to={`/book/${book.id}`} className="bg-white rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="text-5xl">{book.cover}</div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-gray-800 text-sm">{book.title}</h4>
                    <p className="text-xs text-gray-600 mb-2">{book.author}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1">
                        <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
                          Level {book.level}
                        </span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                        <span className="text-xs font-semibold text-gray-700">{book.rating}</span>
                      </div>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-400 flex-shrink-0" />
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* CTA */}
        <Link
          to="/search"
          className="block w-full py-4 px-6 bg-gradient-to-r from-orange-400 to-pink-500 text-white font-semibold rounded-2xl text-center shadow-lg hover:shadow-xl transition-all"
        >
          Discover More Books
        </Link>
      </div>
    </div>
  );
}
