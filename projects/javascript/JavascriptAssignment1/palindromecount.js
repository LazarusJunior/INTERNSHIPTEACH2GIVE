function countPalindromes(str) {
    const palindromes = new Set();

    // Loop through each character in the string
    for (let i = 0; i < str.length; i++) {
        // Check for odd-length palindromes
        expandAroundCenter(str, i, i, palindromes);
        // Check for even-length palindromes
        expandAroundCenter(str, i, i + 1, palindromes);
    }

    return palindromes.size;
}

function expandAroundCenter(str, left, right, palindromes) {
    while (left >= 0 && right < str.length && str[left] === str[right]) {
        palindromes.add(str.substring(left, right + 1)); // Add the palindrome substring
        left--; // Expand to the left
        right++; // Expand to the right
    }
}

console.log(countPalindromes('ababa'));
console.log(countPalindromes('racecar'));
console.log(countPalindromes('aabb'));
console.log(countPalindromes('a'));
console.log(countPalindromes('abc'));     
