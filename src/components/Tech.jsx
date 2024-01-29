import React from 'react'
import { SectionWrapper } from '../hoccomponent/sectionWrapper'
import { technologies } from '../constants';
import { BallCanvas } from './canvas';
import {motion}from 'framer-motion'
import { styles } from '../styles';
import { textVariant } from '../utils/motion';
const Tech = () => {
  const icons = Object.values(technologies).map((technology) => technology.icon);
  return (
<>
<motion.div
    variants={textVariant()}
    >
 <p className={styles.heroSubText}>What I Know  so far?</p>
    <h2 className={styles.heroHeadText}>Technical Skills.</h2>
    </motion.div>
    <div className='flex flex-row flex-wrap justify-center gap-10  mt-20'>
      
      {technologies?.map((technology) => (
        <div className='w-28 h-28' key={technology.name}>
          <BallCanvas icon={technology.icon} />
          <p className='fontSize-14px text-center'>{technology.name}</p>
        </div>
        
      ))}
    </div>
</>

  
  );
};

export default SectionWrapper(Tech,"tech") 