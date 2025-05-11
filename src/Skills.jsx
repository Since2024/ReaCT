import React from 'react'


const mySkiils = [
    {
        skillsName:"Frontend",
        description:"i used react next js othes tools"
    },
    {
        skillsName:"backend",
        description:"i used react next js othes tools"
    },
    {
        skillsName:"database",
        description:"i used react next js othes tools"
    },
    
]

const Skills = () => {
  return (
    <div>
      
      {/* <section className='grid grid-cols-3 gap-y-10 place-items-center mt-10'>
        <div className='bg-blue-500 py-10 px-10 text-white font-semibold'>
            <h1>Frontend</h1>
            <p>i used react </p>
        </div>
        <div>
            <h1>Frontend</h1>
            <p>i used react </p>
        </div>
        <div>
            <h1>Frontend</h1>
            <p>i used react </p>
        </div>
        <div>
            <h1>Frontend</h1>
            <p>i used react </p>
        </div>
        <div>
            <h1>Frontend</h1>
            <p>i used react </p>
        </div>
        </section> */}
        <section className='grid grid-cols-3 gap-y-10 place-items-center mt-10'>
            {
              mySkiils.map((value,index)=>{
                return (
                    <div className='bg-blue-500 hover:bg-black py-10 px-10 text-white font-semibold '>
                    <h1>{value.skillsName}</h1>
                    <p>{value.description} </p>
                </div>
                )
              })
            }
        </section>
    </div>
  )
}

export default Skills
