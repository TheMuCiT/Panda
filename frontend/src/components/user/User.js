import React from 'react'

import { ReactComponent as Stars } from '../../icons/stars.svg'
import { ReactComponent as Person1 } from '../../icons/person1.svg'

import './user.css'

const User = () => {
     return (
          <div className='user'>
               <div className='userContainer'>
                    <div className='userHeader'>User Comments</div>
                    <div className='userMain'>
                         <div className='userLeft'>
                              <div className='userLeftList'>
                                   <div className='userLeftItem selected'>
                                        <div className='userLeftItemIMG'>
                                             <Person1 />
                                        </div>

                                        <div className='userLeftItemText'>
                                             <div className='userLeftItemTextHeader'>Ahmet T.</div>
                                             <div className='userLeftItemTextAbout'>Sales Manager, Slack</div>
                                        </div>
                                   </div>
                                   <div className='userLeftItem'>
                                        <div className='userLeftItemIMG'>
                                             <Person1 />
                                        </div>

                                        <div className='userLeftItemText'>
                                             <div className='userLeftItemTextHeader'>Özgür F.</div>
                                             <div className='userLeftItemTextAbout'>Head of Sales, Asana</div>
                                        </div>
                                   </div>
                                   <div className='userLeftItem'>
                                        <div className='userLeftItemIMG'>
                                             <Person1 />
                                        </div>

                                        <div className='userLeftItemText'>
                                             <div className='userLeftItemTextHeader'>Hande K.</div>
                                             <div className='userLeftItemTextAbout'>Sales Team Leader</div>
                                        </div>
                                   </div>
                              </div>
                         </div>

                         <div className='userRight'>
                              <div className='userRightHeader'>Harika bir deneyimdi!</div>
                              <Stars className='userRightStar' />
                              <div className='userRightText'>
                                   Derslerde anlamadığım soyut hukuk konularını somut olay örnekleriyle anlatıyor.
                                   Tüm konuları pratikler üzerinden öğrenmemi sağladı. Tam bir dijital hukuk
                                   dershanesi ! Teşekkürler Pandalan Hukuk !
                              </div>
                              <div className='userRightText second'>
                                   Harika bir uygulama. Otobüste veya tramvayda giderken hukuk derslerini tekrar
                                   etmemi sağlıyor. Hiçbir zamanımı boşa harcamıyorum. Çok başarılı !
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     )
}

export default User
