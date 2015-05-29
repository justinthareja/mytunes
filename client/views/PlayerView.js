// PlayerView.js - Defines a backbone view class for the music player.
var PlayerView = Backbone.View.extend({

  // HTML5 (native) audio tag is being used
  // see: https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Using_HTML5_audio_and_video
  el: '<audio class="audioplayer" controls autoplay/>',

  events: {
    'ended': function() {
      this.model.ended();
      this.stopSurfer();
    },
    'play': function() {
      // this.model.isPlaying();
      this.startSurfer();

    },
    'pause': function() {
      this.stopSurfer();
    },

    'stop': function() {
      this.stopSurfer();
    },

  },

  startSurfer: function () {
    $("#logodiv").removeClass("staticlogo");
    $("#logodiv").addClass("logo");
  },

  stopSurfer: function () {
    $("#logodiv").removeClass("logo");
    $("#logodiv").addClass("staticlogo");
  },

  setSong: function(song){
    this.model = song;
    if (this.model.get('src') === undefined) {
      this.el.pause();
    }
    this.render();
  },

  render: function(){
    return this.$el.attr('src', this.model.get("url") ? this.model.get('url') : '');
  }

});
