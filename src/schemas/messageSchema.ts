import {z} from 'zod'

export const messageSchema = z.object({
    content: z.string().min(10,{message:'content atleast of 10 characters'})
    .max(300,{message:'content no more than 300 characters'})
})