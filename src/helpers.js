// Select random fruit
function choice(items) {
    let idx = Math.floor(Math.random() * items.length);
    return items[idx];
}


// Return copy of array without the selected item
function remove(item, items) {
    for (let i = 0; i < items.length; i++) {
        if (items[i] === item) {
            return [...items.slice(0, i), ...items.slice(i + 1)];
        }
    }
}


// Export choice and remove
export { choice, remove };