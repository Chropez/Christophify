import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('artists');
  this.route('artist', { path: '/artists/:artist_id'});
  this.route('songs');
});

export default Router;
