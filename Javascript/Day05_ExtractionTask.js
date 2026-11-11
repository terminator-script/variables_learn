
// Day05_ExtractionTask.js

/*

let renderingProviders = [
    "Dr. Ain",
    "",
    "Dr. Scott",
    "",
    "Dr. Davis"
];
let extractedCount = 0;
let missingCount = 0;

for (let i=0;i<renderingProviders.length;i++){
    if (renderingProviders[i] === ""){
        console.log("Rendering Provider Missing")
        missingCount++;
    }
    else {
        console.log("Rendering Provider Extracted:", renderingProviders[i]);
        extractedCount++;
    }
}

console.log ("Total Documents: ", renderingProviders.length)
console.log ("Providers Extracted: ", extractedCount)
console.log ("Providers Missing: ", missingCount)


Task 2 Below
Day05_ExtractionTask.js



let documentIds = [7154932, 7154942, 7155259, 7155361];

let renderingProviders = [
    "Dr. Scott",
    "",
    "Dr. Ain",
    ""
];

let passedCount = 0;
let issueCount = 0;

for (let i=0; i<documentIds.length;i++){
    if (renderingProviders[i] === ""){
        console.log("Document", documentIds[i], "- Rendering Provider Missing")
        issueCount++;
    }
    else{
        console.log("Document", documentIds[i], "- Rendering Provider Extracted")
        passedCount++;
    }
}

console.log("Total Documents:", documentIds.length);
console.log("Extraction Passed: ", passedCount);
console.log("Extraction Issues: ", issueCount);



task 3 below
*/

let documentIds = [
    7154932,
    7154942,
    7155259,
    7155361,
    7155547
];

let referringProviders = [
    "Dr. Scott",
    "",
    "Dr. Davis",
    "",
    "Dr. Scott"
];

let renderingProviders = [
    "Dr. Ain",
    "Dr. Ain",
    "",
    "",
    "Dr. Ain"
];

let passedCount  = 0;
let issueCount = 0;
for (let i=0;i<documentIds.length;i++){
    if (renderingProviders[i]==="" && referringProviders[i]===""){
        console.log("Document", documentIds[i], "- Both Providers Missing")
        issueCount++;
    }
    else if (renderingProviders[i]===""){
        console.log("Document", documentIds[i], "- Rendering Provider Missing")
        issueCount++;
    }
    else if (referringProviders[i]===""){
        console.log("Document", documentIds[i], "- Referring Provider Missing")
    issueCount++;
    }
    else {
        console.log("Document", documentIds[i], "- Validation Passed")
        passedCount++;
    }

}
console.log("Total Documents: ", documentIds.length)
console.log("Validation Passed: ", passedCount)
console.log("Validation Issues:", issueCount)
