import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const quizData = [
  {
    question: "What is the capital of France?",
    options: ["Paris", "London", "Berlin", "Madrid"],
    answer: "Paris",
  },
  {
    question: "Which is the largest planet in our solar system?",
    options: ["Earth", "Jupiter", "Mars", "Venus"],
    answer: "Jupiter",
  },
  {
    question: "Who wrote 'To Kill a Mockingbird'?",
    options: [
      "Harper Lee",
      "J.K. Rowling",
      "Ernest Hemingway",
      "Mark Twain",
    ],
    answer: "Harper Lee",
  },
];

export default function QuizCard() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (option) => {
    setSelectedOption(option);
  };

  const handleNext = () => {
    if (selectedOption === quizData[currentQuestion].answer) {
      setScore(score + 1);
    }
    setSelectedOption(null);
    if (currentQuestion + 1 < quizData.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <motion.div
        className="w-full max-w-md"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="shadow-lg p-6 bg-white rounded-2xl border-[#44b5a8] border-2">
          <CardContent>
            {showResult ? (
              <motion.div 
                className="text-center text-[#44b5a8]"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-xl font-semibold">Quiz Completed!</h2>
                <p className="text-lg mt-2">Your Score: {score} / {quizData.length}</p>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-lg font-semibold mb-4 text-[#44b5a8]">
                  {quizData[currentQuestion].question}
                </h2>
                <div className="grid gap-2">
                  {quizData[currentQuestion].options.map((option, index) => (
                    <motion.button
                      key={index}
                      className={`px-4 py-2 rounded-lg border transition-all ${
                        selectedOption === option
                          ? "bg-[#44b5a8] text-white border-[#44b5a8]"
                          : "bg-gray-200 hover:bg-[#44b5a8] hover:text-white"
                      }`}
                      onClick={() => handleAnswer(option)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {option}
                    </motion.button>
                  ))}
                </div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <Button
                    className="mt-4 w-full bg-[#44b5a8] text-white hover:bg-[#369e94]"
                    onClick={handleNext}
                    disabled={!selectedOption}
                  >
                    {currentQuestion === quizData.length - 1 ? "Finish" : "Next"}
                  </Button>
                </motion.div>
              </motion.div>
            )}
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
