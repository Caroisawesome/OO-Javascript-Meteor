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

    nextPage() {

    }

    previousPage() {

    }

    goToPage(num) {

    }

    getCurrentPage() {
        return this.page;
    }

    getButtonData() {
        let count = this.data.length;
        let pages = Math.ceil(count / this.numItems);
        let numArray = [];
        _.times(pages, function(n) {
            if (n < pages) {
                numArray.push({ pageNumber: n + 1 });
            }
        });
        return numArray;
    }
}