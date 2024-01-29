import React from 'react'
import { VerticalTimeline,VerticalTimelineElement } from 'react-vertical-timeline-component'
import {motion}from 'framer-motion'
import 'react-vertical-timeline-component/style.min.css';
import { styles } from '../styles';
import { experiences ,ExperiencePoint} from '../constants';
import { SectionWrapper } from '../hoccomponent/sectionWrapper'
  import { textVariant } from '../utils/motion';
import {ExperienceCard} from './ExperienceCard'
const Experience = () => {
  return (
    <>
    <motion.div
    variants={textVariant()}
    >
 {/* <p className={styles.heroSubText}>What I have done so far?</p> */}
    <h2 className={styles.heroHeadText}>Work Experience.</h2>
    </motion.div>

    <div>
          <h3 className='text-white text-[24px] font-bold'>{`Software Engineer - full stack`}</h3>
          <p
            className='text-secondary text-[16px] font-semibold'
            style={{ margin: 0 }}
          >
            {`Vectone Solutions Private limited`}
          </p>
        </div>

        <ul className='mt-5 list-disc ml-5 space-y-2'>
          {ExperiencePoint.map((point, index) => (
            <li
              key={`experience-point-${index}`}
              className='text-white-100 text-[14px] pl-1 tracking-wider'
            >
              {point}
            </li>
          ))}
        </ul>

        <p className={`${styles.heroSubText}  mt-10`}>What I have done so far?</p>
    <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  )
}
export default SectionWrapper(Experience,"experience") 
