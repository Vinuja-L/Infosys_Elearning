import { Box } from '@mui/system';
import React from 'react';
import AddQuestion from '../../componets/teacher/AddQuestion';

const Teachers = () => {
    return (
        <div>
            <h1>Teachers dashboard</h1>
            <Box sx={{textAlign:"right",p:1}}>
            <AddQuestion/>
            </Box>
           
        </div>
    );
};

export default Teachers;