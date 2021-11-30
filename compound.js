const compound = (days, amount, interest)=>{
    let final= amount
  for(let i =0; i< days; i++){
    final = (final * interest) +final
  }
  return final
}
console.log(compound(120, 30000, .003))