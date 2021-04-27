

export const fetchVideos = () => (
    $.ajax({
        method: 'GET',
        url: '/api/videos',
       
    }) 
 );
 
 export const fetchVideo = videoId => (
     $.ajax({
         method: 'GET',
         url: `/api/videos/${videoId}`
         
     }) 
  );

  export const fetchUserVideos = userId => (
      $.ajax({
          method: 'GET',
          url: 'api/videos',
          data: {userId}
      })
  )
 
  export const fetchUserLikedVideos = userId => (
      $.ajax({
          method: 'GET',
          url: 'api/videos?likes=vids',
          data: {userId}
      })
  )
  export const fetchUserWatchedVideos = userId => (
      $.ajax({
          method: 'GET',
          url: 'api/videos?watched=vids',
          data: {userId}
      })
  )
 
 export const fetchSearchVideos = keyword => (
     $.ajax({
         method: 'GET',
         url: `/api/videos/search`,
         data: {keyword}

     })
 )  
 
 export const uploadVideo = video => (
     
     $.ajax({
         method: 'POST',
         url: '/api/videos',
         data: video,
         contentType: false,
         processData: false
        
     }) 
  );

    export const updateVideo = video => (
        $.ajax({
            method: 'PATCH',
            url: `/api/videos/${video.id}`
        })
    );
    

  export const deleteVideo = videoId => (
      $.ajax({
          method:'DELETE',
          url: `/api/videos/${videoId}`
      })
  )