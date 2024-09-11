function isCaseInsensitivePalindrome(str) {
    // Remove non-alphanumeric characters and convert to lowercase
    str = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    
    // Compare the string with its reverse
    return str === str.split('').reverse().join('');
  }
  

  console.log(isCaseInsensitivePalindrome("Aba")); 
  console.log(isCaseInsensitivePalindrome("Racecar"));
  console.log(isCaseInsensitivePalindrome("Palindrome")); 
  console.log(isCaseInsensitivePalindrome("Madam")); 
  console.log(isCaseInsensitivePalindrome("Hello")); 
