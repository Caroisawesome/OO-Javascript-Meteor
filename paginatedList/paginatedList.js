Template.listExample.onCreated(function() {
    const instance = this;
    const notifications = Notifications.find().fetch()

    //how do we make this reactive? 
    instance.list = new PaginatedList(notifications, 10);
});

Template.listExample.helpers({
    notifications: function() {
        return Template.instance().list.getData();
    },

    activePage: function() {
        return this === Template.instance().list.getCurrentPage();
    }
})

Template.listExample.events({
    'click .btn-next': function(e, instance) {
        instance.list.nextPage();
    },

    'click .btn-previous': function(e, instance) {
        instance.list.previousPage();
    },

    'click .page-number': function(e, instance) {
        instance.list.goToPage(e.currentTarget.value);
    }
})