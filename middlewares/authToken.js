import jwt from 'jsonwebtoken';

export const authToken = (req, res, next) => {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];

    if (!token) {
        res.status(401).json({ mensaje: "Falta de Token, acceso denegado" })
    }
    
    jwt.verify(token, process.env.SECRET_KEY, (error, user)=>{
        if(error){
            return res.status(403).json({mensaje:"Token expirado o no válido"});
        }
        req.user = user;
        next();
    });
}
