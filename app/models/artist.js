import DS from 'ember-data';


var { attr, hasMany } = DS;

export default DS.Model.extend({
  name : attr('string'),
  image: attr('string'),
  date : attr('date'),

  songs: hasMany('song', { async: true })
});
