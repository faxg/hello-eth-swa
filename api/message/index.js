module.exports = async function (context, req) {
    const someCredential = process.env.SOME_CREDENTIAL;
    context.res.json({
        text: `Hello from the API. Our credential  is: ${someCredential}`
    });
};