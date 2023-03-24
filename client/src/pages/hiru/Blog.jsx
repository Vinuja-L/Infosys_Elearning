import { Box } from '@mui/system';
import React from 'react';
import AddArticle from "../../componets/article/AddArticle"
import ViewArticle from "../../componets/article/ViewArticle";

const Blog = () => {
    return (
        <div>
            <h1>Blog</h1>
            <Box sx={{textAlign:"right",p:1}}>
            <AddArticle/>
            </Box>
            <ViewArticle/>
            
        </div>
    );
};

export default Blog;