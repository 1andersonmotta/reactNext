import React from 'react';

const VideoComponent = () => {
    return (
        <video id="video-background" autoPlay muted loop>
            <source src="images/video.mp4" type="video/mp4" />
        </video>
    );
};

export default VideoComponent;
