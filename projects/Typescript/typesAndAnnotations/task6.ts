//Exercise 6: void vs undefined

const acceptsCallback = (callback: () => void) => {
    callback();
  };
  
  const returnString = () => {
    return "Hello!";
  };
  
  acceptsCallback(returnString); 