
Template.listExample.onCreated(function() {
    const instance = this;
    const items = generateItems()

    instance.list = new PaginatedList(items, 10);
});

Template.listExample.helpers({
    listItems: function() {
        return Template.instance().list.getData();
    },
    getListButtons: function() {
        return Template.instance().list.getButtonData();
    },
    isActive: function() {
        return this === Template.instance().list.getCurrentPage() ? 'active': '';
    }
})

Template.listExample.events({
    'click .btn-next': function(e, instance) {
        instance.list.nextPage();
    },

    'click .btn-previous': function(e, instance) {
        instance.list.previousPage();
    },

    'click .load-page-range': function(e, instance) {
        instance.list.goToPage(parseInt(e.currentTarget.getAttribute('data-page')));
    }
})

const generateItems = (array = []) => {
    _.times(88, () => {
        array.push({
            name: Fake.word(),
            description: Fake.sentence()
        })
    })
    return array;
}