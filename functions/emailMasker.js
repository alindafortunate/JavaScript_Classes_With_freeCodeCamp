function maskEmail(email){
  
  const positionOfAt=email.indexOf('@'); 

  let middlePart = email.slice(1,positionOfAt - 1)  
  

  const firstCharacter = email.slice(0,1);
  

  const characterBeforeAt = email.slice(positionOfAt - 1, positionOfAt);
  

  const domain = email.slice(positionOfAt);
  

  const maskedChars = "*".repeat(middlePart.length);
  

  return `${firstCharacter}${maskedChars}${characterBeforeAt}${domain}`
  
  
}
const email = "alindafortunate@email.com"
console.log(maskEmail(email));
