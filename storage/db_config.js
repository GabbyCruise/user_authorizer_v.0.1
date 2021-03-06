/**+---------------------------------------------------+
 * Original Author : Gabriel Jonah (Gabby)                        
 * Copyright : (c) 2022 authorizer
 * version number : 0.0.1 beta
 * +---------------------------------------------------+
*/

module.exports = {
 HOST     : 'localhost',
 USER     : 'root',
 PASSWORD : 'password',
 PORT     : 3306,
 DB       : 'authorizer',
 dialect  : 'mysql',
 pool     : {
   max     : 5,
   min     : 0,
   acquire : 30000,
   idle    : 10000,
 }
}