import Ember from 'ember';

export default Ember.Component.extend({
  // service
  player: Ember.inject.service('player'),

  song: Ember.computed.alias('player.currentSong'),

  // computed
  isPlaying : Ember.computed.alias('player.playing'),
  hasSong : Ember.computed.notEmpty('player.currentSong'),

  // actions
  actions: {
    play() {
      this.get('player').play();
    },
    pause() {
      this.get('player').pause();
    }
  }
});
