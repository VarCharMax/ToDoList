export class Filter {
    search?: string = '';
    related: boolean = false;

    reset() {
        this.related = false;
        this.search = undefined;
    }
}
