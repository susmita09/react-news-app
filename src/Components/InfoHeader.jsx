import React from 'react';
import { Box, Typography, styled } from '@mui/material';


const Container = styled(Box)(({ theme }) => ({
    background: "#f44336",
    color: "#ffff",
    display: "flex",
    alignItems: "center",
    height: "48px",
    marginBottom: "30px",
    [theme.breakpoints.down('md')]: {
        display: "none"
    }
}));



const Image = styled('img')({
    height: 34,
    '&:last-child': {
        margin: '0 50px 0 20px'
    }
})

const Text = styled(Typography)`
 margin-left :50px;
`;


const InfoHeader = () => {
    const appleStore = 'https://assets.inshorts.com/website_assets/images/appstore.png';
    const googleStore = 'https://assets.inshorts.com/website_assets/images/playstore.png';
    return (
        <Container>
            <Text>Get the latest news of all time</Text>
            <Box style={{ display: "flex", marginLeft: "auto" }}>
                <Image src={appleStore} alt="logo" />
                <Image src={googleStore} alt="logo" />
            </Box>
        </Container>
    )
}

export default InfoHeader;