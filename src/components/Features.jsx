import { motion } from "framer-motion";

export default function Features() {
  motion;
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.4,
      },
    },
  };
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };
  return (
    <>
      {/* heading n subtext */}
      <section className="w-full mt-20">
        <div className="max-w-[98%]">
          <h2 className="text-3xl text-center font-semibold">
            Everything You Need To Know About{" "}
            <span className="text-[#4f46e5]">Habitflow!</span>
          </h2>
          <p className="mt-6 text-center text-xl  mx-auto mb-12">
            A simple system designed to help you build habits, track progress,
            and stay focused every day.
          </p>

          {/* cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-3 gap-16 mx-4"
          >
            <motion.div
              variants={cardVariants}
              className="p-6 rounded-2xl bg-[#f8fafc] border border-gray-200 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1"
            >
              <h1 className="text-center text-xl ">track habbits</h1>
              <p className="text-xl text-[#645f5f]">
                Habitflow provides a free service to build, add, track the
                process , using some text now to fill things up later when we
                will decide wt to add other major things here
              </p>
            </motion.div>
            <motion.div
              variants={cardVariants}
              className="p-6 rounded-2xl bg-[#f8fafc] border border-gray-200 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1"
            >
              <h1 className="text-center text-xl ">track habbits</h1>
              <p className="text-xl text-[#645f5f]">
                Habitflow provides a free service to build, add, track the
                process , using some text now to fill things up later when we
                will decide wt to add other major things here
              </p>
            </motion.div>
            <motion.div
              variants={cardVariants}
              className="p-6 rounded-2xl bg-[#f8fafc] border border-gray-200 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1"
            >
              <h1 className="text-center text-xl ">track habbits</h1>
              <p className="text-xl text-[#615f5f]">
                Habitflow provides a free service to build, add, track the
                process , using some text now to fill things up later when we
                will decide wt to add other major things here
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
