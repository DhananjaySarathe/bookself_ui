import {
  ArrowLeft,
  BookOpen,
  BarChart3,
  TrendingUp,
  Award,
  Lock,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

interface Achievement {
  id: number;
  name: string;
  description: string;
  icon: string;
  unlockedDate: string | null;
  unlocked: boolean;
}

export default function Progress() {
  const navigate = useNavigate();

  const stats = {
    booksRead: 12,
    pagesRead: 2847,
    currentLevel: 4.2,
    monthlyBooks: 3,
    streak: 15,
  };

  const achievements: Achievement[] = [
    {
      id: 1,
      name: "First Steps",
      description: "Read your first book",
      icon: "📕",
      unlockedDate: "Jan 5, 2024",
      unlocked: true,
    },
    {
      id: 2,
      name: "Page Turner",
      description: "Read 500 pages",
      icon: "📖",
      unlockedDate: "Feb 15, 2024",
      unlocked: true,
    },
    {
      id: 3,
      name: "Bookworm",
      description: "Read 10 books",
      icon: "📚",
      unlockedDate: "Mar 1, 2024",
      unlocked: true,
    },
    {
      id: 4,
      name: "Adventure Seeker",
      description: "Read 5 adventure books",
      icon: "🗺️",
      unlockedDate: "Feb 28, 2024",
      unlocked: true,
    },
    {
      id: 5,
      name: "Fantasy Fan",
      description: "Read 5 fantasy books",
      icon: "✨",
      unlockedDate: "Mar 10, 2024",
      unlocked: true,
    },
    {
      id: 6,
      name: "Reading Champion",
      description: "Read 20 books",
      icon: "🏆",
      unlockedDate: null,
      unlocked: false,
    },
    {
      id: 7,
      name: "Level Master",
      description: "Reach reading level 5.0",
      icon: "⭐",
      unlockedDate: null,
      unlocked: false,
    },
    {
      id: 8,
      name: "Dedication Medal",
      description: "Read for 30 days straight",
      icon: "🎖️",
      unlockedDate: null,
      unlocked: false,
    },
  ];

  const monthlyData = [
    { month: "Jan", books: 2 },
    { month: "Feb", books: 4 },
    { month: "Mar", books: 3 },
    { month: "Apr", books: 3 },
  ];

  const maxBooks = Math.max(...monthlyData.map((d) => d.books));

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <div className="bg-white border-b border-border sticky top-0 z-50 shadow-sm">
        <div className="max-w-2xl mx-auto px-6 py-4">
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 text-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">Back</span>
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-2xl mx-auto px-6 py-8 space-y-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-4 animate-slide-up">
          <div className="bg-card rounded-lg p-4 border border-border card-hover-subtle">
            <BookOpen className="w-6 h-6 text-primary mb-2" />
            <p className="text-xs text-gray-500 mb-1">Books Read</p>
            <p className="text-3xl font-bold text-foreground">
              {stats.booksRead}
            </p>
          </div>
          <div className="bg-card rounded-lg p-4 border border-border card-hover-subtle">
            <BarChart3 className="w-6 h-6 text-secondary mb-2" />
            <p className="text-xs text-gray-500 mb-1">Total Pages</p>
            <p className="text-3xl font-bold text-foreground">
              {stats.pagesRead}
            </p>
          </div>
          <div className="bg-card rounded-lg p-4 border border-border card-hover-subtle">
            <TrendingUp className="w-6 h-6 text-accent mb-2" />
            <p className="text-xs text-gray-500 mb-1">Reading Level</p>
            <p className="text-3xl font-bold text-foreground">
              {stats.currentLevel}
            </p>
          </div>
          <div className="bg-card rounded-lg p-4 border border-border card-hover-subtle">
            <Award className="w-6 h-6 text-primary mb-2" />
            <p className="text-xs text-gray-500 mb-1">Day Streak</p>
            <p className="text-3xl font-bold text-foreground">{stats.streak}</p>
          </div>
        </div>

        {/* Monthly Chart */}
        <div className="bg-card rounded-lg p-6 border border-border animate-slide-up">
          <h2 className="heading-md text-foreground mb-6">
            Books Read This Year
          </h2>
          <div className="flex items-end justify-between h-48 gap-2">
            {monthlyData.map((data) => (
              <div
                key={data.month}
                className="flex-1 flex flex-col items-center gap-2"
              >
                <div className="w-full flex items-end justify-center">
                  <div
                    className="w-full bg-gradient-to-t from-primary to-secondary rounded-t-lg transition-all duration-500 hover:opacity-80"
                    style={{
                      height: `${(data.books / maxBooks) * 100}%`,
                      minHeight: "20px",
                    }}
                  />
                </div>
                <p className="text-sm font-semibold text-foreground">
                  {data.month}
                </p>
                <p className="text-xs text-gray-500">{data.books} books</p>
              </div>
            ))}
          </div>
        </div>

        {/* Reading Level Progress */}
        <div className="bg-card rounded-lg p-6 border border-border animate-slide-up">
          <h2 className="heading-md text-foreground mb-4">
            Reading Level Progress
          </h2>
          <div className="space-y-4">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-semibold text-foreground">
                  Current: 4.2
                </span>
                <span className="text-sm text-gray-500">Target: 5.0</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div
                  className="bg-gradient-to-r from-primary to-secondary h-3 rounded-full transition-all duration-500"
                  style={{ width: "84%" }}
                />
              </div>
            </div>
            <p className="text-xs text-gray-600">
              Keep reading to level up! Complete 2 more advanced books.
            </p>
          </div>
        </div>

        {/* Achievements */}
        <div className="animate-slide-up">
          <h2 className="heading-md text-foreground mb-4">Achievements</h2>
          <div className="space-y-3">
            {achievements.map((achievement, idx) => (
              <div
                key={achievement.id}
                style={{ animationDelay: `${idx * 50}ms` }}
                className={`rounded-lg p-4 border transition-all animate-slide-up ${
                  achievement.unlocked
                    ? "bg-card border-border card-hover"
                    : "bg-gray-50 border-gray-200 opacity-60"
                }`}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`text-3xl flex-shrink-0 ${achievement.unlocked ? "" : "grayscale opacity-40"}`}
                  >
                    {achievement.icon}
                  </div>
                  <div className="flex-1">
                    <h3
                      className={`font-semibold ${achievement.unlocked ? "text-foreground" : "text-gray-600"}`}
                    >
                      {achievement.name}
                    </h3>
                    <p
                      className={`text-sm mb-2 ${achievement.unlocked ? "text-gray-500" : "text-gray-500"}`}
                    >
                      {achievement.description}
                    </p>
                    {achievement.unlocked && achievement.unlockedDate && (
                      <p className="text-xs text-primary font-semibold">
                        ✓ Unlocked {achievement.unlockedDate}
                      </p>
                    )}
                    {!achievement.unlocked && (
                      <p className="text-xs text-gray-500 flex items-center gap-1">
                        <Lock className="w-3 h-3" />
                        Locked - Keep reading to unlock!
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
