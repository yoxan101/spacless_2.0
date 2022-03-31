import Header from './Header'
import Bubbles from './Bubbles'
import Button from './Button'
import Hero from './Hero'
import gsap from 'gsap'
import { useEffect, useRef } from 'react'

const Content = () => {

  let currentComponent;

  /// simple routing
  if(window.location.pathname == "/"){
    currentComponent = <Hero/>
  }else if(window.location.pathname == "/about"){
    currentComponent = <Button/>
  }

  const bubblesAnimation = useRef([])
  bubblesAnimation.current = []

  const addBublesToRefs = (el) =>{
    bubblesAnimation.current.push(el)
  }

  useEffect(() => {
    gsap.fromTo(bubblesAnimation.current,{
      opacity: 0,
      y: '50px',
    },{
      y: 'default',
      opacity: 0.3,
      stagger: 0.3,
      duration: 0.8,
    })
  })

  return (
    <div className='Content'>
        <Header></Header>
        <div className='bubbleContainer'>
          <Bubbles size="100px" horPosition="65%" verPosition="20%" opacity="0.2" reference={addBublesToRefs} ></Bubbles>
          <Bubbles size="200px" horPosition="70%" verPosition="30%" opacity="0.2" reference={addBublesToRefs}></Bubbles>
          <Bubbles size="150px" horPosition="70%" verPosition="55%" opacity="0.2" reference={addBublesToRefs}></Bubbles>
          <Bubbles size="50px" horPosition="80%" verPosition="50%" opacity="0.2" reference={addBublesToRefs}></Bubbles>
        </div>
        {currentComponent}
    </div>
  )
}

export default Content