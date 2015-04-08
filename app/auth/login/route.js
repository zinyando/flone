import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    facebookLogin: function() {
      var route = this, controller = this.controllerFor('auth.login');
      this.get('session').authenticate('simple-auth-authenticator:torii', 'facebook-oauth2').then(function(){
        controller.set('success', 'success');
        route.transitionTo('user');
      }, function(error){
        controller.set('error', 'Could not sign you in: '+error.message);
      });
      return;
    }
  }
});
