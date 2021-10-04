import React from 'react'
//, { useState }
import Navbar from './components/navbar/Navbar'
import Main from './pages/Main'
import Footer from './components/footer/Footer'

import { ReactComponent as BC1 } from './icons/BC1.svg'
import { ReactComponent as BC2 } from './icons/BC2.svg'

//import bc from './images/BC.png'

const App = () => {
     /*const [press, setpress] = useState(true)
     const handlerClick = () => {
          if (press === false) {
               setpress(true)
          } else {
               setpress(false)
          }
     }*/
     return (
          <>
               {/* <img src={bc} className={press ? 'BC' : 'BCNONE'} alt='Error' onClick={handlerClick} /> */}
               <BC1 className='BC1' />
               <BC2 className='BC2' />
               <Navbar />
               <Main />
               <Footer />
          </>
     )
}

export default App
