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
          let firstHukuk = -225
          let secondHukuk = 80
          let index = 1
          let index1 = 1
          if (window.innerWidth < 1350) {
               index = 1.875
               index1 = 1.25
               firstHukuk = -120
               secondHukuk = 64
          }
          if (window.innerWidth < 900) {
               index = 3
               index1 = 2
               firstHukuk = -75
               secondHukuk = 40
          }

          image2[0].style.transform = `translateX(${firstHukuk}px)`
          image2[1].style.transform = `translateX(${secondHukuk}px)`

          if (
               SectionStarthukuk - HukukDuration - 150 <= WindowsPositionhukuk &&
               SectionStarthukuk - 150 >= WindowsPositionhukuk
          ) {
               Movehukuk += 150
               image2[0].style.transform = `translateX(${firstHukuk + Movehukuk / 2 / index}px)`
               image2[1].style.transform = `translateX(${secondHukuk - Movehukuk / 5.625 / index1}px)`
          }
          if (
               SectionStarthukuk + HukukDuration + 150 >= WindowsPositionhukuk &&
               SectionStarthukuk + 150 <= WindowsPositionhukuk
          ) {
               Movehukuk = Movehukuk - HukukDuration - 150
               image2[0].style.transform = `translateX(${0 - Movehukuk / 2 / index}px)`
               image2[1].style.transform = `translateX(${0 + Movehukuk / 5.625 / index1}px)`
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
          let firstOgren = 185
          let secondOgren = -165
          let index2 = 1
          let index3 = 1
          if (window.innerWidth < 1350) {
               index2 = 1.25
               index3 = 1.25
               firstOgren = 148
               secondOgren = -132
          }

          if (window.innerWidth < 900) {
               index2 = 2.3125
               index3 = 2
               firstOgren = 80
               secondOgren = -82
          }
          image3[0].style.transform = `translateX(${firstOgren}px)`
          image3[1].style.transform = `translateX(${secondOgren}px)`

          if (
               SectionStartogren - OgrenDuration - 150 <= WindowsPositionogren &&
               SectionStartogren - 150 >= WindowsPositionogren
          ) {
               Movehuogren += 150
               image3[0].style.transform = `translateX(${firstOgren - Movehuogren / 2.4 / index2}px)`
               image3[1].style.transform = `translateX(${secondOgren + Movehuogren / 2.72 / index3}px)`
          }
          if (
               SectionStartogren + OgrenDuration + 150 >= WindowsPositionogren &&
               SectionStartogren + 150 <= WindowsPositionogren
          ) {
               Movehuogren = Movehuogren - OgrenDuration - 150
               image3[0].style.transform = `translateX(${0 + Movehuogren / 2.4 / index2}px)`
               image3[1].style.transform = `translateX(${0 - Movehuogren / 2.72 / index3}px)`
          }
          if (SectionStartogren - 150 <= WindowsPositionogren && SectionStartogren + 150 > WindowsPositionogren) {
               image3[0].style.transform = `translateX(${0}px)`
               image3[1].style.transform = `translateX(${0}px)`
          }
     }

     window.addEventListener('resize', scrollRotate)

     return <></>
}

export default Animation
