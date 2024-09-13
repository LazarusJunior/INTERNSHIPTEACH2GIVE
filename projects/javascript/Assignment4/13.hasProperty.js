function hasProperty(obj, property) {
    return obj.hasOwnProperty(property);
  }
  
  const mobilePhone = {
    brand: 'Samsung',
    model: 'Galaxy S21',
    hasCamera: true,
    has5G: true,
    storage: '128GB',
  };
  
  console.log(hasProperty(mobilePhone, 'hasCamera')); 
  console.log(hasProperty(mobilePhone, 'hasBluetooth')); 
  