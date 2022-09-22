import dotenv from 'dotenv';

dotenv.config();

export default {
    accessKeyId: process.env.accessKeyId,
    secretAccessKey: process.env.secretAccessKey 
}