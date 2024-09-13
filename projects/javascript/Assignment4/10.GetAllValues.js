function getAllValues(obj) {
    return Object.values(obj); 
}

const shoppingCart = {
    apple: 2,
    banana: 5,
    orange: 3
};

console.log(getAllValues(shoppingCart)); 
