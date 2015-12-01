import Ember from 'ember';

export default Ember.Controller.extend({
  songs: Ember.computed.alias('model'),
  player: Ember.inject.service(),

  sortSongsBy: ['listened:desc'],
  sortedSongs: Ember.computed.sort('songs', 'sortSongsBy'),
  actions : {
    play (song) {
      this.get('player').play(song);
    }
  },

  // Test case of fat arrow
  sortedSongs2: Ember.computed('songs', function() {
    const songs = this.get('songs').toArray();

    songs.sort((a,b) => {
      return this.sortByListened(a,b);
    });
    return songs;
  }),

  sortByListened(a, b){
    return b.get('listened') - a.get('listened') ;
  }



});
