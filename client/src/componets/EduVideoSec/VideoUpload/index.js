import { Button } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import Dropzone from "react-dropzone";
import VideoView from "../VideoView"
// import './Style.scss';

function UploadVideo() {
  const [videos, setVideos] = useState([]);

  const handleUpload = (acceptedFiles) => {
    const newVideos = acceptedFiles.map((file) =>
      Object.assign(file, {
        preview: URL.createObjectURL(file),
      })
    );
    setVideos((prevVideos) => [...prevVideos, ...newVideos]);
  };
  console.log(videos, "videos");

  return (
    <div>
      <Box sx={{ p: 1, textAlign: "center"}}>
        <Dropzone onDrop={handleUpload}>
          {({ getRootProps, getInputProps }) => (
            <Box component="span" sx={{ p: 2, border: "2px dashed grey" ,backgroundColor:"#263238" }}>
              <Button>
                <div {...getRootProps()}>
                  <input {...getInputProps()} />
                  <p>Drag and drop some Education Videos here, or click to select Education Videos files</p>
                </div>
              </Button>
            </Box>
          )}
        </Dropzone>
      </Box>
<br/>
      {/* {videos !== [] ? <VideoView videos={videos} /> : null} */}
      {videos.map((video) => (
              <VideoView videos={video} /> 
            ))}
    </div>
  );
}

export default UploadVideo;
