/*Template.randomGraph.onCreated(function() {
    this.lineChart = new LoqustGraph('lineGraph', );
});
​
Template.randomGraph.onRendered(function() {
    this.lineChart.draw(); 
​
    this.autorun(() => {
        const newData; //look for changes in data (maybe through reactive vars being passed into the template)
​
        this.lineChart.updateData( newData ) // pass the new data into the graph object
​
        // re-render the graph
        this.lineChart.draw();
    })
});
​
Template.randomGraph.helpers({
    getStartDate() {
        return Template.instance().lineChart.get('startDate');
    }
});

Template.randomGraph.events({
    'click .set-start-date': function(e, instance) {
        instance.lineChart.set('startDate', e.target.value);
    }
})*/