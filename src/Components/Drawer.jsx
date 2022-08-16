import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';

import ListItemText from '@mui/material/ListItemText';

import { Menu } from '@mui/icons-material';
import categories from '../data/Category';

const SwipeableTemporaryDrawer = ({setCategory}) => {
    const [state, setState] = React.useState({
        left: false,

    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (
            event &&
            event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')
        ) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 200, paddingLeft: "10px", paddingRight: "5px" }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>

                <ListItem >
                    Categories
                </ListItem>

            </List>
            <Divider />
            <List>
                {categories.map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton onClick={()=> setCategory(text)}>

                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <div>

            <React.Fragment key={"left"}>
                <Button onClick={toggleDrawer("left", true)}>
                    <Menu />
                </Button>
                <SwipeableDrawer
                    left={"left"}
                    open={state["left"]}
                    onClose={toggleDrawer("left", false)}
                    onOpen={toggleDrawer("left", true)}
                >
                    {list("left")}
                </SwipeableDrawer>
            </React.Fragment>

        </div>
    );
}

export default SwipeableTemporaryDrawer;
