import React, { useEffect } from 'react'
import Navbar from './components/navbar/Navbar'
import Main from './pages/Main'
import Footer from './components/footer/Footer'

import { ReactComponent as BC1 } from './icons/BC1.svg'
import { ReactComponent as BC2 } from './icons/BC2.svg'

const App = () => {
     let bc1 = document.getElementsByClassName('BC1')
     let bc2 = document.getElementsByClassName('BC2')
     useEffect(() => {
          ShowMobile()
     })

     const ShowMobile = () => {
          if (window.innerWidth < 900) {
               bc1[0].style.opacity = 0
               bc2[0].style.opacity = 0
          } else {
               bc1[0].style.opacity = 1
               bc2[0].style.opacity = 1
          }
     }

     window.addEventListener('resize', ShowMobile)
     return (
          <>
               <BC1 className='BC1' />
               <BC2 className='BC2' />
               <Navbar />
               <Main />
               <Footer />
          </>
     )
}

export default App
