PaginatedList = class {
    constructor(data, itemsPerPage) {
        this.data = data;
        this.page = 1
        this.numItems = itemsPerPage;
    }

    getData() {
        const max = this.page * this.numItems;
        const min = max - this.numItems;
        return this.data.slice(min, max);
    }

    numPages() {
        return Math.ceil(this.data.length / this.numItems);
    }

    nextPage() {
        if (this.page < this.numPages() ) this.page += 1;
    }

    previousPage() {
        if (this.page > 1) this.page -=1;
    }

    goToPage(num) {

    }

    getCurrentPage() {
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