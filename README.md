# Blocks Scan 

## Task 1: API Development(User Authentication) 
### Steps Followed
1. **Set Up User Model:** Created a `User` schema with fields for user data.
2. **Implement Authentication Routes:** Added routes for user registration and login.
3. **Password Hashing:** Used bcrypt for hashing passwords before storing them in the database.
4. **Token Generation:** Implemented JWT for secure user authentication.

### Issues Encountered
- **Error:** "Cast to ObjectId failed" due to incorrect field names.
  - **Solution:** Corrected the field names in the `User` model and adjusted the API logic.


## Task 2: API Key Management:(Generate atmost 3 API Key)
### Steps to Achieve Task

1. **Setup and Dependencies**
   - Leveraged `crypto` for secure API key generation.
   - Integrated `ApiKey` model to manage and store generated API keys.
   - Integrated `User` model to validate user existence and link keys.

2. **API Key Generation**
   - Implemented a function to generate a secure API key using `crypto.randomBytes` to ensure randomness and security.

3. **Route Implementation**
   - Created a `POST` endpoint to handle requests for generating API keys:
     - Validates the existence of the user.
     - Checks the current number of API keys associated with the user to ensure they do not exceed the limit of three.
     - Generates a new API key and saves it to the database if the user is eligible.

4. **Error Handling**
   - Added error handling to manage various scenarios:
     - User not found.
     - User has reached the maximum number of allowed API keys.
     - Internal server errors.

### Issues Encountered
- **Duplicate Key Error**: Ensured that existing keys are checked to prevent creating more than the allowed number.
- **Error Handling**: Implemented comprehensive error messages to assist in debugging and user feedback.

### Measures to Solve Issues
- **Validation Checks**: Added logic to verify the number of existing API keys before generating a new one.
- **Error Logging**: Implemented detailed error messages to handle and communicate issues effectively.


## Task 3: API Key Management:(Plan Management)
### Steps Followed
1. **Define Plan Schema:** Created a schema for different plans, including fields for plan details.
2. **Populate Plans:** Implemented functionality to prepopulate the plans in the database.
3. **Plan Routes:** Created routes to fetch plan details and manage plans.

### Issues Encountered
- **Error:** Duplicate key error when inserting plans.
  - **Solution:** Ensured plans were unique and implemented checks to prevent duplication.

## Task 4: Plan Switching Functionality
### Steps Followed
1. **Switch Plan Endpoint:** Created an endpoint to allow users to switch between plans.
2. **Update User's Current Plan:** Updated the user’s plan in the database based on their choice.

### Issues Encountered
- **Error:** "Plan not found" when trying to switch plans.
  - **Solution:** Verified the `plan_id` format and adjusted the query to use `findOne` instead of `findById`.


## Task 5: API Usage Statistics
### Steps Followed
1. **Track API Usage:** Implemented middleware to track API usage and associate it with user plans.
2. **Statistics Endpoint:** Created an endpoint to fetch API usage statistics.

### Issues Encountered
- **Error:** "Cannot find module './middleware/trackAPI'" and "Plan not found".
  - **Solution:** Corrected module paths and ensured that the `trackAPIUsage` middleware was properly implemented and referenced.

## Issues Encountered
1. **Error: `Cast to ObjectId failed`**
   - **Description:** Encountered issues with incorrect field types or missing references.
   - **Solution:** Verified field types and corrected schema definitions and queries.

2. **Error: Duplicate Key Error**
   - **Description:** Occurred when inserting plans with duplicate `plan_id`.
   - **Solution:** Added checks to prevent duplication and ensure unique plan identifiers.

3. **Error: `Cannot find module`**
   - **Description:** Issue with module paths or missing files.
   - **Solution:** Verified and corrected file paths and module names.

4. **Error: `Plan not found`**
   - **Description:** Occurred due to incorrect querying or missing plan records.
   - **Solution:** Adjusted queries and ensured correct plan IDs were used.


