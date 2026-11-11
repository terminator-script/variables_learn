// JavaScript source code
// JavaScript source code
function validateDocument(documentId, referringProvider, renderingProvider) {
    if (referringProvider === "" && renderingProvider === "") {
        return "Both Providers Missing";
    }
    else if (referringProvider === "") {
        return "Referring Provider Missing";
    }
    else if (renderingProvider === "") {
        return "Rendering Provider Missing";
    }
    else {
        return "Validation Passed";
    }
}

let documents = [
    {
        documentId: 7154932,
        referringProvider: "Dr. Scott",
        renderingProvider: "Dr. Ain",
        documentType: "Referral"
    },
    {
        documentId: 7154942,
        referringProvider: "",
        renderingProvider: "Dr. Ain",
        documentType: "Referral Authorization"
    },
    {
        documentId: 7155259,
        referringProvider: "Dr. Davis",
        renderingProvider: "",
        documentType: "Referral"
    },
    {
        documentId: 7155361,
        referringProvider: "",
        renderingProvider: "",
        documentType: "Referral"
    }
];
let passedCount = 0;
let failedCount = 0;

for (let i = 0; i < documents.length; i++) {

    let result =
        validateDocument(documents[i].documentId,
            documents[i].referringProvider,
            documents[i].renderingProvider
        );
    documents[i].validationStatus = result;
    if (result == "Validation Passed") {
        passedCount++;
    }
    else {
        failedCount++
    }
    console.log("Document", documents[i].documentId, "-", result);
}
for (let i = 0; i < documents.length; i++) {
    console.log(documents[i]);
    console.log("Total Documents: ", documents.length);
    console.log("Validation Passed: ", passedCount);
    console.log("Validation Failed: ", failedCount);

}





