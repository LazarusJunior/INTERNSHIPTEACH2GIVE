function  find_anagram(str1,str2){
    let string_one=str1.toLowerCase()
    let string_two=str2.toLowerCase()


     if (string_one.length !== string_two.length){
       console.log("The strings are not anagrams")
    
     }else{
        string_one=string_one.split('')
        string_two=string_two.split("")

        string_one=string_one.sort().join('')
        string_two=string_two.sort().join("")

        console.log(""+string_one)
        console.log(""+string_two)

        if(string_one===string_two){
            console.log('The strings are anagrams')
        }else{
            console.log('The strings are not anagrams')
        }
     }
}

find_anagram('Listen','Silent')
find_anagram('Hello','World')
find_anagram('bcda','acdb')
