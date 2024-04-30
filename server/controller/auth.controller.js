import express from 'express'
import User from '../models/user.model.js'


export const test = async(req, res) => {
    try {
        console.log("test route api hit!!");    
    } catch (error) {
        console.log("error....inside catch block - ",error)
    }
}

export const login = async(req, res) => {
    
}

export const signup = async(req, res) => {
    
}