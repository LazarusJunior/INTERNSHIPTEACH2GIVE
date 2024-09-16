function removeDuplicates(str) {
    return [...new Set(str)].join('');
  }
   

  console.log(removeDuplicates('programming'));
  console.log(removeDuplicates('hello world'));
  console.log(removeDuplicates('aaaaa'));
  console.log(removeDuplicates('abcd'));
  console.log(removeDuplicates('aabbcc'));
