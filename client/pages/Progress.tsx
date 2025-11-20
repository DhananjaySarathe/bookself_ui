import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface Achievement {
  id: number;
  name: string;
  description: string;
  icon: string;
  unlockedDate: string;
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

      {/* Content */}
      <div className="max-w-2xl mx-auto px-6 py-8 space-y-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-white rounded-2xl p-4 shadow-sm">
            <div className="text-3xl mb-2">📚</div>
            <p className="text-xs text-gray-600 mb-1">Books Read</p>
            <p className="text-2xl font-bold text-gray-800">{stats.booksRead}</p>
          </div>
          <div className="bg-white rounded-2xl p-4 shadow-sm">
            <div className="text-3xl mb-2">📄</div>
            <p className="text-xs text-gray-600 mb-1">Total Pages</p>
            <p className="text-2xl font-bold text-gray-800">{stats.pagesRead}</p>
          </div>
          <div className="bg-white rounded-2xl p-4 shadow-sm">
            <div className="text-3xl mb-2">⭐</div>
            <p className="text-xs text-gray-600 mb-1">Current Level</p>
            <p className="text-2xl font-bold text-gray-800">{stats.currentLevel}</p>
          </div>
          <div className="bg-white rounded-2xl p-4 shadow-sm">
            <div className="text-3xl mb-2">🔥</div>
            <p className="text-xs text-gray-600 mb-1">Reading Streak</p>
            <p className="text-2xl font-bold text-gray-800">{stats.streak} days</p>
          </div>
        </div>

        {/* Monthly Chart */}
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <h2 className="text-lg font-bold text-gray-800 mb-6">Books Read This Year</h2>
          <div className="flex items-end justify-between h-48 gap-2">
            {monthlyData.map((data) => (
              <div key={data.month} className="flex-1 flex flex-col items-center gap-2">
                <div className="w-full flex items-end justify-center">
                  <div
                    className="w-full bg-gradient-to-t from-orange-400 to-pink-500 rounded-t-lg transition-all"
                    style={{
                      height: `${(data.books / maxBooks) * 100}%`,
                      minHeight: "20px",
                    }}
                  />
                </div>
                <p className="text-sm font-semibold text-gray-800">{data.month}</p>
                <p className="text-xs text-gray-600">{data.books} books</p>
              </div>
            ))}
          </div>
        </div>

        {/* Reading Level Progress */}
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <h2 className="text-lg font-bold text-gray-800 mb-4">Reading Level Progress</h2>
          <div className="space-y-4">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-semibold text-gray-700">Current: 4.2</span>
                <span className="text-sm text-gray-600">Target: 5.0</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-4">
                <div className="bg-gradient-to-r from-orange-400 to-pink-500 h-4 rounded-full" style={{ width: "84%" }} />
              </div>
            </div>
            <p className="text-xs text-gray-600">Keep reading to level up! Complete 2 more advanced books.</p>
          </div>
        </div>

        {/* Achievements */}
        <div>
          <h2 className="text-lg font-bold text-gray-800 mb-4">Achievements</h2>
          <div className="space-y-3">
            {achievements.map((achievement) => (
              <div
                key={achievement.id}
                className={`rounded-2xl p-4 shadow-sm transition-all ${
                  achievement.unlocked ? "bg-white" : "bg-gray-100 opacity-60"
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className={`text-4xl ${achievement.unlocked ? "" : "opacity-40"}`}>
                    {achievement.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className={`font-semibold ${achievement.unlocked ? "text-gray-800" : "text-gray-600"}`}>
                      {achievement.name}
                    </h3>
                    <p className={`text-sm mb-2 ${achievement.unlocked ? "text-gray-600" : "text-gray-500"}`}>
                      {achievement.description}
                    </p>
                    {achievement.unlocked && achievement.unlockedDate && (
                      <p className="text-xs text-green-600 font-semibold">✓ Unlocked {achievement.unlockedDate}</p>
                    )}
                    {!achievement.unlocked && (
                      <p className="text-xs text-gray-500">Locked - Keep reading to unlock!</p>
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
