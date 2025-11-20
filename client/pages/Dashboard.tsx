import { Menu, ChevronRight, Star, BookOpen, TrendingUp, Award, Play } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

interface Book {
  id: number;
  title: string;
  author: string;
  icon: string;
  progress: number;
}

interface RecommendedBook {
  id: number;
  title: string;
  author: string;
  icon: string;
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
      icon: "📖",
      progress: 65,
    },
    {
      id: 2,
      title: "Charlotte's Web",
      author: "E.B. White",
      icon: "📚",
      progress: 42,
    },
  ];

  const recommended: RecommendedBook[] = [
    {
      id: 1,
      title: "Percy Jackson",
      author: "Rick Riordan",
      icon: "🎯",
      level: "4-5",
      rating: 4.8,
    },
    {
      id: 2,
      title: "Wings of Fire",
      author: "Tui T. Sutherland",
      icon: "🌟",
      level: "3-4",
      rating: 4.7,
    },
    {
      id: 3,
      title: "Diary of a Wimpy Kid",
      author: "Jeff Kinney",
      icon: "📖",
      level: "2-3",
      rating: 4.6,
    },
  ];

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <div className="bg-white border-b border-border sticky top-0 z-50 shadow-sm">
        <div className="max-w-2xl mx-auto px-6 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-foreground">Bookworm</h1>
            <p className="text-xs text-gray-500">Welcome back, parent</p>
          </div>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors btn-icon"
          >
            <Menu className="w-6 h-6 text-foreground" />
          </button>
        </div>
        {menuOpen && (
          <div className="px-6 pb-4 space-y-1 border-t border-border">
            <Link
              to="/search"
              className="flex items-center gap-2 px-4 py-2 text-foreground hover:bg-gray-50 rounded-lg transition-colors"
            >
              <BookOpen className="w-4 h-4" />
              Search Books
            </Link>
            <Link
              to="/library"
              className="flex items-center gap-2 px-4 py-2 text-foreground hover:bg-gray-50 rounded-lg transition-colors"
            >
              <BookOpen className="w-4 h-4" />
              My Library
            </Link>
            <Link
              to="/progress"
              className="flex items-center gap-2 px-4 py-2 text-foreground hover:bg-gray-50 rounded-lg transition-colors"
            >
              <TrendingUp className="w-4 h-4" />
              Progress
            </Link>
            <Link
              to="/settings"
              className="flex items-center gap-2 px-4 py-2 text-foreground hover:bg-gray-50 rounded-lg transition-colors"
            >
              <Menu className="w-4 h-4" />
              Settings
            </Link>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="max-w-2xl mx-auto px-6 py-8 space-y-8">
        {/* Child Selector */}
        <div className="animate-slide-up">
          <h2 className="heading-md text-foreground mb-4">Select Child</h2>
          <div className="flex gap-3 overflow-x-auto pb-2">
            {children.map((child, idx) => (
              <button
                key={child.id}
                onClick={() => setSelectedChild(child.name)}
                style={{ animationDelay: `${idx * 100}ms` }}
                className={`flex-shrink-0 px-4 py-3 rounded-lg font-semibold transition-all ${
                  selectedChild === child.name
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "bg-card text-foreground border border-border hover:border-primary"
                }`}
              >
                <div className="text-sm">{child.name}</div>
                <div className="text-xs opacity-70">Age {child.age}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-4 animate-slide-up">
          <div className="bg-card rounded-lg p-4 border border-border card-hover-subtle">
            <BookOpen className="w-6 h-6 text-primary mb-2" />
            <div className="text-xs text-gray-500 mb-1">Books Read</div>
            <div className="text-2xl font-bold text-foreground">12</div>
          </div>
          <div className="bg-card rounded-lg p-4 border border-border card-hover-subtle">
            <TrendingUp className="w-6 h-6 text-secondary mb-2" />
            <div className="text-xs text-gray-500 mb-1">Reading Level</div>
            <div className="text-2xl font-bold text-foreground">4.2</div>
          </div>
          <div className="bg-card rounded-lg p-4 border border-border card-hover-subtle">
            <Award className="w-6 h-6 text-accent mb-2" />
            <div className="text-xs text-gray-500 mb-1">Achievements</div>
            <div className="text-2xl font-bold text-foreground">7</div>
          </div>
        </div>

        {/* Continue Reading */}
        <div className="animate-slide-up">
          <div className="flex items-center justify-between mb-4">
            <h3 className="heading-md text-foreground">Continue Reading</h3>
            <Link to="/library" className="text-primary hover:text-primary/80 text-sm font-semibold transition-colors">
              View All →
            </Link>
          </div>
          <div className="space-y-3">
            {continueReading.map((book, idx) => (
              <div key={book.id} style={{ animationDelay: `${idx * 100}ms` }} className="bg-card rounded-lg p-4 border border-border card-hover animate-slide-up">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg flex items-center justify-center text-2xl flex-shrink-0">
                    {book.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-foreground text-sm">{book.title}</h4>
                    <p className="text-xs text-gray-500 mb-2">{book.author}</p>
                    <div className="space-y-1">
                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <span>Progress</span>
                        <span className="font-semibold">{book.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full transition-all duration-500"
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
        <div className="animate-slide-up">
          <div className="flex items-center justify-between mb-4">
            <h3 className="heading-md text-foreground">Recommended for {selectedChild}</h3>
            <Link to="/search" className="text-primary hover:text-primary/80 text-sm font-semibold transition-colors">
              Browse All →
            </Link>
          </div>
          <div className="space-y-3">
            {recommended.map((book, idx) => (
              <Link
                key={book.id}
                to={`/book/${book.id}`}
                style={{ animationDelay: `${idx * 100}ms` }}
                className="bg-card rounded-lg p-4 border border-border card-hover animate-slide-up"
              >
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-accent/10 to-primary/10 rounded-lg flex items-center justify-center text-2xl flex-shrink-0">
                    {book.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-foreground text-sm">{book.title}</h4>
                    <p className="text-xs text-gray-500 mb-3">{book.author}</p>
                    <div className="flex items-center justify-between">
                      <span className="badge-primary">Level {book.level}</span>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-accent text-accent" />
                        <span className="text-xs font-semibold text-foreground">{book.rating}</span>
                      </div>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-300 flex-shrink-0" />
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* CTA */}
        <Link
          to="/search"
          className="flex items-center justify-center gap-2 w-full py-4 px-6 bg-primary text-primary-foreground font-semibold rounded-lg text-center shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02] active:scale-95 animate-slide-up"
        >
          <Play className="w-5 h-5" />
          Discover More Books
        </Link>
      </div>
    </div>
  );
}
