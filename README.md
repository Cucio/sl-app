![Alt text](image.png)
![Alt text](image-1.png)
1.	Validation of Username Input
2.	Using Modal to display file content
3.	Use different colors for badges
4.	Ensured consistent and responsive design across different screen sizes
5.	Fixed Github API limit rate

Further Improvements
1.	Adding unit tests
2.	Enhance UI/UX
3.  Improve Error Messages
4.  Advanced Search Features (filter and sort gists by various criteria)

To run the project locally, you need to create a .env file, generate a GitHub token, and declare it as `REACT_APP_ENCODED_GITHUB_TOKEN`

Steps to Create the Token and Set Permissions:

1.	Generate GitHub Token:
	•	Go to GitHub Settings
	•	Click on Generate New Token
	•	Provide a description for the token
	•	Set the expiration (optional)
	•	Select the gist scope to grant access to GitHub gists

2.	Declare the Token in .env File:
	•	Create a .env file in the root directory of the project
	•	Add the following line to the .env file:

`REACT_APP_ENCODED_GITHUB_TOKEN=your_generated_token_here`