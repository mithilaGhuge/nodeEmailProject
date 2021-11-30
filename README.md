# Sends emails to recipients from a large list (1 Mio entries) in a performant way
## Task- 
Send email to multiple recipients using node js. Email IDs of all the recipients stored in the excel sheet
***
## Prerequisite  :
 1. Nodejs
 2. Excel File containing list of recipients email ID's with Name `emailIDList`
 3. If using gmail make google account setings to less secure 

## To run the project :
***
Create `.env` file with following enviornment variables 
`SERVICE` == sender's service provider/ domain name
`USER_MAIL` == sender's email address
`PASSWORD` == sender's email account password

```
npm install
npm start 
or
npm index.js
```