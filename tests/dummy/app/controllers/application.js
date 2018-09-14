import Ember from 'ember';
import bootstrap from 'bootstrap';

export default Ember.Controller.extend({
  actions: {
    open(){
      bootstrap.alert('Bootstrap is loaded!');
    }
  }
});
