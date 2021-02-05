// challenge at codewars: https://www.codewars.com/kata/5a5032f4fd56cb958e00007a/javascript

 const tvRemote = function(word) {
  
  const keyBoard = {
    a: [0, 0],
    b: [0, 1],
    c: [0, 2],
    d: [0, 3],
    e: [0, 4], 
    1: [0, 5],
    2: [0, 6],
    3: [0, 7],
    f: [1, 0],
    g: [1, 1],
    h: [1, 2],
    i: [1, 3],
    j: [1, 4],
    4: [1, 5],
    5: [1, 6],
    6: [1, 7],
    k: [2, 0],
    l:[2, 1],
    m:[2, 2],
    n:[2, 3],
    o:[2, 4],
    7:[2, 5],
    8:[2, 6],
    9:[2, 7],
    p:[3, 0],
    q:[3, 1],
    r:[3, 2],
    s:[3, 3],
    t:[3, 4],
    '.':[3, 5],
    '@':[3, 6],
     0:[3,7],
     u:[4, 0],
     v:[4, 1],
     w:[4, 2],
     x:[4, 3],
     y:[4,4],
     z:[4,5],
     '_':[4,6],
     '/':[4,7]
  }
  
  let count=0;
  
  const step1 = (Math.abs(0-keyBoard[word[0]][0])) + Math.abs((0-keyBoard[word[0]][1])) + 1;
    console.log(step1);
  count = count + step1;

  for(let i=0; i<word.length-1;i++){
     let iIndex=Math.abs(keyBoard[word[i]][0]-keyBoard[word[i+1]][0]);
     let jIndex=Math.abs(keyBoard[word[i]][1]-keyBoard[word[i+1]][1]);
      let step2=iIndex+jIndex;
    step2=step2+1;
    count = count+step2;
    console.log(step2);
  }
  
  return count;
}
Best Practices0Clever0
0ForkCompare with your solutionLink
© 2021 CodewarsAboutAPIBlogPrivacyTermsContact
powered by

