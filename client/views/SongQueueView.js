// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  tagName: "table",
  className: "queue-table",

  initialize: function(params) {
    this.collection.on('add', function () {
      this.render();
    }, this);

    this.collection.on('remove', function () {
      this.render();
    }, this);
    this.render();
  },


  render: function(){
    // to preserve event handlers on child nodes, we must call .detach() on them before overwriting with .html()
    // see http://api.jquery.com/detach/

    this.$el.children().detach();

    this.$el.html('<th class="queue">Queue</th>').append(
      this.collection.map(function(song,index){
        if (index !== 0) {
        return new SongQueueEntryView({model: song}).render();
        }
      })
    );
  }



});
