import React from 'react'

import styles from './style';
import {Billing ,Bussiness ,Button ,CardDeal ,Clients ,CTA ,FeedbackCard ,Footer ,GetStarted ,Hero ,Navbar ,Stats ,Tesimonials} from './components'

const App = () => (

  <div className='bg-primary w-full text-center overflow-hidden'>
  
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`} >
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>

    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`} >
      <div className={`${styles.boxWidth}`}>
        <Stats />
        <Bussiness />
        <Billing />
        <CardDeal />
        <Tesimonials />
        <Clients />
        <CTA />
        <Footer />
      </div>
    </div>

  </div>

  );

export default App