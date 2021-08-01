import React, { useState } from 'react'

import { 
  Drawer as MUIDrawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@material-ui/core'

import {makeStyles} from '@material-ui/core/styles'

// import { MdKeyboardArrowRight } from 'react-icons/md';

const useStyles = makeStyles({
  drawer: {
    width: "240px"
  }
});

const Sidebar = () => {

  const classes = useStyles()

  const prototypeItems = [
    "Create/Join Prototype",
    "Enter tasks or Prototype ID",
    "Prototype Timeline"
  ]

  return(
    <>
      <MUIDrawer variant="permanent" className={classes.drawer}>
        <List>
            {prototypeItems.map((text, index) => (
              <ListItem button key={text}>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
      </MUIDrawer>
    </>
  )

} 

// const Sidebar = () => {

//   const [showSidebar, setShow] = useState(false)

//   const HiddenHitboxShowSidebar = () => {
    
//     return (
//       <div
//         style={{position:"fixed", left:"0", width:"2vw", height:"100vh"}}
//         onMouseEnter={() => setShow(true)}
//       ></div>
//     )

//   }
  
//   const ShowSidebarArrow = () => {
    
//     return(
//       <div style={{position:"fixed", height:"100vh", display:"flex", alignItems:"center"}}>
//         <MdKeyboardArrowRight 
//           size={70} 
//           style={{cursor:"pointer"}}>
//           onMouseEnter={() => setShow(true)}
//         </MdKeyboardArrowRight>
//       </div>
//     )

//   }

  

//   return (
//     <>
//       <HiddenHitboxShowSidebar></HiddenHitboxShowSidebar>
//       <ShowSidebarArrow></ShowSidebarArrow>
//     </>
//   )
// }

export default Sidebar
