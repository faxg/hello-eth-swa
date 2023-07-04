module.exports = async function (context, req) {
    const someCredential = process.env.SOME_CREDENTIAL;
    // add some logic here to get the credential from a key vault or something


    context.res.json({
        text: `Hello from ETH. Our credential  is: ${someCredential}`
    });
};