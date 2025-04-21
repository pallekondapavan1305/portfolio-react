// import { RiReactjsLine } from 'react-icons/ri'
// import { SiMongodb } from 'react-icons/si'
// import { FaNodeJs } from 'react-icons/fa'
// import { motion } from "framer-motion"
// import { FaHtml5 } from "react-icons/fa6";
// import { IoLogoCss3 } from "react-icons/io5";
// import { SiSqlite } from "react-icons/si";
// import { IoLogoJavascript } from "react-icons/io5";
// import { FaBootstrap } from "react-icons/fa";
// import { FaPython } from "react-icons/fa";



// const iconVariants = (duration) => ({
//     initial: { y: -10 },
//     animate: {
//         y: [10, -10],
//         transition: {
//             duration: duration,
//             ease: "linear",
//             repeat: Infinity,
//             repeatType: "reverse",
//         },
//     },
// });

// // const Technologies = () => {
// //     return (
// //         <div className='border-b border-neutral-900 pb-24'>
// //             <motion.h1
// //                 whileInView={{ opacity: 1, y: 0 }}
// //                 initial={{ opacity: 0, y: -100 }}
// //                 transition={{ duration: 1.5 }}

// //                 className="my-20 text-center text-4xl">Technologies</motion.h1>
// //             <motion.div
// //                 whileInView={{ opacity: 1, x: 0 }}
// //                 initial={{ opacity: 0, x: -100 }}
// //                 transition={{ duration: 1.5 }}
// //                 className="flex flex-wrap items-center justify-center gap-4">

// //                 <motion.div variants={iconVariants(3)}
// //                     initial="initial"
// //                     animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
// //                     <FaHtml5 className='text-7xl ' />
// //                     <p className='text-2xl'>HTML</p>
// //                 </motion.div>

// //                 <motion.div
// //                     variants={iconVariants(2)}
// //                     initial="initial"
// //                     animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
// //                     <IoLogoCss3 className='text-7xl text-red-400' />
// //                     <p className='text-2xl text-red-400'>CSS 3</p>

// //                 </motion.div>

// //                 <motion.div
// //                     variants={iconVariants(2.5)}
// //                     initial="initial"
// //                     animate="animate"
// //                     className="d-flex flex-col rounded-2xl border-4 border-neutral-800 p-4 items-center justify-center ">
// //                     <IoLogoJavascript className=' text-7xl text-cyan-400 ' />
// //                     <p className='text-2xl text-cyan-400'>JavaScript</p>

// //                 </motion.div>

// //                 <motion.div
// //                     variants={iconVariants(2.5)}
// //                     initial="initial"
// //                     animate="animate"
// //                     className="rounded-2xl border-4 border-neutral-800 p-4">
// //                     <FaBootstrap className='text-7xl text-cyan-400' />
// //                     <p className='text-2xl text-cyan-400'>BootStrap</p>

// //                 </motion.div>

// //                 <motion.div
// //                     variants={iconVariants(2.5)}
// //                     initial="initial"
// //                     animate="animate"
// //                     className="rounded-2xl border-4 border-neutral-800 p-4">
// //                     <FaPython className='text-7xl text-cyan-400' />
// //                     <p className='text-2xl text-cyan-400'>Python</p>

// //                 </motion.div>

// //                 <motion.div
// //                     variants={iconVariants(2.5)}
// //                     initial="initial"
// //                     animate="animate"
// //                     className="rounded-2xl border-4 border-neutral-800 p-4">
// //                     <RiReactjsLine className='text-7xl text-cyan-400' />
// //                     <p className='text-2xl text-cyan-400 text-center'> React</p>
// //                 </motion.div>



// //                 <motion.div
// //                     variants={iconVariants(5)}
// //                     initial="initial"
// //                     animate="animate"
// //                     className="rounded-2xl border-4 border-neutral-800 p-4">
// //                     <SiMongodb className='text-7xl text-green-400' />
// //                     <p className='text-2xl text-green-400'>MangoDB</p>

// //                 </motion.div>



// //                 <motion.div variants={iconVariants(6)}
// //                     initial="initial"
// //                     animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
// //                     <FaNodeJs className='text-7xl text-green-400' />
// //                     <p className='text-2xl text-green-400'>Node JS</p>

// //                 </motion.div>

// //                 <motion.div
// //                     variants={iconVariants(4)}
// //                     initial="initial"
// //                     animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
// //                     < SiSqlite className='text-7xl text-blue-400' />
// //                     <p className='text-2xl text-blue-400'>SQL</p>

// //                 </motion.div>


// //             </motion.div>
// //         </div>
// //     )
// // }

// const Technologies = () => {
//     return (
//         <div className='border-b border-neutral-900 pb-24'>
//             <motion.h1
//                 whileInView={{ opacity: 1, y: 0 }}
//                 initial={{ opacity: 0, y: -100 }}
//                 transition={{ duration: 1.5 }}
//                 className="my-20 text-center text-4xl"
//             >
//                 Technologies
//             </motion.h1>

//             <motion.div
//                 whileInView={{ opacity: 1, x: 0 }}
//                 initial={{ opacity: 0, x: -100 }}
//                 transition={{ duration: 1.5 }}
//                 className="flex flex-wrap items-center justify-center gap-4"
//             >
//                 {[
//                     { icon: <FaHtml5 className="text-7xl" />, label: "HTML" },
//                     { icon: <IoLogoCss3 className="text-7xl text-red-400" />, label: "CSS 3", color: "text-red-400" },
//                     { icon: <IoLogoJavascript className="text-7xl text-cyan-400" />, label: "JavaScript", color: "text-cyan-400" },
//                     { icon: <FaBootstrap className="text-7xl text-cyan-400" />, label: "BootStrap", color: "text-cyan-400" },
//                     { icon: <FaPython className="text-7xl text-cyan-400" />, label: "Python", color: "text-cyan-400" },
//                     { icon: <RiReactjsLine className="text-7xl text-cyan-400" />, label: "React", color: "text-cyan-400" },
//                     { icon: <SiMongodb className="text-7xl text-green-400" />, label: "MongoDB", color: "text-green-400" },
//                     { icon: <FaNodeJs className="text-7xl text-green-400" />, label: "Node JS", color: "text-green-400" },
//                     { icon: <SiSqlite className="text-7xl text-blue-400" />, label: "SQL", color: "text-blue-400" },
//                 ].map((tech, index) => (
//                     <motion.div
//                         key={index}
//                         variants={iconVariants(2 + (index % 5))}
//                         initial="initial"
//                         animate="animate"
//                         className="flex flex-col items-center justify-center rounded-2xl border-4 border-neutral-800 p-4 w-32 h-32"
//                     >
//                         {tech.icon}
//                         <p className={`text-2xl ${tech.color || ""} text-center`}>{tech.label}</p>
//                     </motion.div>
//                 ))}
//             </motion.div>
//         </div>
//     );
// };


// export default Technologies
import { RiReactjsLine } from 'react-icons/ri';
import { SiMongodb, SiSqlite, SiSpringboot, SiPostgresql } from 'react-icons/si';
import { FaNodeJs, FaBootstrap, FaPython, FaHtml5 } from 'react-icons/fa';
import { IoLogoCss3, IoLogoJavascript } from 'react-icons/io5';
import { motion } from "framer-motion";
import { DiJava } from 'react-icons/di';
import { TbBrandReactNative } from 'react-icons/tb';

const Technologies = () => {
    const techStack = [
        { icon: <FaHtml5 className="text-7xl" />, label: "HTML" },
        { icon: <IoLogoCss3 className="text-7xl text-red-400" />, label: "CSS 3", color: "text-red-400" },
        { icon: <IoLogoJavascript className="text-7xl text-yellow-400" />, label: "JavaScript", color: "text-yellow-400" },
        { icon: <FaBootstrap className="text-7xl text-purple-500" />, label: "Bootstrap", color: "text-purple-500" },
        { icon: <FaPython className="text-7xl text-blue-400" />, label: "Python", color: "text-blue-400" },
        { icon: <RiReactjsLine className="text-7xl text-cyan-400" />, label: "React", color: "text-cyan-400" },
        { icon: <TbBrandReactNative className="text-7xl text-cyan-500" />, label: "React Native", color: "text-cyan-500" },
        { icon: <SiMongodb className="text-7xl text-green-400" />, label: "MongoDB", color: "text-green-400" },
        { icon: <FaNodeJs className="text-7xl text-green-600" />, label: "Node.js", color: "text-green-600" },
        { icon: <SiSqlite className="text-7xl text-blue-400" />, label: "SQLite", color: "text-blue-400" },
        { icon: <SiPostgresql className="text-7xl text-sky-600" />, label: "PostgreSQL", color: "text-sky-600" },
        { icon: <SiSpringboot className="text-7xl text-green-500" />, label: "Spring Boot", color: "text-green-500" },
        { icon: <DiJava className="text-7xl text-orange-500" />, label: "Java", color: "text-orange-500" },
    ];

    return (
        <div className='border-b border-neutral-900 pb-24'>
            <motion.h1
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1.5 }}
                className="my-20 text-center text-4xl"
            >
                Technologies
            </motion.h1>

            <div className="flex flex-wrap items-center justify-center gap-8">
                {techStack.map((tech, index) => (
                    <motion.div
                        key={index}
                        className="relative flex flex-col items-center justify-center rounded-2xl border-4 border-neutral-800 p-5 w-32 h-42 transition-transform duration-300 group"
                    >
                        {/* Icon */}
                        {tech.icon}
                        {/* Label (appears only on hover over icon) */}
                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            whileHover={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3 }}
                            className={`absolute text-xl font-semibold p-5 ${tech.color || "text-white"} opacity-0 group-hover:opacity-100 bottom-[-35px]`}
                        >
                            {tech.label}
                        </motion.p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Technologies;
