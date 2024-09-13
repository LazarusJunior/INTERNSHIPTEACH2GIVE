function allProperties(object) {
    // Get all property names of the object
    const properties = Object.getOwnPropertyNames(object);
    // Filter out methods 
    const methods = properties.filter(prop => typeof object[prop] === 'function');
    return methods;
}

console.log(allProperties(Array));
