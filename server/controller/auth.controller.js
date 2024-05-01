import express from 'express'
import User from '../models/user.model.js'
import bcrypt from 'bcryptjs'


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
        // console.log('inside sighnup')
        const {
            firstName, lastName, email, password, confirmPassword, phoneNumber
        } = req.body;

        //validation
        if(!firstName || !password || !confirmPassword ||!email )
        {
            return res.status(401).json({
                success: false,
                message: "Please fill out the neccessary fields."
            })
            console.log("all necessary data is not provided");
        }
        if(password !== confirmPassword ){
            return res.status(401).json({
                success: false,
                message: "Passwords do not match"
            })
            console.log("Passwords do not match.");
        }
        //check for existing user
        const existingUser = await User.findOne({email});
        if(existingUser) 
        {
            return res.status(409).json({
                success: false,
                message: "Email already registered. Please Login or try different emailId"
            })
        }

        //hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        //idhr pe admin sign up kr rha hai ya user....yeh wali functionality bhi add ki ja skti hai

        //now create the user
        const user = await User.create({
            firstName,
            lastName,
            email,
            phoneNumber,
            password: hashedPassword,
            image : `https://api.dicebear.com/6.x/initials/svg?seed=${firstName}%20${lastName} `,
        });

        //return response 
        return res.status(200).json({
            success: true,
            message: "User registered successfully",
            user
        })

        //  ************* ye jo user return ho rha hai...is format mein hai*******
        // {
        //     "success": true,
        //     "message": "User registered successfully",
        //     "user": {
        //         "firstName": "Ansh",
        //         "lastName": "Jain",
        //         "email": "ansh@gmail.com",
        //         "password": "$2a$10$JM7lmKgby30NvdXo0Sq7VOdIJq7o.OkDIsll9tPrKo8dJIz4tGB2u",
        //         "image": "https://api.dicebear.com/6.x/initials/svg?seed=Ansh%20Jain ",
        //         "_id": "6631f7b656e1d7577f3a11d3",
        //         "__v": 0
        //     }
         
    } catch (error) {
        console.log("signup error inside catch - ", error)
        return req
    }
    
}