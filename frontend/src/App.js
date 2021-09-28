import React from 'react'

import Navbar from './components/navbar/Navbar'
import Main from './pages/Main'
import Footer from './components/footer/Footer'

//import bc from './images/BC.png'

const App = () => {
     /* const [press, setpress] = useState(true)
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
               <Navbar />
               <Main />
               <Footer />
          </>
     )
}

export default App
