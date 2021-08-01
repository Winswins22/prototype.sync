import React, { useState } from 'react'

import { MdKeyboardArrowRight } from 'react-icons/md';


const Sidebar = () => {

  const [showSidebar, setShow] = useState(false)

  const HiddenHitboxShowSidebar = () => {
    
    return (
      <div
        style={{position:"fixed", left:"0", width:"2vw", height:"100vh"}}
        onMouseEnter={() => setShow(true)}
      ></div>
    )

  }
  
  const ShowSidebarArrow = () => {
    
    return(
      <div style={{position:"fixed", height:"100vh", display:"flex", alignItems:"center"}}>
        <MdKeyboardArrowRight 
          size={70} 
          style={{cursor:"pointer"}}>
          onMouseEnter={() => setShow(true)}
        </MdKeyboardArrowRight>
      </div>
    )

  }

  

  return (
    <>
      <HiddenHitboxShowSidebar></HiddenHitboxShowSidebar>
      <ShowSidebarArrow></ShowSidebarArrow>
    </>
  )
}

export default Sidebar
