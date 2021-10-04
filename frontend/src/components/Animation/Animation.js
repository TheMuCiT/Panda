import React from 'react'

import './animation.css'

const Animation = () => {
     let image = null
     let image2 = null
     let image3 = null

     window.onscroll = function () {
          scrollRotate()
     }
     const scrollRotate = () => {
          let offsetMerhaba = 300
          let MerhabaDuration = 250

          let offsetHukuk = 50
          let HukukDuration = 450

          let offsetOgren = 50
          let OgrenDuration = 450

          //MERHABA
          let merhaba = document.getElementsByClassName('merhaba')
          image = document.getElementsByClassName('animationFirst')
          let SectionStart = merhaba[0].offsetTop - offsetMerhaba
          let SectionEnd = merhaba[0].offsetTop + MerhabaDuration - offsetMerhaba
          let WindowsPosition = window.pageYOffset
          let Move = WindowsPosition - SectionStart
          if (SectionStart <= WindowsPosition && SectionEnd >= WindowsPosition) {
               image[0].style.transform = `translateX(${-Move / 8}px)`
               image[1].style.transform = `translateX(${Move / 8}px)`
          }

          //HUKUKCULARLA

          let hukuk = document.getElementsByClassName('hukukcularla')
          image2 = document.getElementsByClassName('animationSecond')

          let SectionStarthukuk = hukuk[0].offsetTop - offsetHukuk
          let WindowsPositionhukuk = window.pageYOffset
          let Movehukuk = SectionStarthukuk - WindowsPositionhukuk
          Movehukuk = HukukDuration - Movehukuk
          image2[0].style.transform = `translateX(${-225}px)`
          image2[1].style.transform = `translateX(${80}px)`

          if (
               SectionStarthukuk - HukukDuration - 150 <= WindowsPositionhukuk &&
               SectionStarthukuk - 150 >= WindowsPositionhukuk
          ) {
               Movehukuk += 150
               image2[0].style.transform = `translateX(${-225 + Movehukuk / 2}px)`
               image2[1].style.transform = `translateX(${80 - Movehukuk / 5.625}px)`
          }
          if (
               SectionStarthukuk + HukukDuration + 150 >= WindowsPositionhukuk &&
               SectionStarthukuk + 150 <= WindowsPositionhukuk
          ) {
               Movehukuk = Movehukuk - HukukDuration - 150
               image2[0].style.transform = `translateX(${0 - Movehukuk / 2}px)`
               image2[1].style.transform = `translateX(${0 + Movehukuk / 5.625}px)`
          }
          if (SectionStarthukuk - 150 <= WindowsPositionhukuk && SectionStarthukuk + 150 > WindowsPositionhukuk) {
               image2[0].style.transform = `translateX(${0}px)`
               image2[1].style.transform = `translateX(${0}px)`
          }

          //OGREN

          let ogren = document.getElementsByClassName('ogren')
          image3 = document.getElementsByClassName('animationThird')

          let SectionStartogren = ogren[0].offsetTop - offsetOgren
          let WindowsPositionogren = window.pageYOffset
          let Movehuogren = SectionStartogren - WindowsPositionogren
          Movehuogren = OgrenDuration - Movehuogren
          image3[0].style.transform = `translateX(${185}px)`
          image3[1].style.transform = `translateX(${-165}px)`

          if (
               SectionStartogren - OgrenDuration - 150 <= WindowsPositionogren &&
               SectionStartogren - 150 >= WindowsPositionogren
          ) {
               Movehuogren += 150
               image3[0].style.transform = `translateX(${185 - Movehuogren / 2.4}px)`
               image3[1].style.transform = `translateX(${-165 + Movehuogren / 2.72}px)`
          }
          if (
               SectionStartogren + OgrenDuration + 150 >= WindowsPositionogren &&
               SectionStartogren + 150 <= WindowsPositionogren
          ) {
               Movehuogren = Movehuogren - OgrenDuration - 150
               image3[0].style.transform = `translateX(${0 + Movehuogren / 2.4}px)`
               image3[1].style.transform = `translateX(${0 - Movehuogren / 2.72}px)`
          }
          if (SectionStartogren - 150 <= WindowsPositionogren && SectionStartogren + 150 > WindowsPositionogren) {
               image3[0].style.transform = `translateX(${0}px)`
               image3[1].style.transform = `translateX(${0}px)`
          }
     }

     return <></>
}

export default Animation
