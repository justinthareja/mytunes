// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var NowPlayingEntryView = Backbone.View.extend({

  tagName: 'tr',

  template: _.template('<td><strong>Now Playing:</strong></td><td>(<%= artist %>)</td><td><%= title %></td>'),

  events: {
    'click': function() {
      this.model.dequeue();
    }
  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }

});
