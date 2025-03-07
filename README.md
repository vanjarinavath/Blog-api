Steps to Set Up Locally

Clone the repository
git clone https://github.com/vanjarinavath/blog-api.git
cd blog-api
Install dependencies

npm install

Set up the environment variables
Create a .env file in the root directory and add:

MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=5000

Start the server


Test the API using Postman 

API Documentation

Authentication Routes

1. Register User

Endpoint: POST /api/auth/register

Request Body:

{
  "username": "testuser",
  "email": "test@example.com",
  "password": "password123"
}

Response:

{
  "message": "User registered successfully",
  "token": "jwt_token_here"
}

2. Login User

Endpoint: POST /api/auth/login

Request Body:

{
  "email": "test@example.com",
  "password": "password123"
}

Response:

{
  "message": "Login successful",
  "token": "jwt_token_here"
}

Blog Post Routes (Protected - Requires JWT Token)

3. Create a Blog Post

Endpoint: POST /api/posts

Headers: Authorization: Bearer <token>

Request Body:

{
  "title": "My First Blog Post",
  "content": "This is the content of my blog post."
}

Response:

{
  "message": "Post created successfully",
  "post": { "_id": "post_id_here", "title": "My First Blog Post", "content": "This is the content of my blog post." }
}

4. Get All Blog Posts

Endpoint: GET /api/posts

Response:

[
  {
    "_id": "post_id_here",
    "title": "My First Blog Post",
    "content": "This is the content of my blog post.",
    "likes": 5
  }
]

5. Like/Unlike a Post

Endpoint: POST /api/posts/:postId/like

Headers: Authorization: Bearer <token>

Response:

{
  "message": "Post liked",
  "likes": 6
}

6. Comment on a Post

Endpoint: POST /api/posts/:postId/comments

Headers: Authorization: Bearer <token>

Request Body:

{
  "text": "Great blog post!"
}

Response:

{
  "message": "Comment added",
  "comment": { "_id": "comment_id_here", "text": "Great blog post!" }
}

7. Delete a Blog Post

Endpoint: DELETE /api/posts/:postId

Headers: Authorization: Bearer <token>

Response:

{
  "message": "Post deleted successfully"
}

Technologies Used

Backend: Node.js, Express.js

Database: MongoDB, Mongoose

Authentication: JWT, bcryptjs

Middleware: Express, CORS, dotenv


Author

👤 Navath vinod kumar
📧 Email: vinodkumarnavath9633@gmail.com
🔗 GitHub: github.com/vanjarinavath

