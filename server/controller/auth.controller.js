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
    try {
        // console.log("login route api hit!!");
         
    } catch (error) {
        console.log('login error inside catch - ', error)
    }
    
}

export const signup = async(req, res) => {
    try {
        
    } catch (error) {
        console.log("signup error inside catch - ", error)
    }
    
}