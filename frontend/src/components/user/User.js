import React from 'react'

import { ReactComponent as Stars } from '../../icons/stars.svg'

import Person1 from '../../images/Ellipse4.png'
import Person2 from '../../images/Ellipse5.png'
import Person3 from '../../images/Ellipse6.png'

import './user.css'

const User = () => {
     return (
          <div className='user'>
               <div className='userContainer'>
                    <div className='userHeader fadeBackground'>User Comments</div>
                    <div className='userMain'>
                         <div className='userLeft'>
                              <div className='userLeftList'>
                                   <div className='userLeftItem selected slideFirst'>
                                        <div className='userLeftItemIMG'>
                                             <img src={Person1} alt='Error' className='userLeftItemIMGPNG' />
                                        </div>

                                        <div className='userLeftItemText'>
                                             <div className='userLeftItemTextHeader'>Ahmet T.</div>
                                             <div className='userLeftItemTextAbout'>Sales Manager, Slack</div>
                                        </div>
                                   </div>
                                   <div className='userLeftItem slideSecond'>
                                        <div className='userLeftItemIMG'>
                                             <img src={Person2} alt='Error' className='userLeftItemIMGPNG' />
                                        </div>

                                        <div className='userLeftItemText'>
                                             <div className='userLeftItemTextHeader'>Özgür F.</div>
                                             <div className='userLeftItemTextAbout'>Head of Sales, Asana</div>
                                        </div>
                                   </div>
                                   <div className='userLeftItem slideThird'>
                                        <div className='userLeftItemIMG'>
                                             <img src={Person3} alt='Error' className='userLeftItemIMGPNG' />
                                        </div>

                                        <div className='userLeftItemText'>
                                             <div className='userLeftItemTextHeader'>Hande K.</div>
                                             <div className='userLeftItemTextAbout'>Sales Team Leader</div>
                                        </div>
                                   </div>
                              </div>
                         </div>

                         <div className='userRight'>
                              <div className='userRightHeader slideSecondForward '>Harika bir deneyimdi!</div>
                              <Stars className='userRightStar slideThirdForward' />
                              <div className='userRightText slideFourthForward'>
                                   Derslerde anlamadığım soyut hukuk konularını somut olay örnekleriyle anlatıyor.
                                   Tüm konuları pratikler üzerinden öğrenmemi sağladı. Tam bir dijital hukuk
                                   dershanesi ! Teşekkürler Pandalan Hukuk !
                              </div>
                              <div className='userRightText second slideFifthForward'>
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
