
Router.configure({
    layoutTemplate: 'ApplicationLayout'
});

Router.onBeforeAction(function () {
    // all properties available in the route function
    // are also available here such as this.params
    if (!Meteor.userId()) {
        // if the user is not logged in, render the Login template
        this.render('Login');
    } else {
        // otherwise don't hold up the rest of hooks or our route/action function
        // from running
        this.next();
    }
});

Router.route('/login', function () {
    this.layout('loginWrapper');
});

Router.route('/', function () {
    this.render('sidebar');
    this.render('homeDashboard');
});

Router.route('/organizations', function () {
    this.render('organizations');
});
