import React, { useEffect } from 'react'
import SectionTitle from '../../components/SectionTitle'
import { useSelector } from 'react-redux';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Projects = () => {
    const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);
    const { portfolioData } = useSelector(state => state.root);
    const { projects } = portfolioData;

    useEffect(() => {
        Aos.init();
      }, []);
    return (
        <div>
            <div className='tab mt-5' data-aos = 'fade-up'>
                <div data-aos = 'fade-up'>
                    <SectionTitle title="Projects" />
                </div>
                <div className='flex py-10 gap-20 sm:flex-col '>
                    <div className='flex flex-col gap-10  w-1/3 sm:flex-row sm:overflow-x-scroll  sm:w-full' data-aos = 'fade-up'>
                        {projects.map((project, index) => (
                            <div
                                key={index}
                                onClick={() => {
                                    setSelectedItemIndex(index);
                                }}
                                className='cursor-pointer px-3'
                            >
                                <h1
                                    className={`text-xl px-5
                                     ${selectedItemIndex === index ? "text-tertiary -ml-[3px] bg-[#696969] py-3" : "text-white"}`}
                                >
                                    {project.title}
                                </h1>
                            </div>
                        ))}
                    </div>
                    <div className='flex items-center justify-center gap-10 sm:flex-col '>
                        <div className='flex flex-col gap-5'>
                            <img src={projects[selectedItemIndex].image} alt='' className=' h-60 w-72 ' data-aos = 'fade-up' />
                            <h1 className='text-secondary text-xl' >{projects[selectedItemIndex].title}</h1>
                            <p className='text-white' >{projects[selectedItemIndex].description}</p>
                            {projects[selectedItemIndex].link && (
                                <a
                                    href={projects[selectedItemIndex].link}
                                    className='text-tertiary underline '
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >
                                    Visit Project
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects;
