Meteor.methods({
    addOrg: function(org){
        Organizations.update(this._id, {});
    }
});