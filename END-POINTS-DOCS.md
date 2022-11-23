# END-POINTS-DOCS

No one of follow routes need auth, so its just can call by URL.

There´s a file with postman colletion of this project with name 'project.postman_colletion.json'
That can help you to make requests and test.

# ROUTES

    TO CREATE NEW MOVIE:

    POST {{BASE_URL}}/api/movie/

    Body:
        {
            "id": "9f9301c1-e650-47f2-8af9-b1986c14be92",
            "title": "string",
            "original_title": "string",
            "description": "string",
            "release_date": 1980,
            "rt_score": 89
        }

    RETURN:
    200 with body:
        {
            "id": "9f9301c1-e650-47f2-8af9-b1986c14be92",
            "title": "string",
            "original_title": "string",
            "description": "string",
            "release_date": 1980,
            "rt_score": 89
        }
    400 with body:
        'Type Error, verify request body'
    500 with body:
        empty

---

    TO GET MOVIE FROM DB:

    GET {{BASE_URL}}/api/movie/:movie-id

    Body: empty

    RETURN:
    200 with body:
        {
            "id": "9f9301c1-e650-47f2-8af9-b1986c14be92",
            "title": "string",
            "original_title": "string",
            "description": "string",
            "release_date": 1980,
            "rt_score": 89
        }
    400 with body:
        'Not found movie'
    500 with body:
        empty

---

    TO GET MOVIES FROM DB WITH PAGINATION:

    GET {{BASE_URL}}/api/movies/

    Body:
        {
            "limit": 1,
            "offset": 1
        }
    'limit and offset isnt a required field on DB, to ignore you can pass 0 (zero) on body. So this fields isnt conciderated'
    'That request always get movies order by release_date DESC'

    RETURN:
    200 with body:
        {
            "count": 22,
            "rows": [
                {
                    "id": "d868e6ec-c44a-405b-8fa6-f7f0f8cfb500",
                    "title": "The Red Turtle",
                    "original_title": "レッドタートル ある島の物語",
                    "description": "A man set adrift by a storm wakes up on a beach. He discovers that he is on a deserted island with plenty of fresh water, fruit and a dense bamboo forest. He builds a raft from bamboo and attempts to sail away, but his raft is destroyed by an unseen monster in the sea, forcing him back to the island. He tries again with another, larger raft, but is again foiled by the creature. A third attempt again ends with the raft destroyed, but this time he is confronted by a giant red turtle, which stares at him, and forces him back to the island.",
                    "release_date": 2016,
                    "rt_score": 93,
                    "createdAt": "2022-11-23T23:14:21.669Z",
                    "updatedAt": "2022-11-23T23:14:21.669Z"
                }
            ]
        }
    400 with body:
        'Not found movie'
    500 with body:
        empty
