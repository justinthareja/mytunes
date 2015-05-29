// SongQueueView.js - Defines a backbone view class for the song queue.
var NowPlayingView = Backbone.View.extend({

  tagName: "table",
  className: "nowplaying",

  initialize: function(params) {
    this.collection.on('add', function () {
      this.render();
    }, this);

    this.collection.on('remove', function () {
      this.render();
    }, this);
  },


  render: function(){
    // to preserve event handlers on child nodes, we must call .detach() on them before overwriting with .html()
    // see http://api.jquery.com/detach/

    this.$el.children().detach();

    this.$el.html('<th></th>').append(
      this.collection.map(function(song,index){
        if (index === 0) {
        return new NowPlayingEntryView({model: song}).render();
        }
      })
    );
  }



});
