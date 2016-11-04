$(document).ready(function () {
  var userNames = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas", "brunofin", "comster404"];

  $.each(userNames , function (index, value){
  console.log(index + ':' + value); 
  $.getJSON('https://api.twitch.tv/kraken/streams/' + value + '?client_id=3ayqtffruo2goxf0cvyp75wjm28g4pq&callback=?', function (data) {
    console.log(data);
  });

});


  $.getJSON('https://api.twitch.tv/kraken/streams/freecodecamp?client_id=3ayqtffruo2goxf0cvyp75wjm28g4pq&callback=?', function (data) {
  //  console.log(data);
  });
  $.getJSON('https://api.twitch.tv/kraken/streams/ESL_SC2?client_id=3ayqtffruo2goxf0cvyp75wjm28g4pq&callback=?', function (data) {
  //  console.log(data);
  });
  $.getJSON('https://api.twitch.tv/kraken/streams/OgamingSC2?client_id=3ayqtffruo2goxf0cvyp75wjm28g4pq&callback=?', function (data) {
  //  console.log(data);
  });
  $.getJSON('https://api.twitch.tv/kraken/streams/cretetion?client_id=3ayqtffruo2goxf0cvyp75wjm28g4pq&callback=?', function (data) {
 //   console.log(data);
  });




//$.getJSON('https://api.twitch.tv/kraken/streams/' + channel + '?client_id=3ayqtffruo2goxf0cvyp75wjm28g4pq&callback=?', function(data) { ... });

});
