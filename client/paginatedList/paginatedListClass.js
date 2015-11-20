PaginatedList = class {
    constructor(data, itemsPerPage) {
        this.data = data;
        this.page = 1
        this.numItems = itemsPerPage;

        this.deps = new Tracker.Dependency;
    }

    getData() {
        this.deps.depend();
        const max = this.page * this.numItems;
        const min = max - this.numItems;
        return this.data.slice(min, max);
    }

    numPages() {
        return Math.ceil(this.data.length / this.numItems);
    }

    nextPage() {
        if (this.page < this.numPages() ) {
            this.page += 1;
            this.deps.changed();
        }
    }

    previousPage() {
        if (this.page > 1) {
            this.page -=1;
            this.deps.changed();
        }
    }

    goToPage(num) {
        if ( num >= 1 && num <= this.numPages()) {
            this.page = num;
            this.deps.changed();
        }
    }

    getCurrentPage() {
        this.deps.changed();
        return this.page;
    }

    getButtonData() {
        let pages = this.numPages()
        let numArray = [];
        _.times(pages, function(n) {
            if (n < pages) {
                numArray.push({ pageNumber: n + 1 });
            }
        });
        return numArray;
    }
}