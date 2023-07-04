module.exports = async function (context, req) {
    const databaseName = process.env.DATABASE_NAME;
    context.res.json({
        text: `Hello from the API. Our Datebase name is ${databaseName}`
    });
};