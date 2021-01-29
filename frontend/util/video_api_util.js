

export const fetchVideos = () => (
    $.ajax({
        method: 'GET',
        url: '/api/videos',
        data: {user}
    }) 
 );
 
 export const fetchVideo = videoId => (
     $.ajax({
         method: 'GET',
         url: `/api/videos/${videoId}`
         
     }) 
  );
 
 
 export const uploadVideo = video => (
     $.ajax({
         method: 'POST',
         url: '/api/videos',
         data: {video}
        
     }) 
  );

  //   export const updateVideo = video

  // export const deleteVideo 