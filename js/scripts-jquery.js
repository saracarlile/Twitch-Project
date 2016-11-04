$(document).ready(function () {
  var userNames = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas", "brunofin", "comster404"];
  var online;
  $.each(userNames , function (index, value){
  console.log(index + ':' + value); 
  $.getJSON('https://api.twitch.tv/kraken/streams/' + value + '?client_id=3ayqtffruo2goxf0cvyp75wjm28g4pq&callback=?', function (data) {
    console.log(data);
    if(data.stream == null ){
      online = "offline";
    }
    else{
      online = "online";
    }
    $('.Grid').append('<div class="grid-items"><p>' + value +  '  ' + online + '</p></div>');
  });

});



});
