function isPalindrome(str) {
    // Remove non-alphanumeric characters and convert to lowercase
    str = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    

    // Compare the string with its reverse
    return str === str.split('').reverse().join('');
  }
  

  console.log(isPalindrome("A man, a plan, a canal, Panama")); 
  console.log(isPalindrome('Was it a car or a cat I saw?'));
  console.log(isPalindrome("Hello, World!")); 