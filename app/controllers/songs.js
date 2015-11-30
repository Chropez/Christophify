import Ember from 'ember';

export default Ember.Controller.extend({
  player: Ember.inject.service(),

  sortSongsBy: ['listened:desc'],
  sortedSongs: Ember.computed.sort('model', 'sortSongsBy'),
  actions : {
    play (song) {
      this.get('player').play(song);
    }
  }


});
