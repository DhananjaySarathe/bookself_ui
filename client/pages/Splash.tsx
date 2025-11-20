import { Link } from "react-router-dom";
import { BookOpen, Sparkles } from "lucide-react";

export default function Splash() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-amber-100 via-orange-50 to-pink-100 px-6">
      {/* Animated background decoration */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-bounce-gentle" />
      <div className="absolute bottom-20 left-10 w-40 h-40 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-bounce-gentle" style={{ animationDelay: "0.2s" }} />

      {/* Content */}
      <div className="relative z-10 text-center max-w-md animate-slide-up">
        {/* Logo/Icon */}
        <div className="mb-6 flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-purple-400 rounded-3xl blur-lg opacity-50" />
            <div className="relative bg-gradient-to-br from-orange-400 to-pink-500 p-5 rounded-3xl text-white">
              <BookOpen className="w-12 h-12" />
            </div>
          </div>
        </div>

        {/* Main heading */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Bookworm
        </h1>

        {/* Subtitle */}
        <p className="text-lg text-gray-600 mb-8">
          Help your children discover amazing books and develop a love for reading
        </p>

        {/* Feature highlights */}
        <div className="space-y-3 mb-10">
          <div className="flex items-center justify-center gap-2 text-gray-700">
            <Sparkles className="w-5 h-5 text-purple-500" />
            <span className="text-sm font-medium">Personalized recommendations</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-gray-700">
            <Sparkles className="w-5 h-5 text-pink-500" />
            <span className="text-sm font-medium">Track reading progress</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-gray-700">
            <Sparkles className="w-5 h-5 text-blue-500" />
            <span className="text-sm font-medium">Unlock achievements</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="space-y-3">
          <Link
            to="/signup"
            className="block w-full py-3 px-6 bg-gradient-to-r from-orange-400 to-pink-500 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95"
          >
            Get Started
          </Link>
          <Link
            to="/login"
            className="block w-full py-3 px-6 bg-white text-gray-800 font-semibold rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 border-2 border-gray-200"
          >
            Sign In
          </Link>
        </div>

        {/* Additional info */}
        <p className="text-xs text-gray-500 mt-8">
          Join thousands of parents helping their kids love reading
        </p>
      </div>
    </div>
  );
}
