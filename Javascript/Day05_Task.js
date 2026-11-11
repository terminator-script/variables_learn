/*
let documents = [
    "Referral",
    "Lab Report",
    "Referral",
    "Progress Notes",
    "Referral",
    "Blood Thinners",
    "Correspondence"
];

let referralCount = 0;
let nonReferralCount = 0;

for (let i = 0; i < documents.length; i++) {
    if (documents[i] === "Referral") {
    console.log("Processing Referral: ", documents[i]);
referralCount++
}
else
{
    console.log("Processing Non Referral:", documents[i]);
    nonReferralCount++
}
}

console.log("Total Documents:", documents.length);
console.log("Referral Documents :", referralCount);
console.log("Non Referral Documents: ", nonReferralCount);


Task 2

*/

let documents = [
    "Referral",
    "Referral Authorization",
    "Lab Report",
    "Referral",
    "Progress Notes",
    "Referral Authorization",
    "Correspondence"
];

let referralCount = 0;
let authorizationCount = 0;
let otherCount = 0;

for (let i=0; i<documents.length;i++ ) {
if (documents[i]=== "Referral"){
referralCount++;
}
else if (documents[i]=== "Referral Authorization"){
    authorizationCount++;
}
else {
    otherCount++;
}
}
console.log("Total No Of Documents: ", documents.length)
console.log("Total No Of Referrals:", referralCount)
console.log("Total No Of Referral Authorization", authorizationCount)
console.log("Total No Of Other Documents :", otherCount)