let documents = [
    { documentId: 7154932, documentType: "Referral" },
    { documentId: 7154942, documentType: "Referral Authorization" },
    { documentId: 7155259, documentType: "Medical Records" }
];

documents.forEach(function (document) {
    console.log(document.documentId);
    console.log(document.documentType);
});
