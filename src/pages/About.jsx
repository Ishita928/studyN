import React from 'react'
import HighlightText from "../components/core/HighlightText"
import BannerImage1 from "../assets/Images/aboutus1.webp"
import BannerImage2 from "../assets/Images/aboutus2.webp"
import BannerImage3 from "../assets/Images/aboutus3.webp"
import Quote from '../components/core/Quote'
import FoundingStory from "../assets/Images/FoundingStory.png"
import StatsComponent from '../components/core/Stats'
import LearningGrid from '../components/core/LearningGrid'
import ContactFormSection from '../components/core/ContactFormSection'
import Footer from '../components/common/Footer'

const About = () => {
  return (
    <div className='mx-auto mt-[100px] text-white'>
      {/* section 1 */}
      <section>
        <div>
            <header className='flex flex-col gap-[1rem] justify-center  items-center'>
              <div className='text-3xl'>
                Driving Innovation in Online Education for a 
                <HighlightText text={"Brighter Future"}/>
                </div>
                <p className='text-xl w-[80%] mb-[3rem] text-richblack-400'>Studynotion is at the forefront of driving innovation in online education. We're passionate about creating a brighter future by offering cutting-edge courses, leveraging emerging technologies, and nurturing a vibrant learning community.</p>
            </header>
            <div className='flex gap-x-3  item-center justify-around mb-[3rem]'>
            <div className='border-4 border-pink-400 rounded-full'>
  <img src={BannerImage1}  className='rounded-full'/>
</div>
<div className='border-4 border-pink-400 rounded-full' > <img src={BannerImage2} className='rounded-full' /></div>
                <div className='border-4 border-pink-400 rounded-full'>
                <img src={BannerImage3}  className='rounded-full'/>
                </div>
            </div>
        </div>
      </section>

      {/* section 2 */}

      <section >
        <div >
            <Quote/>
        </div>
      </section>


      {/* section 3 */}

      <section>
        <div className='flex flex-col'> 
            {/* foudning story wala div */}
            <div className='flex '>
                {/* founding story left box */}
                <div className='border-2 border-richblack-200 w-[40%] flex flex-col gap-5 items-center bg-blue-200 p-2 rounded-lg ml-[8rem] mt-5'>
                    <h1 className=' text-3xl font-semibold text-transparent bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#FCB045] bg-clip-text'>Our Founding Story</h1>

                    <p>Our e-learning platform was born out of a shared vision and passion for transforming education. It all began with a group of educators, technologists, and lifelong learners who recognized the need for accessible, flexible, and high-quality learning opportunities in a rapidly evolving digital world.</p>

                    <p>As experienced educators ourselves, we witnessed firsthand the limitations and challenges of traditional education systems. We believed that education should not be confined to the walls of a classroom or restricted by geographical boundaries. We envisioned a platform that could bridge these gaps and empower individuals from all walks of life to unlock their full potential.</p>
                </div>
               
            </div>

            {/* vision and mission wala parent div */}
            <div  className='border-2 border-richblack-200 w-[40%] flex flex-col gap-5 items-center p-2 bg-blue-300 rounded-lg ml-[42rem] mt-[-7rem]'>
                {/* left box */}
                <div>
                    <h1  className=' bg-gradient-to-b from-[#FF512F] to-[#F09819] bg-clip-text text-3xl font-semibold text-transparent   flex flex-col gap-5 items-center'>Our Vision</h1>
                    <p>With this vision in mind, we set out on a journey to create an e-learning platform that would revolutionize the way people learn. Our team of dedicated experts worked tirelessly to develop a robust and intuitive platform that combines cutting-edge technology with engaging content, fostering a dynamic and interactive learning experience.</p>
                </div>

                {/* right box */}
                <div>
                    <h1 className=' bg-gradient-to-b from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB]  text-3xl font-semibold text-transparent bg-clip-text flex flex-col gap-5 items-center'>
                        Our Mission
                    </h1>
                    <p>Our mission goes beyond just delivering courses online. We wanted to create a vibrant community of learners, where individuals can connect, collaborate, and learn from one another. We believe that knowledge thrives in an environment of sharing and dialogue, and we foster this spirit of collaboration through forums, live sessions, and networking opportunities.</p>
                </div>
            </div>
             {/* foudning story right box */}
             
        </div>
      </section>  

      {/* section 4 */}
      <div className='flex gap-[2rem] justify-evenly'>
      <div>
                    <img  src={FoundingStory} className='rounded-full'/>
                </div>
      <StatsComponent/>  
      </div>
      {/* section 5 */}
      <section className='mx-auto flex flex-col items-center justify-between gap-5 mb-[140px]'>
        <LearningGrid />
        <ContactFormSection />
      </section>

      <section>
        <div>
            Reviews from other learners
            {/* <ReviewSlider /> */}
        </div>
      </section>

      <Footer/>

    </div>
  )
}

export default About
