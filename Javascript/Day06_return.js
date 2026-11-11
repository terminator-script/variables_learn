
function validateDocument(documentId, referringProvider, renderingProvider){
    if  (referringProvider===""&& renderingProvider===""){
        return "both providers missing";
    }
    else if (referringProvider===""){
        return "referring provider missing";
    }
    else if (renderingProvider === ""){
        return "rendering provider is missing";
    }
    else{
        return "Validation passed";
    }
}

// let result1 = validateDocument(7154932, "Dr. Scott", "Dr. Ain");
let result2 = validateDocument(7154942,"","Dr. Ain");
let result3 = validateDocument(7155259,"Dr.Davis","");
let result4 = validateDocument(7155361,"","");
console.log("Document 7154942 -", result2);
console.log("Document 7155259 -", result3);
console.log("Document 7155361 -", result4);

let documentIds = [7154932, 7154942, 7155259, 7155361];

let referringProviders = [
    "Dr. Scott",
    "",
    "Dr. Davis",
    ""
];

let renderingProviders = [
    "Dr. Ain",
    "Dr. Ain",
    "",
    ""
];

for (let i=0;i<documentIds.length;i++){

let result = validateDocument(
    documentIds[i],
    referringProviders[i],
    renderingProviders[i]
);
console.log(documentIds[i], result);
}

