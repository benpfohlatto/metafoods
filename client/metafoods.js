Meteor.subscribe('users');
console.log(Meteor.users)
// counter starts at 0
Session.setDefault('counter', 0);

Template.hello.helpers({
  counter: function () {
    return Session.get('counter');
  }
});

Template.ApplicationLayout.events({
  'click button': function () {
    // increment the counter when button is clicked
    Session.set('counter', Session.get('counter') + 1);
  },

  'click a.logout': function() {
    Meteor.logout();
  }
});