import { motion } from "framer-motion";

const  Footer=()=> {
  return (
    <footer className="bg-gradient-to-b from-teal-700 to-teal-900 text-white p-8 md:p-12">
      <div className="max-w-7xl mx-auto text-center md:text-left">
        <motion.h2 
          className="text-2xl font-bold text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Join over 3,000,000 learners worldwide
        </motion.h2>
        <motion.button
          className="bg-white text-teal-700 px-6 py-2 mt-4 rounded-md font-semibold hover:bg-gray-200 transition"
          whileHover={{ scale: 1.1 }}
        >
          Browse our courses
        </motion.button>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-10">
          <div>
            <h3 className="text-xl font-semibold">open Mock Test</h3>
            <p className="text-sm mt-2">
              Open Mock Test is a scalable online learning platform at the forefront of education delivery.
            </p>
            <div className="flex space-x-4 mt-4 justify-center md:justify-start">
              <span className="bg-teal-600 p-2 rounded-full">🔵</span>
              <span className="bg-teal-600 p-2 rounded-full">🐦</span>
              <span className="bg-teal-600 p-2 rounded-full">🔗</span>
              <span className="bg-teal-600 p-2 rounded-full">▶</span>
            </div>
          </div>

          <div>
            <h3 className="font-semibold">Tools and resources</h3>
            <ul className="mt-2 text-sm space-y-2">
              <li>Help & Support</li>
              <li>Contact us</li>
              <li>Learning design toolkit</li>
              <li>Blog</li>
              <li>Verify a certificate</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold">Platform</h3>
            <ul className="mt-2 text-sm space-y-2">
              <li>Philosophy</li>
              <li>Features</li>
              <li>Pricing</li>
              <li>OpenCreds</li>
              <li>Partners</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold">Company</h3>
            <ul className="mt-2 text-sm space-y-2">
              <li>About us</li>
              <li>Team</li>
              <li>Careers</li>
              <li>Press</li>
              <li>Investors</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
