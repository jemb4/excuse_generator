

window.onload = () => {
  //write your code here
document.querySelector("#excuse").innerHTML = theExcuse()
};

let theExcuse = () =>{
let whoDid = ["A " , "My imposter syndrome ", "A little and cute Bear blobfish ", "The void ", "My right arm "];
let whatDid = ["ate " , "had a birthday whith ", "burned ", "laughed at "];
let whatAvoid = ["my sanity " , "my car ", "my food ", "my computer ", "my phone battery "];
let when = ["in 2013." , "when I finished.", "a while ago.", "I cant remember when.", "in a few moments."];
let rN1 = Math.floor(Math.random()*5);
let rN2 = Math.floor(Math.random()*4);
let rN3 = Math.floor(Math.random()*5);
let rN4 = Math.floor(Math.random()*5);
return whoDid[rN1] + whatDid[rN2] + whatAvoid[rN3] + when[rN4]
}
