import Ember from 'ember';

export function formatTime([time]/*, hash*/) {
  const minutes = Math.floor(time/60);
  const seconds = time - minutes*60;
  return `${minutes}:${seconds}`;
}

export default Ember.Helper.helper(formatTime);
