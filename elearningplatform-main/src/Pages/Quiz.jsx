import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { contentService } from "../services";

const Quiz = () => {
  const { classNumber, subject } = useParams();
  const navigate = useNavigate();
  const [quiz, setQuiz] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    fetchQuiz();
  }, [classNumber, subject]);

  const fetchQuiz = async () => {
    setLoading(true);
    const result = await contentService.getQuiz(classNumber, subject);
    setLoading(false);

    if (result.success) {
      setQuiz(result.data);
    } else {
      setError(result.error);
    }
  };

  const handleAnswerSelect = (questionIndex, answer) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [questionIndex]: answer,
    });
  };

  const handleNext = () => {
    if (currentQuestion < quiz.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleSubmit = () => {
    let correctCount = 0;
    quiz.questions.forEach((question, index) => {
      if (selectedAnswers[index] === question.correct_option) {
        correctCount++;
      }
    });
    setScore(correctCount);
    setShowResults(true);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-2xl text-teal-600">Loading quiz...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col justify-center items-center h-screen">
        <div className="text-2xl text-red-600 mb-4">{error}</div>
        <button
          onClick={() => navigate("/")}
          className="px-6 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600"
        >
          Go Home
        </button>
      </div>
    );
  }

  if (!quiz) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-2xl text-gray-600">No quiz available</div>
      </div>
    );
  }

  if (showResults) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full text-center"
        >
          <h2 className="text-3xl font-bold text-teal-600 mb-4">Quiz Completed!</h2>
          <div className="text-6xl font-bold text-gray-800 mb-4">
            {score}/{quiz.questions.length}
          </div>
          <p className="text-xl text-gray-600 mb-6">
            You scored {((score / quiz.questions.length) * 100).toFixed(0)}%
          </p>
          <div className="space-y-3">
            <button
              onClick={() => {
                setShowResults(false);
                setCurrentQuestion(0);
                setSelectedAnswers({});
                setScore(0);
              }}
              className="w-full px-6 py-3 bg-teal-500 text-white rounded-lg hover:bg-teal-600"
            >
              Retake Quiz
            </button>
            <button
              onClick={() => navigate("/")}
              className="w-full px-6 py-3 bg-gray-500 text-white rounded-lg hover:bg-gray-600"
            >
              Go Home
            </button>
          </div>
        </motion.div>
      </div>
    );
  }

  const question = quiz.questions[currentQuestion];

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-lg shadow-lg p-6 mb-4"
        >
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-gray-800">{quiz.title}</h1>
            <span className="text-gray-600">
              Question {currentQuestion + 1} of {quiz.questions.length}
            </span>
          </div>

          <div className="mb-6">
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-teal-500 h-2 rounded-full transition-all"
                style={{
                  width: `${((currentQuestion + 1) / quiz.questions.length) * 100}%`,
                }}
              ></div>
            </div>
          </div>

          <h2 className="text-xl font-semibold text-gray-800 mb-6">
            {question.question_text}
          </h2>

          <div className="space-y-3">
            {["option_a", "option_b", "option_c", "option_d"].map((option, index) => {
              if (!question[option]) return null;
              const optionLetter = String.fromCharCode(97 + index); // a, b, c, d
              const isSelected = selectedAnswers[currentQuestion] === optionLetter;

              return (
                <motion.button
                  key={option}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleAnswerSelect(currentQuestion, optionLetter)}
                  className={`w-full p-4 text-left rounded-lg border-2 transition-all ${
                    isSelected
                      ? "border-teal-500 bg-teal-50"
                      : "border-gray-300 hover:border-teal-300"
                  }`}
                >
                  <span className="font-semibold">{optionLetter.toUpperCase()}.</span>{" "}
                  {question[option]}
                </motion.button>
              );
            })}
          </div>

          <div className="flex justify-between mt-8">
            <button
              onClick={handlePrevious}
              disabled={currentQuestion === 0}
              className="px-6 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 disabled:bg-gray-300 disabled:cursor-not-allowed"
            >
              Previous
            </button>

            {currentQuestion === quiz.questions.length - 1 ? (
              <button
                onClick={handleSubmit}
                className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
              >
                Submit Quiz
              </button>
            ) : (
              <button
                onClick={handleNext}
                className="px-6 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600"
              >
                Next
              </button>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Quiz;
