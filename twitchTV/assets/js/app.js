$(document).ready(function(){
  // free code camp stream and status API CALL
  var url="https://api.twitch.tv/kraken/streams/freecodecamp";
  $.ajax({
    type:"GET",
    url:url,
    headers:{
      'Client-ID': 'j2hby0a1godecj1l4ak96qs1tp3y3y'
    },
    success: function(data1){
      if(data1.stream===null){
        $("#fcc-status").html("Free Code Camp is currently offline");
      }
      else{
          $("#fcc-status").html("Free Code Camp is Online");
      }
    }
  });
});
