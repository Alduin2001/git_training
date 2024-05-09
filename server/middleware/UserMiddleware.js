const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
class AuthMiddleware{
    static async checkAuth(token){
        const verify = jwt.verify(token);

    }
    static async admin(token){
        const verify = jwt.verify();
    }
}