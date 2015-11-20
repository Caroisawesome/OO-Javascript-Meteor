class PaginatedList {
    constructor(data, itemsPerPage) {
        this.data = data;
        this.page = 1
        this.numItems = itemsPerPage;
    }

    getData() {

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
}