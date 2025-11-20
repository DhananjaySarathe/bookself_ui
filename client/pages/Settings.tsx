import {
  ArrowLeft,
  ChevronRight,
  Bell,
  Shield,
  LogOut,
  Plus,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

interface Child {
  id: number;
  name: string;
  age: number;
  grade: string;
}

export default function Settings() {
  const navigate = useNavigate();
  const [notifications, setNotifications] = useState({
    newBooks: true,
    achievements: true,
    readingReminders: true,
    weeklyReport: true,
  });

  const [parentProfile] = useState({
    name: "Sarah Johnson",
    email: "sarah@example.com",
    phone: "+1 (555) 123-4567",
  });

  const [children, setChildren] = useState<Child[]>([
    { id: 1, name: "Emma", age: 8, grade: "3rd" },
    { id: 2, name: "Liam", age: 6, grade: "1st" },
  ]);

  const toggleNotification = (key: keyof typeof notifications) => {
    setNotifications((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const removeChild = (id: number) => {
    setChildren((prev) => prev.filter((c) => c.id !== id));
  };

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
        {/* Parent Profile */}
        <div>
          <h2 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
            <span className="text-2xl">👤</span> Parent Profile
          </h2>
          <div className="bg-white rounded-2xl shadow-sm p-6 space-y-4">
            <div>
              <label className="text-sm text-gray-600">Name</label>
              <input
                type="text"
                value={parentProfile.name}
                className="w-full mt-1 px-4 py-2 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-orange-400"
                readOnly
              />
            </div>
            <div>
              <label className="text-sm text-gray-600">Email</label>
              <input
                type="email"
                value={parentProfile.email}
                className="w-full mt-1 px-4 py-2 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-orange-400"
                readOnly
              />
            </div>
            <div>
              <label className="text-sm text-gray-600">Phone</label>
              <input
                type="tel"
                value={parentProfile.phone}
                className="w-full mt-1 px-4 py-2 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-orange-400"
                readOnly
              />
            </div>
            <button className="w-full mt-4 py-2 px-4 border-2 border-gray-200 rounded-lg text-gray-700 font-semibold hover:bg-gray-50 transition-colors">
              Edit Profile
            </button>
          </div>
        </div>

        {/* Children Management */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold text-gray-800 flex items-center gap-2">
              <span className="text-2xl">👶</span> Children
            </h2>
            <button className="inline-flex items-center gap-1 px-3 py-2 bg-orange-400 text-white rounded-lg hover:bg-orange-500 transition-colors text-sm font-semibold">
              <Plus className="w-4 h-4" />
              Add Child
            </button>
          </div>
          <div className="space-y-3">
            {children.map((child) => (
              <div
                key={child.id}
                className="bg-white rounded-2xl shadow-sm p-4"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-gray-800">
                      {child.name}
                    </h3>
                    <p className="text-sm text-gray-600">
                      Age {child.age} • Grade {child.grade}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                      <ChevronRight className="w-5 h-5 text-gray-400" />
                    </button>
                    <button
                      onClick={() => removeChild(child.id)}
                      className="p-2 hover:bg-red-100 rounded-lg transition-colors text-gray-400 hover:text-red-600"
                    >
                      ✕
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Notifications */}
        <div>
          <h2 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
            <Bell className="w-6 h-6" /> Notifications
          </h2>
          <div className="bg-white rounded-2xl shadow-sm divide-y divide-gray-200">
            <div className="p-4 flex items-center justify-between">
              <div>
                <p className="font-semibold text-gray-800">
                  New Book Recommendations
                </p>
                <p className="text-sm text-gray-600">
                  Get notified about new book matches
                </p>
              </div>
              <button
                onClick={() => toggleNotification("newBooks")}
                className={`w-12 h-6 rounded-full transition-all ${
                  notifications.newBooks ? "bg-orange-400" : "bg-gray-300"
                }`}
              >
                <div
                  className={`w-5 h-5 bg-white rounded-full transition-transform ${
                    notifications.newBooks ? "translate-x-6" : "translate-x-0.5"
                  }`}
                />
              </button>
            </div>

            <div className="p-4 flex items-center justify-between">
              <div>
                <p className="font-semibold text-gray-800">
                  Achievements Unlocked
                </p>
                <p className="text-sm text-gray-600">
                  Get notified when your child unlocks badges
                </p>
              </div>
              <button
                onClick={() => toggleNotification("achievements")}
                className={`w-12 h-6 rounded-full transition-all ${
                  notifications.achievements ? "bg-orange-400" : "bg-gray-300"
                }`}
              >
                <div
                  className={`w-5 h-5 bg-white rounded-full transition-transform ${
                    notifications.achievements
                      ? "translate-x-6"
                      : "translate-x-0.5"
                  }`}
                />
              </button>
            </div>

            <div className="p-4 flex items-center justify-between">
              <div>
                <p className="font-semibold text-gray-800">Reading Reminders</p>
                <p className="text-sm text-gray-600">
                  Daily reading encouragement
                </p>
              </div>
              <button
                onClick={() => toggleNotification("readingReminders")}
                className={`w-12 h-6 rounded-full transition-all ${
                  notifications.readingReminders
                    ? "bg-orange-400"
                    : "bg-gray-300"
                }`}
              >
                <div
                  className={`w-5 h-5 bg-white rounded-full transition-transform ${
                    notifications.readingReminders
                      ? "translate-x-6"
                      : "translate-x-0.5"
                  }`}
                />
              </button>
            </div>

            <div className="p-4 flex items-center justify-between">
              <div>
                <p className="font-semibold text-gray-800">Weekly Reports</p>
                <p className="text-sm text-gray-600">
                  Summary of reading progress every Sunday
                </p>
              </div>
              <button
                onClick={() => toggleNotification("weeklyReport")}
                className={`w-12 h-6 rounded-full transition-all ${
                  notifications.weeklyReport ? "bg-orange-400" : "bg-gray-300"
                }`}
              >
                <div
                  className={`w-5 h-5 bg-white rounded-full transition-transform ${
                    notifications.weeklyReport
                      ? "translate-x-6"
                      : "translate-x-0.5"
                  }`}
                />
              </button>
            </div>
          </div>
        </div>

        {/* Privacy & Security */}
        <div>
          <h2 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
            <Shield className="w-6 h-6" /> Privacy & Security
          </h2>
          <div className="bg-white rounded-2xl shadow-sm divide-y divide-gray-200">
            <button className="w-full px-4 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors">
              <span className="font-semibold text-gray-800">
                Privacy Policy
              </span>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </button>
            <button className="w-full px-4 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors">
              <span className="font-semibold text-gray-800">
                Terms of Service
              </span>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </button>
            <button className="w-full px-4 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors">
              <span className="font-semibold text-gray-800">
                Change Password
              </span>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </button>
          </div>
        </div>

        {/* Sign Out */}
        <button className="w-full py-4 px-6 flex items-center justify-center gap-2 bg-red-50 text-red-600 font-semibold rounded-2xl hover:bg-red-100 transition-colors">
          <LogOut className="w-5 h-5" />
          Sign Out
        </button>
      </div>
    </div>
  );
}
