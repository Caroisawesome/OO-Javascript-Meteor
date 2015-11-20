/*LoqustGraph = class {
​    constructor(graphType, data) {
        this.type = graphType;
        this.data = data;

        this.maxHeight = 100;
        this.minWidth = 0;
        this.maxWidth = 100;
        this.startDate = new Date();
        this.endDate = new Date();
    ​
        // nv configuration stuff
        this.chart = nv.models[this.type](); 
        this.nvData = configureData();
    }


    // reactive getters and setters
    get(property) {
        return this.property
    }

    set(property, value) {
    }
​
    configureData() {
        // configure the data in this class instance to work with graph
    }

    updateData(data) {
        this.data = data;
        this.nvData = this.configureData();
    }
    
    draw() {
        nv.addGraph(this.chart)
​
        d3.select(this.SVG_SELECTOR)
            .datum(this.nvData) 
            .on('click', clickHandeler(chart, this))
            .transition()
            .call(this.chart); 
    }
}
​*/
