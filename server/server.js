Meteor.startup(function () {
    // RUN THIS TO ADD A USER
    //var users = [
    //    {name:"Ben Pfohl",email:"benpfohl@tradodity.com",roles:['admin']}
    //];
    //
    //_.each(users, function (user) {
    //    var id;
    //
    //    id = Accounts.createUser({
    //        email: user.email,
    //        password: "Jessica-6970",
    //        profile: { name: user.name }
    //    });
    //
    //    if (user.roles.length > 0) {
    //        // Need _id of existing user record so this call must come
    //        // after `Accounts.createUser` or `Accounts.onCreate`
    //        Roles.addUsersToRoles(id, user.roles);
    //    }
    //
    //});
});

Meteor.publish(null, function (){
    return Meteor.roles.find({})
})