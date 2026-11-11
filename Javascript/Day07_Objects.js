// JavaScript source code
// JavaScript source code
/*  Example - 1

let document1 = {
    documentId: 7154932,
    referringProvider: "Dr. Scott",
    renderingProvider: "Dr. Ain",
    documentType: "Referral"
};
let document2 = {
    documentId: 7154942,
    referringProvider: "",
    renderingProvider: "Dr. Ain",
    documentType: "Referral Authorization"
};
console.log(document1.documentId);
console.log(document1.referringProvider);
console.log(document1.renderingProvider);
console.log(document1.documentType);

document2.referringProvider = "Dr. Davis";
document2.documentType = "Referral";
document1.validationStatus = "Passed";
document2.validationStatus = "Pending";

console.log(document2.documentId);
console.log(document2.referringProvider);
console.log(document2.renderingProvider);
console.log(document2.documentType);
console.log(document1.validationStatus);
console.log(document2.validationStatus);

*/

// Example - 2

/*

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
    }
];

console.log(documents[0].documentId);
console.log(documents[1].documentId);
console.log(documents[1].documentType);
console.log(documents[1].renderingProvider);

*/

/*

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
    }
];

for (let i = 0; i < documents.length; i++) {
        console.log(documents[i].documentId);
        console.log(documents[i].documentType);
}

*/

// Example - 3

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

for (let i = 0; i < documents.length; i++) {

    let result =
        validateDocument(documents[i].documentId,
            documents[i].referringProvider,
            documents[i].renderingProvider
        );
    console.log("Document", documents[i].documentId, "-", result);
}



