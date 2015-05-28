// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  // model: SongModel

  initialize: function(){
    this.on("add", function() {
      console.log("SongQueue heard add event");
      if (this.length === 1) {
        this.playFirst();
      }
    });

    this.on("ended", function() {
      console.log("SongQueue heard ended event");
      this.shift();
      if (this.length !== 0) {
        this.playFirst();
      }
    });

    this.on("dequeue", function(song){
      this.remove(song);
    });
  },

  playFirst: function(){
    this.first().play();
  }



});
