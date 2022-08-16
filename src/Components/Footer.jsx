import { styled, Box } from '@mui/material';
import { Facebook, Instagram, LinkedIn } from '@mui/icons-material'


const FooterContainer = styled(Box)`
background-color: #222;
display: flex;
flex-direction: column;
align-items: center;
color: white;
`;
const Name = styled(Box)`
    font - size: 20px;
    padding: 20px 30px 15px;
    color: white;
    `;





const IconContainer = styled(Box)`
    width: 60 %;
    height: 50px;
    padding: 20px 0;
    display : flex;
    align-items: center;
    justify-content: space-evenly;
  `;



const Footer = () => {
    return (
        <FooterContainer>
            <Name component="span">
                Inshorts clone made by -{" "}
                <a href="/" target="__blank">
                    Susmita
                </a>
            </Name>
            <hr style={{ width: "90%" }} />
            <IconContainer>

                <Instagram />


                <LinkedIn />

                <Facebook />

            </IconContainer>
        </FooterContainer>
    );
};

export default Footer;