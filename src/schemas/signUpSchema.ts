import {z} from 'zod'

export const usernameValidation= z
     .string()
     .min(2,"Username must be atleast 2 characters")
     .max(20,"Username must be no more than 20 characters")
     .regex(/^[a-zA-Z0-9_]+$/,"uSERNAME MUST NOT CONTAIN special character")


export const signUpSchema = z.object({
    
})