// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  // initialize: function() {
  // },

  // render: function() {
  //   return this.$el;
  // }

  tagName: "table",

  initialize: function(params) {
    // this.render();
    // this.model.on('change:currentSong', function(model){
    //   this.playerView.setSong(model.get('currentSong'));
    // }, this);
    // this.render();
    // console.log(this.collection);
    // params.collection.on('change:songQueue', function (song) {
    //   console.log("songqv heard change")
    //   this.render();
    // }, this);

    this.collection.on('enqueue', function(model){
      console.log("SongQueueView heard enqueue and rendered");
      this.render();
    }, this);

    this.collection.on('dequeue', function(model){
      console.log("SongQueueView heard dequeue and rendered");
      this.render();
    }, this);


    // params.collection.on('dequeue', function (song) {
    //   this.render();
    // }, this);
  },


  render: function(){
    // to preserve event handlers on child nodes, we must call .detach() on them before overwriting with .html()
    // see http://api.jquery.com/detach/

    this.$el.children().detach();

    this.$el.html('<th>Queue</th>').append(
      this.collection.map(function(song){
        return new SongQueueEntryView({model: song}).render();
      })
    );
  }



});
