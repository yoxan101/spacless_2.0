import Header from './Header'
import Bubbles from './Bubbles'
import Hero from './Hero'
import gsap from 'gsap'
import { useEffect, useRef } from 'react'

const Content = () => {

  // let currentComponent;
  // const bubblesAnimation = useRef([])
  // bubblesAnimation.current = []

  // const addBublesToRefs = (el) =>{
  //   bubblesAnimation.current.push(el)
  // }

  // useEffect(() => {
  //   gsap.fromTo(bubblesAnimation.current,{
  //     opacity: 0,
  //   },{
  //     opacity: 1,
  //   })
  // })
  

  // if(window.location.pathname == "/"){
  //   currentComponent = <Hero/>
  // }


  return (
    <div className='Content'>
        <Header></Header>
        <Bubbles size="100px" horPosition="65%" verPosition="20%" opacity="0.2"></Bubbles>
        <Bubbles size="200px" horPosition="70%" verPosition="30%" opacity="0.2" ></Bubbles>
        <Bubbles size="150px" horPosition="70%" verPosition="55%" opacity="0.2" ></Bubbles>
        <Bubbles size="50px" horPosition="80%" verPosition="50%" opacity="0.2" ></Bubbles>
        <Hero/>
    </div>
  )
}

export default Content