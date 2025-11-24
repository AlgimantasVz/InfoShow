import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export const verifyToken = (req, res, next) => {
    let token;
    let authHeader = req.headers.authorization || req.headers.Authorization;
    if (authHeader && authHeader.startsWith("Bearer ")) {
        token = authHeader.split(" ")[1];

        if (!token) {
        return res.status(401).json({ status: 401, message: "Access Denied. No token provided." });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (err) {
        res.status(400).json({ status: 400, message: "Invalid token." });
    }
    }
    else {
        return res.status(401).json({ status: 401, message: "Access Denied. No token provided." });
    }
};

export const optionalVerifyToken = (req, res, next) => {
    let token;
    let authHeader = req.headers.authorization || req.headers.Authorization;
    
    if (authHeader && authHeader.startsWith("Bearer ")) {
        token = authHeader.split(" ")[1];
        
        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            req.user = decoded;
        } catch (err) {
            return res.status(400).json({ status: 400, message: "Invalid token." });
        }
    }
    
    next();
};

export const authorize = (...allowedRoles) => {
    return (req, res, next) => {
        if (!req.user) {
            return res.status(401).json({ status: 401, message: "Access Denied. No token provided." });
        }
        
        if (!allowedRoles.includes(req.user.role)) {
            return res.status(403).json({ status: 403, message: `Access Denied. This action requires one of these roles: ${allowedRoles.join(", ")}` });
        }
        
        next();
    };
};