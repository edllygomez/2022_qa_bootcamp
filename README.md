# 2022_qa_bootcamp

**TASK 3** API positive TCs
1. Open CYPRESS_TASK_3
2. Open a terminal
3. Run Cypress with this command **npm run cypress:open**
4. Run review.spec.js file 

Note: To run this suite properly you should add a cypress.env.json file in the root with this structure:

{ "user": "your_username", "password": "your_Password" }


**TASK 2**
For valid credentials test case please following these steps 
Go to CYPRESS_TASK1
Open checkOut.js file
Search loginCheckOut method 
fill out the field getUserNameInput with 'automation'
fill out the field getPasswordInput with 'automation'
save the file ctrl + s for windows or command +s for Mac 
Run the cypress project with this command npm run cypress:open
Select placeOrder.spec.js to run it
if you get error ajax-get_refresed_fragments please Run again or twice 

For Invalid credentials test case please following these steps 

**Go to CYPRESS_TASK1**
Open checkOut.js file
Search loginCheckOutInvalid method 
fill out the field getUserNameInput with 'automation23'
fill out the field getPasswordInput with 'automatio23'
save the file ctrl + s for windows or command +s for Mac 
Run the cypress project with this command npm run cypress:open 
if you get error ajax-get_refresed_fragments please Run again or twice 
