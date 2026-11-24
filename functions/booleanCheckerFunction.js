function booWho(arg){
  if (typeof arg === 'boolean'){
    return true;
  } else{
    return false;
  }
}
console.log(booWho('hello'));
console.log(booWho(1));
console.log(booWho(NaN));
console.log(booWho(true));