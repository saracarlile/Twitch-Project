$(document).ready(function () {
  var userNames = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas", "brunofin", "comster404"];
  var online;
  $.each(userNames, function (index, value) {
    $.getJSON('https://api.twitch.tv/kraken/streams/' + value + '?client_id=lwqoscrxiee347pi183ialxp5z7r8rq&callback=?', function (data) {
      console.log(data);
      if( data.hasOwnProperty('stream')){
        data.stream  === null ? online = "offline" : online = "online";
      }
      else{
        online = "never";
      }
     
  //      console.log(data.stream.game);
   //     console.log(data.stream.preview.medium);
  //      console.log(data.stream.channel.status);
    
     if(online === "offline"){
         $('.Grid').append('<div class="grid-items"><div class="mini-grid"><div class="content-header"><p>' + value + '</p></div><div class="content-item"><p>' + online + '</p></div></div></div>');
     }
     else if (online === "online"){
        $('.Grid').append('<div class="grid-items"><div class="mini-grid"><div class="content-header"><p>' + value + '</p></div><div class="content-item"><p>' + online +'<br/>Game: '+ data.stream.game + ' <br/>Status: ' + data.stream.channel.status +'</p></div></div></div>');
     }
     else if (online === "never") {
         $('.Grid').append('<div class="grid-items"><div class="mini-grid"><div class="content-header"><p>' + value + '</p></div><div class="content-item"><p> does not exist ' +'</p></div></div></div>');
     }
   
    });

  });



});
