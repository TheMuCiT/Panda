import React from 'react'
import Gunluk from '../components/gunluk/Gunluk'
import Haydi from '../components/haydi/Haydi'
import Hukukcularla from '../components/hukukcularla/Hukukcularla'
import Merhaba from '../components/merhaba/Merhaba'
import Ogren from '../components/ogren/Ogren'
import User from '../components/user/User'

import './main.css'

const Main = () => {
     return (
          <div className='main'>
               <Merhaba />
               <Gunluk />
               <Hukukcularla />
               <Ogren />
               <User />
               <Haydi />
          </div>
     )
}

export default Main
