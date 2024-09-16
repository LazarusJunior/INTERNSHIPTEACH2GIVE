//function to check if the string is a palindrome
function is_Palindrome(str1) {

    var rev = str1.split("").reverse().join("");
    return str1 == rev;
}

//find longest palindrome in the string
function longest_palindrome(str1) {

    var max_length = 0,
        maxp = '';

    // Iterate through each character in the input string
    for (var i = 0; i < str1.length; i++) {

        var subs = str1.substr(i, str1.length);

        // Iterate through each possible substring from the end of the current substring
        for (var j = subs.length; j >= 0; j--) {

            var sub_subs_str = subs.substr(0, j);

            if (sub_subs_str.length <= 1)
                continue;

            // Check if the sub-substring is a palindrome
            if (is_Palindrome(sub_subs_str)) {
                //check if it has a longer length than the current maximum length
                if (sub_subs_str.length > max_length) {
                    //update the maximum length and corresponding palindrome
                    max_length = sub_subs_str.length;
                    maxp = sub_subs_str;
                }
            }
        }
    }

    // Return the longest palindrome found
    return maxp;
}


console.log(longest_palindrome("babad"));
console.log(longest_palindrome("cbbd"));

