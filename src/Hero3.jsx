import React from 'react';
import { FaAngleLeft, FaAngleRight, FaReact, FaNodeJs, FaGithub } from "react-icons/fa";
import { LuSlash } from "react-icons/lu";
import { TbCircleDashedLetterN, TbBrandTypescript } from "react-icons/tb";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoReorderThreeOutline } from "react-icons/io5";
import { SiExpress, SiTypeorm, SiPrisma } from "react-icons/si";
import { CiDatabase } from "react-icons/ci";
import { DiPostgresql } from "react-icons/di";

function Hero3() {
    return (
        <div className='flex flex-col bg-gray-950 text-white gap-8 py-10 px-4 md:px-10'>

            {/* Title */}
            <div className='text-center'>
                <h1 className='text-blue-600 text-4xl font-bold'>My Skills</h1>
                <div className='w-24 h-1 bg-blue-700 mt-4 mx-auto'></div>
            </div>

            <div className='flex flex-col gap-8'>

                {/* Frontend Section */}
                <div className='bg-gray-800 rounded-lg p-6 shadow-lg'>
                    <div className='flex items-center gap-2 text-blue-500'>
                        <FaAngleLeft /><LuSlash /><FaAngleRight />
                        <h2 className='text-2xl font-semibold'>Frontend</h2>
                    </div>
                    <div className='mt-4 flex flex-wrap gap-6 text-lg'>
                        <div className='flex items-center gap-2'><FaReact />React</div>
                        <div className='flex items-center gap-2'><TbCircleDashedLetterN />Next.js</div>
                        <div className='flex items-center gap-2'><RiTailwindCssFill />Tailwind CSS</div>
                        <div className='flex items-center gap-2'><FaReact />React Query</div>
                        <div className='flex items-center gap-2'><TbBrandTypescript />TypeScript</div>
                    </div>
                </div>

                {/* Backend Section */}
                <div className='bg-gray-800 rounded-lg p-6 shadow-lg'>
                    <div className='flex items-center gap-2 text-green-400'>
                        <IoReorderThreeOutline />
                        <h2 className='text-2xl font-semibold'>Backend</h2>
                    </div>
                    <div className='mt-4 flex flex-wrap gap-6 text-lg'>
                        <div className='flex items-center gap-2'><FaNodeJs />Node.js</div>
                        <div className='flex items-center gap-2'><SiExpress />Express</div>
                        <div className='flex items-center gap-2'><IoReorderThreeOutline />REST API</div>
                        <div className='flex items-center gap-2'><IoReorderThreeOutline />GraphQL</div>
                        <div className='flex items-center gap-2'><FaAngleLeft /><LuSlash /><FaAngleRight />Authentication</div>
                    </div>
                </div>

                {/* Database Section */}
                <div className='bg-gray-800 rounded-lg p-6 shadow-lg'>
                    <div className='flex items-center gap-2 text-yellow-400'>
                        <CiDatabase />
                        <h2 className='text-2xl font-semibold'>Database</h2>
                    </div>
                    <div className='mt-4 flex flex-wrap gap-6 text-lg'>
                        <div className='flex items-center gap-2'><CiDatabase />MongoDB</div>
                        <div className='flex items-center gap-2'><DiPostgresql />PostgreSQL</div>
                        <div className='flex items-center gap-2'><SiTypeorm />TypeORM</div>
                        <div className='flex items-center gap-2'><SiPrisma />Prisma</div>
                        <div className='flex items-center gap-2'><FaGithub />Git</div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Hero3;
