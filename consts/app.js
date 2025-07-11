require('dotenv').config();
const PORT = 8080;

const FRONT_URL = process.env.FRONT_URL;

const SESSION_SECRET = process.env.SESSION_SECRET;
const MONGODB_URL = process.env.MONGODB_URL;
const JWT_SECRET = process.env.JWT_SECRET;

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;
const GOOGLE_CLIENT_CALLBACK_URL = process.env.GOOGLE_CLIENT_CALLBACK_URL;

const KAKAO_CLIENT_ID = process.env.KAKAO_CLIENT_ID;
const KAKAO_CLIENT_SECRET = process.env.KAKAO_CLIENT_SECRET;
const KAKAO_CALLBACK_URL = process.env.KAKAO_CLIENT_CALLBACK_URL;

const NAVER_CLIENT_ID = process.env.NAVER_CLIENT_ID;
const NAVER_CLIENT_SECRET = process.env.NAVER_CLIENT_SECRET;
const NAVER_CLIENT_CALLBACK_URL = process.env.NAVER_CLIENT_CALLBACK_URL;

module.exports = {
    PORT,
    FRONT_URL,
    SESSION_SECRET, 
    MONGODB_URL,
    JWT_SECRET,
    GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET,
    GOOGLE_CLIENT_CALLBACK_URL,
    KAKAO_CLIENT_ID,
    KAKAO_CLIENT_SECRET,
    KAKAO_CALLBACK_URL,
    NAVER_CLIENT_ID,
    NAVER_CLIENT_SECRET,
    NAVER_CLIENT_CALLBACK_URL,
}