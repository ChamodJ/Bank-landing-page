import React from 'react'

import {apple, bill, google} from '../assets'
import styles, {layout} from '../style'

const Billing = () => {
  return (
    <section id='product' className={layout.sectionReverse}>
      
      <div className={layout.sectionImgReverse}>
        <img src={bill}  className='w-[100%] h-[100%] relative z-[5]'/>
        
        <div className='white__gradient absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full'/>
        <div className='pink__gradient absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full'/>

      </div>

      <div className={`${layout.sectionInfo} text-center`}>
        <h2 className={styles.heading2}>Easily control your <br className='sm:block hidden' /> billing & invoicing.</h2>

        <p className={`${styles.paragraph} mt-5`}>Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.</p>
      </div>
    </section>
  )
}

export default Billing