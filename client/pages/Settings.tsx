import { ArrowLeft, ChevronRight, Bell, Shield, LogOut, Plus, Trash2, Edit2 } from "lucide-react";
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
        {/* Parent Profile */}
        <div className="animate-slide-up">
          <h2 className="heading-md text-foreground mb-4">Parent Profile</h2>
          <div className="bg-card rounded-lg border border-border p-6 space-y-4">
            <div>
              <label className="text-sm text-gray-500 block mb-1">Name</label>
              <input
                type="text"
                value={parentProfile.name}
                className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
                readOnly
              />
            </div>
            <div>
              <label className="text-sm text-gray-500 block mb-1">Email</label>
              <input
                type="email"
                value={parentProfile.email}
                className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
                readOnly
              />
            </div>
            <div>
              <label className="text-sm text-gray-500 block mb-1">Phone</label>
              <input
                type="tel"
                value={parentProfile.phone}
                className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
                readOnly
              />
            </div>
            <button className="w-full mt-4 py-2 px-4 border border-primary text-primary rounded-lg hover:bg-primary hover:text-primary-foreground transition-all font-semibold flex items-center justify-center gap-2">
              <Edit2 className="w-4 h-4" />
              Edit Profile
            </button>
          </div>
        </div>

        {/* Children Management */}
        <div className="animate-slide-up">
          <div className="flex items-center justify-between mb-4">
            <h2 className="heading-md text-foreground">Children</h2>
            <button className="inline-flex items-center gap-1 px-3 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity text-sm font-semibold">
              <Plus className="w-4 h-4" />
              Add Child
            </button>
          </div>
          <div className="space-y-3">
            {children.map((child, idx) => (
              <div key={child.id} style={{ animationDelay: `${idx * 50}ms` }} className="bg-card rounded-lg border border-border p-4 card-hover animate-slide-up">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-foreground">{child.name}</h3>
                    <p className="text-sm text-gray-500">
                      Age {child.age} • Grade {child.grade}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                      <ChevronRight className="w-5 h-5 text-gray-400" />
                    </button>
                    <button
                      onClick={() => removeChild(child.id)}
                      className="p-2 hover:bg-red-50 rounded-lg transition-colors text-gray-400 hover:text-red-600"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Notifications */}
        <div className="animate-slide-up">
          <h2 className="heading-md text-foreground mb-4 flex items-center gap-2">
            <Bell className="w-6 h-6 text-primary" />
            Notifications
          </h2>
          <div className="bg-card rounded-lg border border-border divide-y divide-border">
            <div className="p-4 flex items-center justify-between">
              <div>
                <p className="font-semibold text-foreground">New Book Recommendations</p>
                <p className="text-sm text-gray-500">Get notified about new book matches</p>
              </div>
              <button
                onClick={() => toggleNotification("newBooks")}
                className={`w-12 h-6 rounded-full transition-all ${
                  notifications.newBooks ? "bg-primary" : "bg-gray-300"
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
                <p className="font-semibold text-foreground">Achievements Unlocked</p>
                <p className="text-sm text-gray-500">Get notified when your child unlocks badges</p>
              </div>
              <button
                onClick={() => toggleNotification("achievements")}
                className={`w-12 h-6 rounded-full transition-all ${
                  notifications.achievements ? "bg-primary" : "bg-gray-300"
                }`}
              >
                <div
                  className={`w-5 h-5 bg-white rounded-full transition-transform ${
                    notifications.achievements ? "translate-x-6" : "translate-x-0.5"
                  }`}
                />
              </button>
            </div>

            <div className="p-4 flex items-center justify-between">
              <div>
                <p className="font-semibold text-foreground">Reading Reminders</p>
                <p className="text-sm text-gray-500">Daily reading encouragement</p>
              </div>
              <button
                onClick={() => toggleNotification("readingReminders")}
                className={`w-12 h-6 rounded-full transition-all ${
                  notifications.readingReminders ? "bg-primary" : "bg-gray-300"
                }`}
              >
                <div
                  className={`w-5 h-5 bg-white rounded-full transition-transform ${
                    notifications.readingReminders ? "translate-x-6" : "translate-x-0.5"
                  }`}
                />
              </button>
            </div>

            <div className="p-4 flex items-center justify-between">
              <div>
                <p className="font-semibold text-foreground">Weekly Reports</p>
                <p className="text-sm text-gray-500">Summary of reading progress every Sunday</p>
              </div>
              <button
                onClick={() => toggleNotification("weeklyReport")}
                className={`w-12 h-6 rounded-full transition-all ${
                  notifications.weeklyReport ? "bg-primary" : "bg-gray-300"
                }`}
              >
                <div
                  className={`w-5 h-5 bg-white rounded-full transition-transform ${
                    notifications.weeklyReport ? "translate-x-6" : "translate-x-0.5"
                  }`}
                />
              </button>
            </div>
          </div>
        </div>

        {/* Privacy & Security */}
        <div className="animate-slide-up">
          <h2 className="heading-md text-foreground mb-4 flex items-center gap-2">
            <Shield className="w-6 h-6 text-primary" />
            Privacy & Security
          </h2>
          <div className="bg-card rounded-lg border border-border divide-y divide-border">
            <button className="w-full px-4 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors">
              <span className="font-semibold text-foreground">Privacy Policy</span>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </button>
            <button className="w-full px-4 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors">
              <span className="font-semibold text-foreground">Terms of Service</span>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </button>
            <button className="w-full px-4 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors">
              <span className="font-semibold text-foreground">Change Password</span>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </button>
          </div>
        </div>

        {/* Sign Out */}
        <button className="w-full py-4 px-6 flex items-center justify-center gap-2 bg-red-50 text-red-600 font-semibold rounded-lg hover:bg-red-100 transition-all border border-red-200 animate-slide-up">
          <LogOut className="w-5 h-5" />
          Sign Out
        </button>
      </div>
    </div>
  );
}
