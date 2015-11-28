import Ember from 'ember';

export default Ember.Service.extend({
  currentSong: null,
  playing: false,

  audio: new Audio(),

  play(song) {

    if(!song) {
      this.unpause();
      return;
    }
    this.set('currentSong', song);
    const { audio, 'currentSong.mp3' : mp3 } = this.getProperties('audio', 'currentSong.mp3');

    audio.src = mp3;
    this.set('playing', true);
    audio.play();
  },

  pause() {
    const audio = this.get('audio');
    this.set('playing', false);
    audio.pause();
  },

  unpause() {
    const { audio} = this.getProperties('audio');
    if(Ember.isBlank(audio.src)) {
      console.log("Can't unpause. No source found on audio");
      return ;
    }

    this.set('playing', true);
    audio.play();
  }

});
