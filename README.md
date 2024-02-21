
‘GET’ API TEST SUITES 

Test Case Description:

1	Validating code 200.
This test case validates the successful retrieval of quotes from the FavQs API by sending an HTTP GET request. It ensures that the request returns a status code of 200, indicating a successful response, and that the response body contains 25 quotes.

2	Validating code 401.
This test case verifies the expected behaviour of the FavQs API when an HTTP GET request is sent to fetch quotes without providing a valid authorization token. It expects the API to respond with a status code of 401 (Unauthorized) and a status text of "Unauthorized".

3	Validating code 404.
This test case verifies the expected behaviour of the FavQs API when an HTTP GET request is sent to an endpoint (https://favqs.com/api/quotes/filter) that does not exist. It expects the API to respond with a status code of 404 (Not Found) and a status text of "Not Found".

4	Validating Funny – code 200.
This test case verifies the expected behaviour of the FavQs API when an HTTP GET request is sent to filter quotes by the category "funny." It expects the API to respond with a status code of 200 and a status text of "OK."

5	Validating Hidden - code 200.
This test case verifies the expected behaviour of the FavQs API when an HTTP GET request is sent to filter quotes by setting the "hidden" parameter to 1, aiming to exclude hidden quotes. It expects the API to respond with a status code of 200 and a status text of "OK."

6	Validating Schema.
This test case validates whether the JSON response returned from an HTTP GET request and predefined the schema are same.



‘PUT’ API TEST SUITES 
Test Case Description: 

1.	Creating a session token.
This test case is designed to creating a session token by performing a session through an API end point 'https://favqs.com/api/session'.  
	(Note: Unable to verify few testcases as unable to generate session token due to frequent 500 Internal Server error on the page.)

2.	Mark Fav.
The test case verifies the functionality of marking a quote as a favourite by sending a PUT request to the API endpoint (). It validates the response ‘status code’.
3.	Mark Fav quote not found.

The test case verifies the functionality of marked favourite quote not found by sending a PUT request to the API endpoint with invalid quote id () Assuming quote id ‘387499999’ is not present in the system  . It validates the response ‘status code.
4	Unmark Fav Quotes.
The test case verifies the functionality of unmarking a quote as not favourite by sending a PUT request to the API endpoint (). It validates the response ‘Error code’ and message.
5	Private quotes cannot be unfav.

The test case verifies the functionality of unmarking a private quote as not favourite by sending a PUT request to the API endpoint () Assuming quote ID ‘4’ is private. It validates the response ‘Error code’ and message.

How to Execute the testcases.
1.	Clone the Repository.
a.	Open VS Code
b.	Clone the GitHub repository using the `git clone` command followed by the repository URL.

2.	Install Cypress and Run 
a.	Navigate to the cloned repository directory.
b.	Run the following command to install Cypress as a dev dependency.
‘npm install cypress --save-dev’.
c.	Install Dependencies using npm (Mocha, Ajv, chai). 
d.	Create Cypress Configuration File (Package.json)
e.	Execute the testcases. Using below command in command line.
To run Cypress tests heedlessly: npx cypress run.
To open the Cypress Test Runner, run: npx cypress open. 
