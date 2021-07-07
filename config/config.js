module.exports = {
    salt: "b05bd5a64e9a5b1f3046bef577b81bdf",
    secretKey: "secretKey",
    fileUploadedSubPath: process.env.NODE_ENV === 'production' 
        ? "build"
        : "public",
    clientUrl: process.env.NODE_ENV === 'production' 
        ? "https://nurse-09.herokuapp.com"
        : "http://localhost:3000",
    email: "lotusio456@gmail.com",
    password: "Master515"
}