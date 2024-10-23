require('dotenv').config()

const BASE_URL = process.env.BASE_URL
console.log(BASE_URL)

export const studentEndpoints = {
    SIGNUP_API: BASE_URL + "studentSignup",
    LOGIN_API: BASE_URL + "studentLogin",
    PROFILE_API: BASE_URL + "studentProfile",
}