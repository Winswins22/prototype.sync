import styled from 'styled-components'

import { 
  Drawer as MUIDrawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@material-ui/core'

export const CenteredList = styled(List)`
  display: flex;
  justify-content: center;
`

export const CenteredIcon = styled(ListItemIcon)`
  display: flex;
  justify-content: center;
`

export const CenteredItem = styled(ListItem)`
  display: flex;
  justify-content: center;
`

export const LargeListItemText = styled(ListItemText)`
  font-size: 2rem
`