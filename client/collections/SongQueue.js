// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  // model: SongModel

  initialize: function(){
    this.on("add", function() {
      if (this.length === 1) {
        this.playFirst();
      }
    });

    this.on("ended", function(song) {
      console.log("heard ended");
      this.shift();
      // this.playFirst();
    });
  },



  playFirst: function(){
    this.first().play();
    // this.first().dequeue();
  }



});
