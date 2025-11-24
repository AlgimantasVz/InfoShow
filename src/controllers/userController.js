import { response } from "express";
import { createUserService, deleteUsersService, getAllUsersService, getUsersByIdService, updateUsersService } from "../models/userModel.js";

//Standard reponse function
const handleResponse = (res, status, message, data = null) => {
    res.status(status).json({
        status,
        message,
        data,
    });
};

export const createUser = async (req, res, next) => {
    const {name, userName, email, password, role, discord} = req.body;
    try{
        const newUser = await createUserService(name, userName, email, password, role, discord);
        handleResponse(res, 201, "User Created Succesfully", newUser)
    }catch (err){
        next(err);
    }
};

export const getAllUsers = async (req, res, next) => {
    try{
        const users = await getAllUsersService();
        handleResponse(res, 200, "Users Fetched Succesfully", users)
    }catch (err){
        next(err);
    }
};

export const getUserById = async (req, res, next) => {
    try{
        const user = await getUsersByIdService(req.params.id);
        if(!user) return handleResponse(res, 404, "User not found")
        handleResponse(res, 200, "User Fetched Succesfully", user)
    }catch (err){
        next(err);
    }
};

export const updateUser = async (req, res, next) => {
    const {name, userName, email, password, role, discord} = req.body;
    try{
        const updatedUser = await updateUsersService(req.params.id, name, userName, email, password, role, discord);
        if(!updatedUser) return handleResponse(res, 404, "User not found")
        handleResponse(res, 200, "User Updated Succesfully", updatedUser)
    }catch (err){
        next(err);
    }
};

export const deleteUser = async (req, res, next) => {
    try{
        const deletedUser = await deleteUsersService(req.params.id);
        if(!deletedUser) return handleResponse(res, 404, "User not found")
        handleResponse(res, 204)
    }catch (err){
        next(err);
    }
}; 