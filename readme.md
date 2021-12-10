# Blog API
Simple Blog API for dummy projects

## Schema

A Blog has the following fields:

1. **path**: string type | required
2. **title**: string type | required
3. **content**: string type | required
4. **author**: string type | optional

## Endpoints

1. POST /api

2. GET /api?limit=50&offset=0

3. GET /api/path/{path}

4. GET /api/id/{id}
