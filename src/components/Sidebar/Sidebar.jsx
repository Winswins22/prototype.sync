import React, { useState } from 'react'

import { Link } from 'react-router-dom'

import { 
  Drawer as MUIDrawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@material-ui/core'

import {
  CenteredList,
  CenteredIcon,
  CenteredItem,
  LargeListItemText
} from './SidebarElems'

import Divider from '@material-ui/core/Divider'

import { makeStyles } from '@material-ui/core/styles'

// import { MdKeyboardArrowRight } from 'react-icons/md';

import { VscGithubInverted } from 'react-icons/vsc'

const useStyles = makeStyles({
  drawer: {
    width: "240px"
  }
});

const Sidebar = () => {

  const classes = useStyles()

  const prototypeItems = [
    {
      text:"Create/Join Prototype",
      path:"/"
    },
    {
      text:"Enter tasks for your Prototype",
      path:"/tasks"
    },
    {
      text:"Prototype Timeline",
      path:"/timeline"
    }
  ]

  return(
    <>
      <MUIDrawer variant="permanent" className={classes.drawer}>

        <List>
          <ListItem>
            <ListItemText primary={"Prototype.sync()"} secondary={"v 0.1"}/>
          </ListItem>
        </List>

        <Divider></Divider>

        <List>
          {prototypeItems.map((item) => (
            <ListItem button component={Link} to={item.path} key={item.text}>
              <ListItemText secondary={item.text} />
            </ListItem>
          ))}
        </List>

        <Divider></Divider>

        <List>
          <ListItem button component={Link} to={"/join"} key={"Join an existing Prototype"}>
            <ListItemText secondary={"Join an existing Prototype"} />
          </ListItem>
        </List>

        <Divider></Divider>

        <List>
          <CenteredItem component="a" href="https://github.com/Winswins22/prototype.sync" target="_blank" rel="noopener">
            <ListItemIcon>
              <VscGithubInverted size={50}></VscGithubInverted>
            </ListItemIcon>
          </CenteredItem>
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
