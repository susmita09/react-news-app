import React from 'react';
import { AppBar, Toolbar, styled } from '@mui/material';


import SwipeableTemporaryDrawer from './Drawer';


const StyledHeader = styled(AppBar)`
 background : white;
 height : 70px;
`;

//normal html tag
const Image = styled('img')({
    height: "55px",
    margin: "auto",
    paddingRight: "70px"
})

const Header = ({setCategory}) => {
    const url = 'https://assets.inshorts.com/website_assets/images/logo_inshorts.png'
    return (
        <StyledHeader position='static'>
            <Toolbar>

                <SwipeableTemporaryDrawer setCategory={setCategory}/>
                <Image src={url} alt="logo" />
            </Toolbar>
        </StyledHeader>
    )
}

export default Header;