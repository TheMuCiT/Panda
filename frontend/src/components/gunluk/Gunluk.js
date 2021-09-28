import React from 'react'

import './gunluk.css'

const Gunluk = () => {
     return (
          <div className='gunluk'>
               <div className='gunlukContainer'>
                    <div className='gunlukItems'>
                         <div className='gunlukItem'>
                              <div className='gunlukItemHeader'>10+</div>
                              <div className='gunlukItemText'>Günlük İndirme</div>
                         </div>
                    </div>
                    <div className='gunlukItems'>
                         <div className='gunlukItem'>
                              <div className='gunlukItemHeader'>500+</div>
                              <div className='gunlukItemText'>Kullanıci</div>
                         </div>
                    </div>
                    <div className='gunlukItems'>
                         <div className='gunlukItem'>
                              <div className='gunlukItemHeader'>5</div>
                              <div className='gunlukItemText'>Ülke</div>
                         </div>
                    </div>
               </div>
          </div>
     )
}

export default Gunluk
