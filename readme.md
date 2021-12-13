<div align="center">
  <h1 align="center">Blog API</h1>

  <p align="center">
    A simple blog api for dummy projects
    <br />
    <a href="https://mwv-blogapi.herokuapp.com">Deployed Application</a>
    ·
    <a href="https://github.com/mindwebs/blog-api/issues">Report Bug</a>
    ·
    <a href="https://github.com/mindwebs/blog-api/issues">Request Feature</a>
  </p>
</div>

## Schema

A Blog has the following fields:

1. **path**: string type (unique)
2. **title**: string type
3. **content**: string type
4. **author**: string type
5. **tag**: string type
6. **img**: file type [jpg, png, jpeg]
7. **author_icon**: file type [jpg, png, jpeg]
8. **createdAt**: date type (automatically calculated in the backend)
9. **_id**: mongo object id


## Endpoints

1. POST `/api`
Request body should have the fields: _path, title, content, author, tag, img, author_icon_

2. GET /api?limit=50&offset=0
By passing limit and offset in the url, you can control how many blogs to return. If no params are passed, 10 blogs are returned by default.

3. GET /api/path/{path}
Fetches a blog with the given path. For example, a GET request on `api/path/test-blog` with return the blog with `path = test-blog`

4. GET /api/id/{id}
Fetches a blog with the given object id. For example, a GET request on `api/id/1` with return the blog with `_id = 1`

## Running the server locally

The first 3 steps below are to set the project up in your local environment, which is to be done just once at the beggining.

#### STEP 1: 
Cloning the repository

#### STEP 2:
Creating a .env file with the same fields as mentioned in the `.env.example` file

#### STEP 3:
Installing node packages using the command `npm i`

#### STEP 4:
Running the backend server using the command `npm start`.