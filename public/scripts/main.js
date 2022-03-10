var socket = io();

$('#form').submit(function () {
   // insert emitting message code here
   var message = $('#input').val();
   var username = $('#username').val();
   if (message && username) {
        socket.emit('chat message',{ "message":message, "username":username });
       $('#input').val("");
   }
   return false;
});

socket.on('chat message', function(msg){
    // insert code for displaying msg
    $('#messages').append("<li>" + msg.username + ": " + msg.message + "</li>");
    window.scrollTo(0, document.body.scrollHeight);
});

