import {
  ArrowLeft,
  Search as SearchIcon,
  ChevronDown,
  Star,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

interface Book {
  id: number;
  title: string;
  author: string;
  cover: string;
  level: string;
  rating: number;
  genre: string;
  grade: string;
}

export default function Search() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("All");
  const [selectedLevel, setSelectedLevel] = useState("All");
  const [selectedGrade, setSelectedGrade] = useState("All");

  const books: Book[] = [
    {
      id: 1,
      title: "Percy Jackson",
      author: "Rick Riordan",
      cover: "⚡",
      level: "4-5",
      rating: 4.8,
      genre: "Fantasy",
      grade: "4th-5th",
    },
    {
      id: 2,
      title: "Wings of Fire",
      author: "Tui T. Sutherland",
      cover: "🐉",
      level: "3-4",
      rating: 4.7,
      genre: "Fantasy",
      grade: "3rd-4th",
    },
    {
      id: 3,
      title: "Diary of a Wimpy Kid",
      author: "Jeff Kinney",
      cover: "📔",
      level: "2-3",
      rating: 4.6,
      genre: "Comedy",
      grade: "2nd-3rd",
    },
    {
      id: 4,
      title: "The Baby-Sitters Club",
      author: "Ann M. Martin",
      cover: "👧",
      level: "3-4",
      rating: 4.5,
      genre: "Friendship",
      grade: "3rd-4th",
    },
    {
      id: 5,
      title: "Hatchet",
      author: "Gary Paulsen",
      cover: "🪓",
      level: "5-6",
      rating: 4.7,
      genre: "Adventure",
      grade: "5th-6th",
    },
    {
      id: 6,
      title: "Magic Tree House",
      author: "Mary Pope Osborne",
      cover: "🌳",
      level: "2-3",
      rating: 4.6,
      genre: "Adventure",
      grade: "2nd-3rd",
    },
  ];

  const genres = [
    "All",
    "Fantasy",
    "Adventure",
    "Comedy",
    "Friendship",
    "Mystery",
  ];
  const levels = ["All", "Beginner", "Intermediate", "Advanced"];
  const grades = ["All", "1st-2nd", "2nd-3rd", "3rd-4th", "4th-5th", "5th-6th"];

  const filteredBooks = books.filter((book) => {
    const matchesSearch =
      searchQuery === "" ||
      book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.author.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesGenre =
      selectedGenre === "All" || book.genre === selectedGenre;
    const matchesLevel =
      selectedLevel === "All" || book.level === selectedLevel;
    const matchesGrade =
      selectedGrade === "All" || book.grade === selectedGrade;

    return matchesSearch && matchesGenre && matchesLevel && matchesGrade;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-100 via-orange-50 to-pink-100 pb-20">
      {/* Header */}
      <div className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-2xl mx-auto px-6 py-4">
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 text-gray-700 hover:text-gray-900 transition-colors mb-4"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">Back</span>
          </button>

          {/* Search bar */}
          <div className="relative">
            <SearchIcon className="absolute left-4 top-3 w-5 h-5 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by title or author..."
              className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-200 transition-all"
            />
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-2xl mx-auto px-6 py-4 space-y-3">
          {/* Genre Filter */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Genre
            </label>
            <div className="flex overflow-x-auto gap-2 pb-2">
              {genres.map((genre) => (
                <button
                  key={genre}
                  onClick={() => setSelectedGenre(genre)}
                  className={`flex-shrink-0 px-4 py-2 rounded-full font-medium text-sm transition-all ${
                    selectedGenre === genre
                      ? "bg-gradient-to-r from-orange-400 to-pink-500 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {genre}
                </button>
              ))}
            </div>
          </div>

          {/* Level and Grade */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-2">
                Reading Level
              </label>
              <select
                value={selectedLevel}
                onChange={(e) => setSelectedLevel(e.target.value)}
                className="w-full px-3 py-2 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-orange-400 text-sm"
              >
                {levels.map((level) => (
                  <option key={level} value={level}>
                    {level}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-2">
                Grade
              </label>
              <select
                value={selectedGrade}
                onChange={(e) => setSelectedGrade(e.target.value)}
                className="w-full px-3 py-2 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-orange-400 text-sm"
              >
                {grades.map((grade) => (
                  <option key={grade} value={grade}>
                    {grade}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="max-w-2xl mx-auto px-6 py-6">
        <div className="mb-4">
          <p className="text-sm text-gray-600">
            Found <span className="font-semibold">{filteredBooks.length}</span>{" "}
            books
          </p>
        </div>

        <div className="space-y-3">
          {filteredBooks.map((book) => (
            <Link
              key={book.id}
              to={`/book/${book.id}`}
              className="bg-white rounded-2xl p-4 shadow-sm hover:shadow-md transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="text-5xl flex-shrink-0">{book.cover}</div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-gray-800">{book.title}</h4>
                  <p className="text-sm text-gray-600 mb-2">{book.author}</p>
                  <div className="flex flex-wrap gap-2 mb-2">
                    <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full">
                      {book.genre}
                    </span>
                    <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
                      Level {book.level}
                    </span>
                    <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
                      {book.grade}
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-semibold text-gray-700">
                      {book.rating}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {filteredBooks.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 mb-4">
              No books found matching your criteria
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedGenre("All");
                setSelectedLevel("All");
                setSelectedGrade("All");
              }}
              className="px-4 py-2 bg-orange-400 text-white rounded-lg hover:bg-orange-500 transition-colors"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
