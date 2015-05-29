// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(params){

    this.on("add", function() {
      if (this.length === 1) {
        this.playFirst();
      }
    });

    this.on("ended", function() {
      this.playNext();
    });

    this.on("dequeue", function(song){
      if (song === this.first()) {
        this.playNext();
      }
      this.remove(song);
    });

  },

  playFirst: function(params){
    this.first().play();
  },

  playNext: function() {
    this.shift();

    if (this.length !== 0) {
      this.playFirst();
    } else {
      this.trigger('stop');
    }
  }

});
