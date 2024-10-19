const {custom} = require('@playwright/test');
const { default: test } = require('node:test');


exports.custom = test.extend({
    testDataForLoginPage :{
    
        username : "Admin",
        password : "admin123"
       
       }

})
// const base = test.extend({
//     testDataForLoginPage :{
    
//         username : "Admin",
//         password : "admin123"
       
//        }

// })
