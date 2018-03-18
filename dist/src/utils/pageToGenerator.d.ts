/**
 * Turns a function that resolves with a page of items into a generator-powered iterator
 * @param pageFn function that may be called to retrieve the next page of data
 */
export declare function pageToGenerator<T>(pageFn: () => Promise<IPaginatedData>): IterableIterator<Promise<T>>;
/**
 * Data represented in multiple pages
 */
export interface IPaginatedData {
    pages: {
        previous: string | null;
        next: string | null;
    };
    data: any[];
}
