import { ArrowLeft, Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

interface Book {
  id: number;
  title: string;
  author: string;
  cover: string;
  progress?: number;
  completedDate?: string;
}

export default function Library() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("current");

  const currentBooks: Book[] = [
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
    {
      id: 3,
      title: "Wings of Fire",
      author: "Tui T. Sutherland",
      cover: "🐉",
      progress: 28,
    },
  ];

  const completedBooks: Book[] = [
    {
      id: 1,
      title: "Junie B. Jones",
      author: "Barbara Park",
      cover: "👧",
      completedDate: "Jan 15, 2024",
    },
    {
      id: 2,
      title: "The Tale of Despereaux",
      author: "Kate DiCamillo",
      cover: "🐭",
      completedDate: "Dec 28, 2023",
    },
    {
      id: 3,
      title: "Magic Tree House",
      author: "Mary Pope Osborne",
      cover: "🌳",
      completedDate: "Dec 10, 2023",
    },
    {
      id: 4,
      title: "Ramona",
      author: "Beverly Cleary",
      cover: "😄",
      completedDate: "Nov 30, 2023",
    },
  ];

  const wishlistBooks: Book[] = [
    {
      id: 1,
      title: "Percy Jackson",
      author: "Rick Riordan",
      cover: "��",
    },
    {
      id: 2,
      title: "The Baby-Sitters Club",
      author: "Ann M. Martin",
      cover: "👧",
    },
    {
      id: 3,
      title: "Harry Potter",
      author: "J.K. Rowling",
      cover: "🪄",
    },
    {
      id: 4,
      title: "The 39 Clues",
      author: "Rick Riordan et al.",
      cover: "🔍",
    },
  ];

  const tabs = [
    { id: "current", label: "Currently Reading", count: currentBooks.length },
    { id: "completed", label: "Completed", count: completedBooks.length },
    { id: "wishlist", label: "Wishlist", count: wishlistBooks.length },
  ];

  const renderBooks = () => {
    const books =
      activeTab === "current"
        ? currentBooks
        : activeTab === "completed"
          ? completedBooks
          : wishlistBooks;

    if (books.length === 0) {
      return <p className="text-center text-gray-600 py-8">No books yet</p>;
    }

    return (
      <div className="space-y-3">
        {books.map((book) => (
          <div key={book.id} className="bg-white rounded-2xl p-4 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="text-5xl flex-shrink-0">{book.cover}</div>
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-gray-800">{book.title}</h3>
                <p className="text-sm text-gray-600 mb-2">{book.author}</p>

                {activeTab === "current" && book.progress !== undefined && (
                  <div>
                    <div className="flex items-center justify-between text-xs text-gray-600 mb-1">
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
                )}

                {activeTab === "completed" && book.completedDate && (
                  <p className="text-xs text-gray-500">Finished: {book.completedDate}</p>
                )}
              </div>

              <button className="flex-shrink-0 p-2 hover:bg-red-100 rounded-lg transition-colors text-gray-400 hover:text-red-600">
                <Trash2 className="w-5 h-5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-100 via-orange-50 to-pink-100 pb-20">
      {/* Header */}
      <div className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-2xl mx-auto px-6 py-4 mb-4">
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 text-gray-700 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">Back</span>
          </button>
        </div>

        {/* Tabs */}
        <div className="border-t border-gray-200">
          <div className="max-w-2xl mx-auto px-6">
            <div className="flex gap-2 overflow-x-auto pb-0">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-3 font-semibold border-b-2 transition-colors whitespace-nowrap ${
                    activeTab === tab.id
                      ? "border-orange-500 text-orange-600"
                      : "border-transparent text-gray-600 hover:text-gray-800"
                  }`}
                >
                  {tab.label}
                  <span className="ml-2 text-xs font-bold opacity-75">({tab.count})</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-2xl mx-auto px-6 py-6">
        {renderBooks()}
      </div>
    </div>
  );
}
