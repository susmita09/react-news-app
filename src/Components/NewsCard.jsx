import React from 'react';
import { Card, CardContent, Grid, styled, Typography } from '@mui/material';

const Image = styled("img")(({ theme }) => ({
    height: "268px",
    width: "90%",
    objectFit: "cover",
    borderRadius: "5px",
    [theme.breakpoints.down('md')]: {
        width: "100%"
    }
}));

const Component = styled(Card)`
 margin-bottom : 20px;
 box-shadow : 0 2px 5px 0 rgb(0 0 0 / 16%), 0 2px 10px 0 rgb(0 0 0 / 12%);
`;
const CardComponent = styled(CardContent)`
 padding : 8px;
 padding-bottom : 4px !important;
`;

const Title = styled(Typography)`
 font-weight : 300;
 font-size : 19px;
 color : #44444d;
 line-height : 27px;
`;

const RightGrid = styled(Grid)(({ theme }) => ({
    margin: "5px 0 0 -20px",
    display: "flex",
    flexDirection: "column",

    [theme.breakpoints.between('sm', 'lg')]: {
        padding: "0 7px"
    },
    [theme.breakpoints.down('sm')]: {
        margin: "7px 0"
    },
}))

const Author = styled(Typography)`
color : #808290;
font-size : 16px;
margin-top : 5px;
line-height : 22px;
`;
const Description = styled(Typography)`
line-height : 22px;
color : #44444d;
margin-top : 10px;
`;
const Publisher = styled(Typography)`
 font-size : 14px;
 margin-top : auto;
 margin-bottom : 9px;
`;

const NewsCard = ({ data }) => {

    const fulldate = new Date(data.publishedAt);
    const date = fulldate.toString().split(" ");
    const h = parseInt(date[4].substring(0, 2));
    const time = h > 12 ? true : false;
    return (
        <Component>
            <CardComponent>
                <Grid container>
                    <Grid lg={5} sm={5} xs={12} item>
                        <Image src={data.urlToImage} alt="img" />
                    </Grid>
                    <RightGrid lg={7} md={7} sm={7} xs={12} item>
                        <Title> {data.title}</Title>
                        <Author>
                            <b>Short</b>
                            {"  "}{data.author ? data.author : "unknown"} / {" "}
                            on  {time
                                ? `${h - 12}:${date[4].substring(3, 5)} pm`
                                : `${h}:${date[4].substring(3, 5)} am`}{" "}
                            on {date[2]} {date[1]} {date[3]}, {date[0]}
                        </Author>
                        <Description>{data.description}</Description>
                        <Publisher>Read more at <a style={{ textDecoration: "none", color: "inherit", fontWeight: "bold" }} href={data.url}
                            rel="noreferrer" target="_blank">{data.source.name}</a></Publisher>
                    </RightGrid>
                </Grid>
            </CardComponent>
        </Component>
    )
}

export default NewsCard;