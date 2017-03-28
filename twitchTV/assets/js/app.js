$(document).ready(function(){
  // free code camp stream and status API CALL
  var url="https://wind-bow.gomix.me/twitch-api/freecodecamp"
  $.ajax({
    type:"GET",
    url:url,
    headers:{
      'Client-ID': 'j2hby0a1godecj1l4ak96qs1tp3y3y'
    },
    success: function(data1){
      console.log(data1);
    }
  });
});
