import DS from 'ember-data';


var { attr, hasMany } = DS;

export default DS.Model.extend({
  name : attr('string'),
  thumbnail: attr('string'),
  coverImage: attr('string'),
  date : attr('date'),
  listened: attr('number'),

  songs: hasMany('song', { async: true })
});
