import { motion } from "framer-motion";
import Image1 from"../assets/image1.png"

const StatsSection = () => {
  const stats = [
    { value: "3M+", label: "Learners", icon: "🎓" },
    { value: "300+", label: "Public Test", icon: "📖" },
   // { value: "300+", label: "Institutions", icon: "🏛️" },
    //{ value: "4,250+", label: "Private Courses", icon: "💻" },
  ];

  return (
    <section className="text-center py-12 bg-white">
      <motion.h2
        className="text-2xl md:text-3xl font-bold text-black"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        A global community
      </motion.h2>

      <div className="flex flex-wrap justify-center gap-6 mt-8">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center bg-gradient-to-r from-teal-500 to-blue-500 text-white p-4 rounded-xl w-32 md:w-40 shadow-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <span className="text-3xl">{stat.icon}</span>
            <h3 className="text-xl font-bold">{stat.value}</h3>
            <p className="text-sm">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const HeroSection = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-between px-6 md:px-16 py-12">
      <motion.div
        className="max-w-lg text-center lg:text-left"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-gray-500 uppercase font-semibold tracking-wide">
          FOR EDUCATION, TRAINING & UPSKILLING
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-black mt-2">
          Award-winning software trusted by industry-leading institutions
        </h2>
        <p className="text-gray-600 mt-4">
          Discover why over 300 organisations worldwide choose OpenLearning to
          deliver their programs online.
        </p>
        <motion.button
          className="mt-6 px-6 py-3 bg-pink-600 text-white font-semibold rounded-xl shadow-lg hover:bg-pink-700"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Request a demo
        </motion.button>
      </motion.div>

      <motion.div
        className="relative mt-8 lg:mt-0"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden">
          <img
            src={Image1}
            alt="Team Discussion"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-pink-500 opacity-50 mix-blend-multiply"></div>
        </div>
      </motion.div>
    </section>
  );
};

const HomePage = () => {
  return (
    <div>
      <StatsSection />
      <HeroSection />
    </div>
  );
};

export default HomePage;
