let cadena = 'Adriana"';

let duplicateCount = (str) => {
  let dups = cadena.toLowerCase().split('').reduce((op,inp)=>{
    op[inp] = op[inp] || 0
    op[inp]++
    return op
  },{})
  return Object.values(dups).filter(v=>v>1).length
}

console.log(duplicateCount(cadena));

//examples
/*"abcde" -> 0 # no characters repeats more than once
"aabbcde" -> 2 # 'a' and 'b'
"aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
"indivisibility" -> 1 # 'i' occurs six times
"Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
"aA11" -> 2 # 'a' and '1'
"ABBA" -> 2 # 'A' and 'B' each occur twice */
