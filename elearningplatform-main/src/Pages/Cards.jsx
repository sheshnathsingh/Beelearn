import { motion } from "framer-motion";

const courses = [
  {
    title: "Fundamentals of Artificial Intelligence",
    description:
      "Join us on an exhilarating journey into the captivating realm of artificial intelligence (AI).",
    provider: "London Intercultural Academy",
    image: "https://via.placeholder.com/300", // Replace with actual image
  },
  {
    title: "Fundamentals of Cybersecurity and Applications",
    description:
      "Join Temasek Cyber Division, a highly skilled team of cybersecurity experts.",
    provider: "Temasek Polytechnic",
    image: "https://via.placeholder.com/300", // Replace with actual image
  },
  {
    title: "Certified Customer Service Professional (CCSP)",
    description:
      "Achieve Customer Service Excellence by Becoming a Certified Professional.",
    provider: "London Intercultural Academy",
    image: "https://via.placeholder.com/300", // Replace with actual image
  },
];

const Cards=()=> {
  return (
    <div className="p-6 bg-gray-100 min-h-screen flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-6">Available Mock Test</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl">
        {courses.map((course, index) => (
          <motion.div
            key={index}
            className="bg-white shadow-lg rounded-2xl overflow-hidden p-4"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img src={course.image} alt={course.title} className="w-full h-40 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{course.title}</h2>
              <p className="text-gray-700 text-sm mt-2">{course.description}</p>
              <p className="text-blue-600 font-bold mt-3">{course.provider}</p>
              <button className="mt-4 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600">
                Generate Test
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
export default Cards;
