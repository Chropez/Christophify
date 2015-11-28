import Ember from 'ember';

export default Ember.Controller.extend({
  player: Ember.inject.service(),

  actions : {
    play (song) {
      this.get('player').play(song);
    }
  }


});
