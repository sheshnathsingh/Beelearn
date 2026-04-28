import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { adminService } from "../services";

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [admin, setAdmin] = useState(null);
  const [activeTab, setActiveTab] = useState("videos");
  const [videos, setVideos] = useState([]);
  const [quizzes, setQuizzes] = useState([]);
  const [tests, setTests] = useState([]);
  const [loading, setLoading] = useState(true);

  // Form states
  const [videoForm, setVideoForm] = useState({ title: "", description: "", video_url: "" });
  const [quizForm, setQuizForm] = useState({ title: "", description: "", total_marks: "" });

  useEffect(() => {
    const currentAdmin = adminService.getCurrentAdmin();
    if (!currentAdmin) {
      navigate("/admin/login");
      return;
    }
    setAdmin(currentAdmin);
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    const [videosResult, quizzesResult, testsResult] = await Promise.all([
      adminService.getAllVideos(),
      adminService.getAllQuizzes(),
      adminService.getAllTests(),
    ]);

    if (videosResult.success) setVideos(videosResult.data);
    if (quizzesResult.success) setQuizzes(quizzesResult.data);
    if (testsResult.success) setTests(testsResult.data);
    setLoading(false);
  };

  const handleLogout = async () => {
    await adminService.logout();
    navigate("/admin/login");
  };

  const handleCreateVideo = async (e) => {
    e.preventDefault();
    const result = await adminService.createVideo(videoForm);
    if (result.success) {
      alert("Video created successfully!");
      setVideoForm({ title: "", description: "", video_url: "" });
      fetchData();
    } else {
      alert(result.error);
    }
  };

  const handleDeleteVideo = async (id) => {
    if (window.confirm("Are you sure you want to delete this video?")) {
      const result = await adminService.deleteVideo(id);
      if (result.success) {
        alert("Video deleted successfully!");
        fetchData();
      } else {
        alert(result.error);
      }
    }
  };

  const handleCreateQuiz = async (e) => {
    e.preventDefault();
    const result = await adminService.createQuiz(quizForm);
    if (result.success) {
      alert("Quiz created successfully!");
      setQuizForm({ title: "", description: "", total_marks: "" });
      fetchData();
    } else {
      alert(result.error);
    }
  };

  const handleDeleteQuiz = async (id) => {
    if (window.confirm("Are you sure you want to delete this quiz?")) {
      const result = await adminService.deleteQuiz(id);
      if (result.success) {
        alert("Quiz deleted successfully!");
        fetchData();
      } else {
        alert(result.error);
      }
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-2xl text-teal-600">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <div className="bg-teal-600 text-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Admin Dashboard</h1>
          <div className="flex items-center gap-4">
            <span>Welcome, {admin?.username}</span>
            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
            >
              Logout
            </button>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex gap-4">
            {["videos", "quizzes", "tests"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 font-semibold capitalize ${
                  activeTab === tab
                    ? "border-b-4 border-teal-600 text-teal-600"
                    : "text-gray-600 hover:text-teal-600"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Videos Tab */}
        {activeTab === "videos" && (
          <div>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-lg shadow-lg p-6 mb-8"
            >
              <h2 className="text-xl font-bold mb-4">Create New Video</h2>
              <form onSubmit={handleCreateVideo} className="space-y-4">
                <input
                  type="text"
                  placeholder="Video Title"
                  value={videoForm.title}
                  onChange={(e) => setVideoForm({ ...videoForm, title: e.target.value })}
                  className="w-full px-4 py-2 border rounded-lg"
                  required
                />
                <textarea
                  placeholder="Description"
                  value={videoForm.description}
                  onChange={(e) => setVideoForm({ ...videoForm, description: e.target.value })}
                  className="w-full px-4 py-2 border rounded-lg"
                  rows="3"
                  required
                />
                <input
                  type="url"
                  placeholder="Video URL"
                  value={videoForm.video_url}
                  onChange={(e) => setVideoForm({ ...videoForm, video_url: e.target.value })}
                  className="w-full px-4 py-2 border rounded-lg"
                  required
                />
                <button
                  type="submit"
                  className="px-6 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700"
                >
                  Create Video
                </button>
              </form>
            </motion.div>

            <h2 className="text-xl font-bold mb-4">All Videos ({videos.length})</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {videos.map((video) => (
                <div key={video.id} className="bg-white rounded-lg shadow-lg p-4">
                  <h3 className="text-lg font-bold mb-2">{video.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{video.description}</p>
                  <div className="flex gap-2">
                    <a
                      href={video.video_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 text-sm"
                    >
                      View
                    </a>
                    <button
                      onClick={() => handleDeleteVideo(video.id)}
                      className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 text-sm"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Quizzes Tab */}
        {activeTab === "quizzes" && (
          <div>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-lg shadow-lg p-6 mb-8"
            >
              <h2 className="text-xl font-bold mb-4">Create New Quiz</h2>
              <form onSubmit={handleCreateQuiz} className="space-y-4">
                <input
                  type="text"
                  placeholder="Quiz Title"
                  value={quizForm.title}
                  onChange={(e) => setQuizForm({ ...quizForm, title: e.target.value })}
                  className="w-full px-4 py-2 border rounded-lg"
                  required
                />
                <textarea
                  placeholder="Description"
                  value={quizForm.description}
                  onChange={(e) => setQuizForm({ ...quizForm, description: e.target.value })}
                  className="w-full px-4 py-2 border rounded-lg"
                  rows="3"
                  required
                />
                <input
                  type="number"
                  placeholder="Total Marks"
                  value={quizForm.total_marks}
                  onChange={(e) => setQuizForm({ ...quizForm, total_marks: e.target.value })}
                  className="w-full px-4 py-2 border rounded-lg"
                  required
                />
                <button
                  type="submit"
                  className="px-6 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700"
                >
                  Create Quiz
                </button>
              </form>
            </motion.div>

            <h2 className="text-xl font-bold mb-4">All Quizzes ({quizzes.length})</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {quizzes.map((quiz) => (
                <div key={quiz.id} className="bg-white rounded-lg shadow-lg p-4">
                  <h3 className="text-lg font-bold mb-2">{quiz.title}</h3>
                  <p className="text-gray-600 text-sm mb-2">{quiz.description}</p>
                  <p className="text-sm mb-4">Total Marks: {quiz.total_marks}</p>
                  <button
                    onClick={() => handleDeleteQuiz(quiz.id)}
                    className="w-full px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 text-sm"
                  >
                    Delete
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tests Tab */}
        {activeTab === "tests" && (
          <div>
            <h2 className="text-xl font-bold mb-4">All Tests ({tests.length})</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {tests.map((test) => (
                <div key={test.id} className="bg-white rounded-lg shadow-lg p-4">
                  <h3 className="text-lg font-bold mb-2">{test.title}</h3>
                  <p className="text-gray-600 text-sm mb-2">{test.description}</p>
                  <p className="text-sm">Max Marks: {test.max_marks}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
