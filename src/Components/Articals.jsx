import React from 'react';
import { Box} from '@mui/material';


import NewsCard from './NewsCard';



const Articals = ({ newsArray }) => {
  return (

    <Box>
      {newsArray.map(news => (

        <NewsCard data={news} key={news.title} />
      ))}

    </Box>




  )
}

export default Articals;