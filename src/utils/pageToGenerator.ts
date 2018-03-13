/**
 * Turns a function that resolves with a page of items into a generator-powered iterator
 * @param pageFn function that may be called to retrieve the next page of data
 */
export function* pageToGenerator<T>(pageFn): IterableIterator<Promise<T>>  {
    let nextPageExists = true;
    let bank = [];
    let fetchPromise: Promise<T> = new Promise<T>((resolve) => resolve());
    while (bank.length > 0 || nextPageExists) {

            if (bank.length === 0) {
                return pageFn().then(function(response) {
                    nextPageExists = !!response.pages.next;
                    bank = response.data;

                    return bank.shift();
                });
            }

            return bank.shift();
        });

        yield fetchPromise;
    }
}
