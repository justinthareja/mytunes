// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(params){

    this.nowPlaying = false;

    this.on("add", function() {
      if (this.nowPlaying === false) {
        this.playFirst();
      }
    });

    this.on("ended", function() {
      // console.log("SongQueue heard ended event");
      this.nowPlaying = false;
      this.shift();
      if (this.length !== 0) {
        this.playFirst();
      }
    });

    this.on("isPlaying", function() {
      this.nowPlaying = true;
    });

    this.on("dequeue", function(song){
      this.remove(song);
    });

  },

  playFirst: function(params){
    this.first().play();
  },




});
