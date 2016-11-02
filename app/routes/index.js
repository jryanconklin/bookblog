import Ember from 'ember';
import config from '../config/environment';

export default Ember.Route.extend({
  key: config.myApiKey,

  model: function() {
    var url = 'https://api.nytimes.com/svc/books/v3/lists/overview.json?'+this.key;
    return Ember.$.getJSON(url).then(function(responseJSON) {

      console.log(responseJSON.results.lists[2].books);

      // var hardCoverFiction = responseJSON.results.lists[2].books;
      //   for (var i = 0; i < hardCoverFiction.length; i++) {
      //     return hardCoverFiction[i].author;
      //   }

      // for (var i = 0; i <= 19; i++) {
      //   console.log(responseJSON.results.lists[i].display_name);
      // }


      return responseJSON.results.lists[2].books;
    });


  } //End Model
}); //End Ember.Route
