$(document).ready(function () {
  var userNames = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas", "brunofin", "comster404"];
  var online;

  $.each(userNames, function (index, value) {  //build DOM from API results sending userNames array
    $.getJSON('https://api.twitch.tv/kraken/streams/' + value + '?client_id=lwqoscrxiee347pi183ialxp5z7r8rq&callback=?', function (data) {
      console.log(data);
      if (data.hasOwnProperty('stream')) {
        data.stream === null ? online = "Offline" : online = "Online";
      }
      else {
        online = "never";
      }

      if (online === "Offline") {
        $('.Grid').append('<div class="grid-items"><div class="mini-grid non-active"><div class="content-header"><p><a href="https://www.twitch.tv/' + value + '" target="blank" >' + value + '</a></p></div><div class="content-item"><p>' + online + '</p></div></div></div>');
      }
      else if (online === "Online") {
        $('.Grid').append('<div class="grid-items"><div class="mini-grid green-active"><div class="content-header"><p><a href="https://www.twitch.tv/' + value + '" target="blank">' + value + '<a/></p><br /><p><img src="' + data.stream.preview.small + '"/></div><div class="content-item"><p class="black">' + online + '<p><strong>Game: </strong>' + data.stream.game + '</p>' + '<p><strong>Status: </strong>' + data.stream.channel.status + '</p></div></div></div>');
      }
      else if (online === "never") {
        $('.Grid').append('<div class="grid-items"><div class="mini-grid non-active"><div class="content-header"><p>' + value + '</p></div><div class="content-item"><p> does not exist ' + '</p></div></div></div>');
      }
    });

  });


  $('#offline').on('click', function () {
    $('.green-active').css('display', 'none');
    $('.non-active').css('display', 'flex');
    $('#offline').css('background-color', '#33b5e5');
    $('#all, #online').css('background-color', '#bdbdbd');
  });

  $('#online').on('click', function () {
    $('.green-active').css('display', 'flex');
    $('.non-active').css("display", 'none');
    $('#online').css('background-color', '#33b5e5');
    $('#all, #offline').css("background-color", "#bdbdbd");

  });

  $('#all').on('click', function () {
    $('.green-active').css('display', 'flex');
    $('.non-active').css('display', 'flex');
    $('#all').css('background-color', '#33b5e5');
    $('#online, #offline').css('background-color', '#bdbdbd');

  });




});
