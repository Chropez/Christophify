import Ember from 'ember';

export default Ember.Route.extend({
  model({artist_id}) {
    return this.store.findRecord('artist', artist_id);
  }
});
