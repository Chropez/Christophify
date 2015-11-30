import DS from 'ember-data';

var { attr, belongsTo } = DS;

export default DS.Model.extend({
  name: attr('string'),
  length: attr('number'),
  mp3: attr('string'),
  listened: attr('number'),

  artist: belongsTo('artist')
});
