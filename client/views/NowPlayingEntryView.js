// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var NowPlayingEntryView = Backbone.View.extend({

  tagName: 'tr',

  template: _.template('<td><strong>Now Playing:</strong></td><td>(<%= artist %>)</td><td><%= title %></td>'),

  // events: {
  //   'click': function() {
  //     console.log("SongQueueEntryView heard click and fired model.dequeue");
  //     this.model.ended();
  //   }
  // },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }

});
