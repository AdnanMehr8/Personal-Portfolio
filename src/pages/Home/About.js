import React, { useEffect } from 'react';
import SectionTitle from '../../components/SectionTitle';
import { useSelector } from 'react-redux';
import Aos from 'aos';
import 'aos/dist/aos.css';

const About = () => {
  const { portfolioData } = useSelector(state => state.root);
  const { about } = portfolioData;
  const { skills, description1, description2 } = about;


    useEffect(() => {
      Aos.init();
    }, [])
  
  return (
    <div>
      <div className='tab mt-5' data-aos = 'fade-up' >
        <div className=''>
          <SectionTitle title="About" />
        </div>
        <div className='flex w-full flex-col items-center  sm:flex-col' data-aos = 'fade-up'>
          <div className='w-full  sm:w-full' data-aos = 'fade-up' >
            <p className='text-white'>{description1 || ''}</p>
            <p className='text-white'>{description2 || ''}</p>
          </div>
          {/* <div className='relative flex-1'>
            <div className='relative'>
              <img className='absolute top-[-120px] right-[200px] h-[60vh] w-30 autoRotate ' src={crown} />
            </div> */}
            {/* <dotlottie-player src={lottieURL} background="transparent" speed="1" loop autoplay></dotlottie-player> */}
          {/* </div> */}
        </div>
        <div className='py-5' data-aos = 'fade-up'>
          <h1 className='text-secondary text-xl ' data-aos = 'fade-up'>Here are a few technologies I've been working with recently</h1>
          <div className='flex flex-wrap gap-10 mt-5 ' data-aos = 'fade-up'>
            {skills.map((skill, index) => (
              <div key={index} className='border border-tertiary border-solid py-3 px-10 rounded-lg'>
                <h1 className='text-tertiary text-xl'>{skill}</h1>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
