import React from 'react'


const Stats = [
    {count: "5K", label: "Active Students"},
    {count: "10+", label: "Mentors"},
    {count: "200+", label: "Courses"},
    {count: "50+", label: "Awards"},
];

const StatsComponent = () => {
  return (
    <section>
        <div>
            <div className='flex mt-[5rem] gap-x-10 bg-pink-25 text-richblack-800  items-center justify-center text-xl rounded-lg p-4'>
                {
                    Stats.map( (data, index) => {
                        return (
                            <div key={index}>
                                <h1>
                                    {data.count}
                                </h1>
                                <h2>
                                    {data.label}
                                </h2>
                            </div>
                        )
                    } )
                }
            </div>
        </div>
    </section>
  )
}

export default StatsComponent
