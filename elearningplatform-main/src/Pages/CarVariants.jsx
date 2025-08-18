import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const courses = [
  {
    title: "Short Test",
    description:
      "Flexible and short online courses, designed for exploring a new subject, trying out a new institution or acquiring new skills.",
    link: "#",
    linkText: "View short courses",
    icon: "💡",
  },
  {
    title: "Open Challenge Test",
    description:
      "Learn new skills with practical, stackable online courses aligned to Australia’s first micro-credentialing framework for lifelong learning.",
    link: "#",
    linkText: "View OpenCreds",
    icon: "🎓",
  },
  {
    title: "Qualifications",
    description:
      "Stack your OpenCreds to receive credit towards industry-relevant, engaging online qualifications from universities and colleges.",
    link: "#",
    linkText: "View qualifications",
    icon: "📜",
  },
];

const CardVariants=()=> {
  return (
    <div className="flex flex-col md:flex-row gap-6 p-6 max-w-6xl mx-auto">
      {courses.map((course, index) => (
        <motion.div
          key={index}
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex-1 bg-white shadow-lg rounded-2xl p-6 text-center flex flex-col items-center"
        >
          <div className="text-4xl bg-pink-500 text-white p-4 rounded-full">
            {course.icon}
          </div>
          <h3 className="text-xl font-bold mt-4">{course.title}</h3>
          <p className="text-gray-600 mt-2">{course.description}</p>
          <a
            href={course.link}
            className="mt-4 text-pink-600 font-semibold hover:underline"
          >
            {course.linkText}
          </a>
        </motion.div>
      ))}
    </div>
  );
}
export default CardVariants;