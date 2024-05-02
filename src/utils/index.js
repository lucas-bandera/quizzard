export const getSet = (size, length) => {
    const set = new Set();
    while (set.size < size) {
    set.add(Math.floor(Math.random() * length));
    }
    const numbers = [...set];

    return numbers
}

export function paginate(array, pageSize) {
    const pageCount = Math.ceil(array.length / pageSize); // Calculate total number of pages
    let pages = [];

    for (let i = 0; i < pageCount; i++) {
        pages.push(array.slice(i * pageSize, (i + 1) * pageSize)); // Create sub-array for each page
    }

    return pages;
}

