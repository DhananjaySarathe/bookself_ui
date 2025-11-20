import { ArrowLeft, Star, Plus, BookmarkPlus } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

interface SimilarBook {
  id: number;
  title: string;
  author: string;
  cover: string;
  rating: number;
}

export default function BookDetails() {
  const navigate = useNavigate();
  const [addedToList, setAddedToList] = useState(false);
  const [savedBookmark, setSavedBookmark] = useState(false);

  const book = {
    id: 1,
    title: "Percy Jackson & The Lightning Thief",
    author: "Rick Riordan",
    cover: "⚡",
    rating: 4.8,
    reviewCount: 2847,
    genre: "Fantasy",
    level: "4-5",
    ageRange: "9-12 years",
    pageCount: 375,
    description:
      "Percy Jackson is a 12-year-old boy who learns that his father is Poseidon, the god of the sea. He is sent to a summer camp for demigods where he learns about his powers and embarks on an epic quest to return a stolen lightning bolt.",
    highlights: [
      "Fast-paced action and adventure",
      "Relatable teenage protagonist",
      "Clever humor throughout",
      "Introduction to mythology",
    ],
  };

  const similarBooks: SimilarBook[] = [
    { id: 2, title: "Wings of Fire", author: "Tui T. Sutherland", cover: "🐉", rating: 4.7 },
    { id: 3, title: "The Hunger Games", author: "Suzanne Collins", cover: "🔥", rating: 4.6 },
    { id: 4, title: "Rick Riordan's Kane Chronicles", author: "Rick Riordan", cover: "🏺", rating: 4.5 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-100 via-orange-50 to-pink-100 pb-20">
      {/* Header */}
      <div className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-2xl mx-auto px-6 py-4">
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 text-gray-700 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">Back</span>
          </button>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-6 py-8 space-y-6">
        {/* Book Header */}
        <div className="bg-white rounded-2xl shadow-sm p-6">
          <div className="flex gap-6 mb-6">
            <div className="text-7xl">{book.cover}</div>
            <div className="flex-1">
              <h1 className="text-2xl font-bold text-gray-800 mb-1">{book.title}</h1>
              <p className="text-gray-600 mb-3">{book.author}</p>
              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.floor(book.rating)
                          ? "fill-yellow-400 text-yellow-400"
                          : "fill-gray-300 text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <span className="font-semibold text-gray-700">{book.rating}</span>
                <span className="text-sm text-gray-500">({book.reviewCount} reviews)</span>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs bg-purple-100 text-purple-700 px-3 py-1 rounded-full">
                  {book.genre}
                </span>
                <span className="text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
                  Level {book.level}
                </span>
              </div>
            </div>
          </div>

          {/* Book Info */}
          <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-200">
            <div>
              <p className="text-xs text-gray-600 mb-1">Age Range</p>
              <p className="font-semibold text-gray-800">{book.ageRange}</p>
            </div>
            <div>
              <p className="text-xs text-gray-600 mb-1">Pages</p>
              <p className="font-semibold text-gray-800">{book.pageCount}</p>
            </div>
            <div>
              <p className="text-xs text-gray-600 mb-1">Reading Level</p>
              <p className="font-semibold text-gray-800">{book.level}</p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-3">
          <button
            onClick={() => setAddedToList(!addedToList)}
            className={`py-3 px-4 rounded-2xl font-semibold transition-all flex items-center justify-center gap-2 ${
              addedToList
                ? "bg-gradient-to-r from-orange-400 to-pink-500 text-white"
                : "bg-white border-2 border-gray-200 text-gray-700 hover:bg-gray-50"
            }`}
          >
            <BookmarkPlus className="w-5 h-5" />
            {addedToList ? "Added to List" : "Add to List"}
          </button>
          <button
            onClick={() => setSavedBookmark(!savedBookmark)}
            className={`py-3 px-4 rounded-2xl font-semibold transition-all flex items-center justify-center gap-2 ${
              savedBookmark
                ? "bg-gradient-to-r from-orange-400 to-pink-500 text-white"
                : "bg-white border-2 border-gray-200 text-gray-700 hover:bg-gray-50"
            }`}
          >
            <Star className={`w-5 h-5 ${savedBookmark ? "fill-current" : ""}`} />
            {savedBookmark ? "Saved" : "Save"}
          </button>
        </div>

        {/* Summary */}
        <div className="bg-white rounded-2xl shadow-sm p-6">
          <h2 className="text-lg font-bold text-gray-800 mb-3">Summary</h2>
          <p className="text-gray-700 leading-relaxed">{book.description}</p>
        </div>

        {/* Why Kids Love This */}
        <div className="bg-white rounded-2xl shadow-sm p-6">
          <h2 className="text-lg font-bold text-gray-800 mb-4">Why Kids Love This</h2>
          <div className="space-y-3">
            {book.highlights.map((highlight, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="text-xl flex-shrink-0">✨</div>
                <p className="text-gray-700">{highlight}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Similar Books */}
        <div>
          <h2 className="text-lg font-bold text-gray-800 mb-4">Similar Books</h2>
          <div className="space-y-3">
            {similarBooks.map((similarBook) => (
              <div key={similarBook.id} className="bg-white rounded-2xl shadow-sm p-4">
                <div className="flex items-start gap-4">
                  <div className="text-5xl flex-shrink-0">{similarBook.cover}</div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-800">{similarBook.title}</h3>
                    <p className="text-sm text-gray-600 mb-2">{similarBook.author}</p>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-semibold text-gray-700">{similarBook.rating}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <button className="w-full py-4 px-6 bg-gradient-to-r from-orange-400 to-pink-500 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all">
          Read Now
        </button>
      </div>
    </div>
  );
}
