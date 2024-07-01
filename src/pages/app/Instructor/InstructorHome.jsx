import React from "react";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div
      className="flex bg-gray-100 min-h-screen p-8"
      style={{
        backgroundImage: "linear-gradient(to left, #FFFFFF, #E6FFE6, #FFFFFF)",
      }}
    >
      <aside className="bg-black text-white w-72 p-6 rounded-lg flex flex-col">
        <div className="flex flex-col items-center mb-6">
          <img
            src="https://via.placeholder.com/150"
            alt="Profile"
            className="rounded-full w-24 h-24 mb-4"
          />
          <h2 className="text-xl font-bold">Jenny Brunson</h2>
        </div>
        <div className="text-center mb-8"
        
        
        >
          <p className="text-3xl">23</p>
          <p>Courses</p>
        </div>
        <nav>
          <ul className="space-y-4">
            <li className="hover:bg-gray-700 p-2 rounded">Dashboard</li>
            <li className="hover:bg-gray-700 p-2 rounded">Learn</li>
            <li className="hover:bg-gray-700 p-2 rounded">Statistics</li>
            <li className="hover:bg-gray-700 p-2 rounded">Courses</li>
            <li className="hover:bg-gray-700 p-2 rounded">Settings</li>
          </ul>
        </nav>
        <div className="mt-auto text-center">
          <p>Hey, Jenny! 👋</p>
          <p>Here's a complete overview of your courses.</p>
        </div>
      </aside>
      <main className="flex-1 p-6 bg-white rounded-lg ml-6"
         style={{
          // backgroundImage: "linear-gradient(to left, #FFFFFF, #E6FFE6, #FFFFFF)",
        }}
      
      >
        <header className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <input
            type="text"
            placeholder="Search something"
            className="border p-2 rounded w-64"
          />
        </header>
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-4">In Progress</h2>
          <div className="grid grid-cols-3 gap-4">
            {["Script Writing", "UX Modeling", "Quick Sketching"].map(
              (course) => (
                <motion.div
                  key={course}
                  className="bg-gray-100 p-4 rounded-lg shadow"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <h3 className="text-lg font-bold">{course}</h3>
                  <p className="text-gray-600">
                    Some description about the course.
                  </p>
                </motion.div>
              )
            )}
          </div>
        </section>
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-4">Statistics</h2>
          <div className="grid grid-cols-3 gap-4">
            {["10:23 h", "10.3 GB", "289"].map((stat, index) => (
              <motion.div
                key={index}
                className="bg-gray-100 p-4 rounded-lg shadow text-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <p className="text-3xl font-bold">{stat}</p>
                <p className="text-gray-600">Description</p>
              </motion.div>
            ))}
          </div>
        </section>
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-4">Leaders</h2>
          <div className="grid grid-cols-3 gap-4">
            {["Melanie Richards", "Mathew Grant", "Jennifer Smith"].map(
              (leader) => (
                <motion.div
                  key={leader}
                  className="bg-gray-100 p-4 rounded-lg shadow flex items-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <img
                    src="https://via.placeholder.com/50"
                    alt="Leader"
                    className="rounded-full w-12 h-12 mr-4"
                  />
                  <div>
                    <h3 className="text-lg font-bold">{leader}</h3>
                    <p className="text-gray-600">Position</p>
                  </div>
                </motion.div>
              )
            )}
          </div>
        </section>
        <section>
          <h2 className="text-xl font-semibold mb-4">You May Like It</h2>
          <motion.div
            className="bg-gray-100 p-4 rounded-lg shadow"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <h3 className="text-lg font-bold">
              User Experience Design Fundamentals
            </h3>
            <p className="text-gray-600">Some description about the course.</p>
          </motion.div>
        </section>
      </main>
    </div>
  );
};

export default Home;
