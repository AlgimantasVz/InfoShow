import { response } from "express";
import {getAllCommentsService, getCommentByIdService, createCommentService, updateCommentService, deleteCommentService} from "../models/commentModel.js"

//Standard reponse function
const handleResponse = (res, status, message, data = null) => {
    res.status(status).json({
        status,
        message,
        data,
    });
};

export const createComment = async (req, res, next) => {
    const {commentor, eventName, comment} = req.body;
    try{
        const newComment = await createCommentService(commentor, eventName, comment);
        handleResponse(res, 201, "Comment Created Succesfully", newComment)
    }catch (err){
        next(err);
    }
};

export const getAllComments = async (req, res, next) => {
    try{
        const comment = await getAllCommentsService();
        handleResponse(res, 200, "Comments Fetched Succesfully", comment)
    }catch (err){
        next(err);
    }
};

export const getCommentById = async (req, res, next) => {
    try{
        const comment = await getCommentByIdService(req.params.id);
        if(!comment) return handleResponse(res, 404, "Comment not found")
        handleResponse(res, 200, "Comment Fetched Succesfully", comment)
    }catch (err){
        next(err);
    }
};

export const updateComment = async (req, res, next) => {
    const {commentor, eventName, comment} = req.body;
    try{
        const updatedComment = await updateCommentService(req.params.id, commentor, eventName, comment);
        if(!updatedComment) return handleResponse(res, 404, "Comment not found")
        handleResponse(res, 200, "Comment Updated Succesfully", updatedComment)
    }catch (err){
        next(err);
    }
};

export const deleteComment = async (req, res, next) => {
    try{
        const deletedComment = await deleteCommentService(req.params.id);
        if(!deletedComment) return handleResponse(res, 404, "Comment not found")
        handleResponse(res, 200, "Comment Deleted Succesfully", deletedComment)
    }catch (err){
        next(err);
    }
}; 