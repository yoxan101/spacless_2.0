import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'

const Hero = () => {
  const letter = useRef([])
  const keybordKeys = useRef([])
  const keybordKeySpace = useRef([])
  
  const tablet = useRef()
  const tabletKeybord = useRef()
  const textContainer = useRef()

  letter.current = []

  const addLetterToRefs = (el) =>{
    letter.current.push(el)
  }

  const addKeysToRefs = (el) =>{
    keybordKeys.current.push(el)
  }

  const heroTl = gsap.timeline()

  useEffect(() => {
    heroTl.fromTo(tablet.current, {
      scale: 0.5,
      opacity: 0,
    }, {
      scale: 1.5,
      opacity: 1,
      duration: 1.6,
      ease: 'Power4.easeOut',
    }).fromTo(letter.current, {
      opacity: 0,
    }, {
      opacity: 1,
      duration: 1.3,
      stagger: 0.1,
      ease: 'Power4.easeOut',
    }, '-=0.7').to(tabletKeybord.current, {
      y: '100%',
      opacity: 0,
      ease: 'Power4.ease',
    },'-=1.1').to(tablet.current,{
      rotate: '90deg',
      ease: 'Power4.easeOut',
      duration: 1.5,
    },'-=0.8').to(textContainer.current,{
      y: '-50%',
      x: '30px',
      scale: 1.4,
      duration: 0.5,
    }, '-=1.5')
  })

  return (
    <div className='welcomeText'>
        <div className="textContainer" ref={textContainer}>
          <span className='letter' ref={addLetterToRefs}>S</span>
          <span className='letter' ref={addLetterToRefs}>t</span>
          <span className='letter' ref={addLetterToRefs}>a</span>
          <span className='letter' ref={addLetterToRefs}>n</span>
          <span className='letter' ref={addLetterToRefs}>d</span>
          <span className='letter' ref={addLetterToRefs}>&nbsp;o</span>
          <span className='letter' ref={addLetterToRefs}>u</span>
          <span className='letter' ref={addLetterToRefs}>t</span><br></br>
          <span className='letter' ref={addLetterToRefs}>A</span>
          <span className='letter' ref={addLetterToRefs}>m</span>
          <span className='letter' ref={addLetterToRefs}>o</span>
          <span className='letter' ref={addLetterToRefs}>n</span>
          <span className='letter' ref={addLetterToRefs}>g</span>
          <span className='letter' ref={addLetterToRefs}>&nbsp;t</span>
          <span className='letter' ref={addLetterToRefs}>h</span>
          <span className='letter' ref={addLetterToRefs}>e</span>
          <span className='letter' ref={addLetterToRefs}>&nbsp;b</span>
          <span className='letter' ref={addLetterToRefs}>e</span>
          <span className='letter' ref={addLetterToRefs}>s</span>
          <span className='letter' ref={addLetterToRefs}>t</span>
        </div>
        <svg width="229" height="306" viewBox="0 0 229 306" fill="none" xmlns="http://www.w3.org/2000/svg" ref={tablet}>
          <rect width="229" height="306" rx="20" fill="#324D5B" />
          <rect x="12" y="12" width="206" height="268" fill="#222628" />
          <g className='keybord' ref={tabletKeybord}>
            <rect x="12" y="191" width="206" height="89" fill="#6F8591" />
            <rect x="49" y="252" width="132" height="20" fill="#B5C7D1" ref={keybordKeySpace} />
            <rect x="21" y="198" width="20" height="20" fill="#B5C7D1" ref={addKeysToRefs} />
            <rect x="49" y="198" width="20" height="20" fill="#B5C7D1" ref={addKeysToRefs}/>
            <rect x="77" y="198" width="20" height="20" fill="#B5C7D1" ref={addKeysToRefs}/>
            <rect x="105" y="198" width="20" height="20" fill="#B5C7D1" ref={addKeysToRefs}/>
            <rect x="133" y="198" width="20" height="20" fill="#B5C7D1" ref={addKeysToRefs}/>
            <rect x="161" y="198" width="20" height="20" fill="#B5C7D1" ref={addKeysToRefs}/>
            <rect x="189" y="198" width="20" height="20" fill="#B5C7D1" ref={addKeysToRefs}/>
            <rect x="21" y="225" width="20" height="20" fill="#B5C7D1" ref={addKeysToRefs}/>
            <rect x="49" y="225" width="20" height="20" fill="#B5C7D1" ref={addKeysToRefs}/>
            <rect x="77" y="225" width="20" height="20" fill="#B5C7D1" ref={addKeysToRefs}/>
            <rect x="105" y="225" width="20" height="20" fill="#B5C7D1" ref={addKeysToRefs}/>
            <rect x="133" y="225" width="20" height="20" fill="#B5C7D1" ref={addKeysToRefs}/>
            <rect x="161" y="225" width="20" height="20" fill="#B5C7D1" ref={addKeysToRefs}/>
            <rect x="189" y="225" width="20" height="20" fill="#B5C7D1" ref={addKeysToRefs}/>
            <rect x="21" y="252" width="20" height="20" fill="#B5C7D1" ref={addKeysToRefs}/>
            <rect x="189" y="252" width="20" height="20" fill="#B5C7D1" ref={addKeysToRefs}/>
          </g>
          <rect y="280" width="229" height="26" rx="13" fill="#324D5B" />
          <path d="M123.335 293C123.335 298.247 119.081 302.5 113.835 302.5C108.588 302.5 104.335 298.247 104.335 293C104.335 287.753 108.588 283.5 113.835 283.5C119.081 283.5 123.335 287.753 123.335 293Z" fill="#243137" />
        </svg>
    </div>
  )
}

export default Hero