$(document).ready(function () {
  var userNames = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas", "brunofin", "comster404"];
  var online;

  $.each(userNames, function (index, value) {
    $.getJSON('https://api.twitch.tv/kraken/streams/' + value + '?client_id=lwqoscrxiee347pi183ialxp5z7r8rq&callback=?', function (data) {
      //   console.log(data);
      if (data.hasOwnProperty('stream')) {
        data.stream === null ? online = "Offline" : online = "Online";
      }
      else {
        online = "never";
      }

      if (online === "Offline") {
        $('.Grid').append('<div class="grid-items"><div class="mini-grid"><div class="content-header"><p>' + value + '</p></div><div class="content-item"><p class="black">' + online + '</p></div></div></div>');
      }
      else if (online === "Online") {
        $('.Grid').append('<div class="grid-items"><div class="mini-grid green-active"><div class="content-header"><p>' + value + '</p><br /><p><img src="' + data.stream.preview.small + '"/></div><div class="content-item"><p><span class="black">' + online + '</span><p>' + data.stream.game + '</p>' + '<p>' + data.stream.channel.status + '</p></div></div></div>');
      }
      else if (online === "never") {
        $('.Grid').append('<div class="grid-items"><div class="mini-grid"><div class="content-header"><p>' + value + '</p></div><div class="content-item"><p class="black"> does not exist ' + '</p></div></div></div>');
      }

    });

  });




});
