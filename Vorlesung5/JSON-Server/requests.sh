curl --header "Content-Type: application/json" \
  --request POST \
  --data '{ "id": 3, "title": "How to use cURL", "authorId": 1 }' \
  http://localhost:3000/articles

curl --header "Content-Type: application/json" \
  --request PATCH \
  --data '{ "title": "VERÄNDERT MT EINEM API-Call // HTTP Request"  }' \
  http://localhost:3000/articles/2

curl --request DELETE http://localhost:3000/articles/1