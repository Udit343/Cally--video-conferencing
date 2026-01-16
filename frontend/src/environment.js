let IS_PROD=true;

const server= IS_PROD ?
    
    "https://cally-video-conferencingbackend.onrender.com":

    
    "http://localhost:8080"



export default server;