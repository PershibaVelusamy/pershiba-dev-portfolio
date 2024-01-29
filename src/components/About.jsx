import React from 'react'
import {Tilt} from 'react-tilt'
import {motion} from 'framer-motion'
import {styles} from '../styles'
import { services } from '../constants'
import {fadeIn,textVariant} from '../utils/motion'
import ServiceCard from './ServiceCard'
import { SectionWrapper } from '../hoccomponent/sectionWrapper'



const About = () => {
  return (
  <>
  <motion.div variants={textVariant()}>
    <p className={styles.heroSubText}>Introduction</p>
    <h2 className={styles.heroHeadText}>Overview.</h2>
  </motion.div>
  <motion.p variants={fadeIn("","",0.1,1)} className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
I'm a skilled full stack web developer with good knowlege in MERN stack. I have 2 years and 6 months of Experience  in building large scalable web application.
  </motion.p>
  <div className='mt-20 flex flex-wrap gap-10'>
    {services.map((service,index)=>{
    return<>
          <ServiceCard key={service.title} index={index} {...service}/>

    </>
      
})}

  </div>
  </>
  )
}

export default SectionWrapper(About,"about") 