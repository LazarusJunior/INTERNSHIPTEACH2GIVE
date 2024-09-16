function getAllPropertyNames(obj) {
    const props = new Set(); //Set to automatically handle duplicates
    while (obj) {
        Object.getOwnPropertyNames(obj).forEach(prop => props.add(prop));
        obj = Object.getPrototypeOf(obj);
    }
    return [...props]; // Convert Set back to an array
}

console.log(getAllPropertyNames({})); // Should include properties from Object.prototype
