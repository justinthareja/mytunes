// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  // model: SongModel

  initialize: function(){
    this.on("add", function() {
      this.playFirst();
    });
  },

  playFirst: function(){
    this.first().play();
  }



});
