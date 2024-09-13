function objectToKeyValuePairs(obj) {
    return Object.entries(obj); // Return key-value pairs as an array
}

const user = {
    name: 'Njuguna',
    age: 24,
    city: 'Nyeri'
};

console.log(objectToKeyValuePairs(user)); 
