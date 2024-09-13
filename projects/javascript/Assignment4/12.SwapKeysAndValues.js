function swapKeysAndValues(obj) {
    return Object.fromEntries(Object.entries(obj).map(([key, value]) => [value, key]));
}


const countryCodes = {
    'Kenya': '254',
    'Uganda': '256',
    'Tanzania': '255',
    'Rwanda': '250',
    'Burundi': '257'
};

console.log(swapKeysAndValues(countryCodes)); 