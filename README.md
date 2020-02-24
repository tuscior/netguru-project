# API endpoints

Staging: https://netguru-simple-staging-api.herokuapp.com/

These endpoints allow you to handle:

## GET - Health endpoints
`Public access` [/status/health](#get-1billingretrieve-billing-datajson) <br/>
`Public access` [/status/version](#get-1billingretrieve-billing-datajson) <br/>

## GET - Metrics endpoints
`Public access` [/metrics](#get-1billingretrieve-billing-datajson) <br/>

## GET - Comments endpoints
`Public access` [/comments](#get-1billingretrieve-billing-datajson) <br/>


## GET - Movies endpoints
`Public access` [/movies](#get-1billingretrieve-billing-datajson) <br/>

## POST
`Public access` [/comments](#post-1billingstart-trialjson) <br/>
`Public access` [/movies](#post-1billingcancel-trialjson) <br/>
___

### POST /movies
Lookup to external service to find proper movie ``

**Parameters**

|          Name | Required |  Type   | Description                                                                                                                                                         |
| -------------:|:--------:|:-------:| ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `title` | optional | string  | Movie title or part of the title.                                                                   |
| `id` | optional | string |  Movie id from imdb

You can use title or id but one of them is required.

**Response**

```
{
    "_id": "5e54385d268f2600177e8991",
    "Title": "Joker",
    "Year": "2019",
    "Rated": "R",
    "Released": "04 Oct 2019",
    "Runtime": "122 min",
    "Genre": "Crime, Drama, Thriller",
    "Director": "Todd Phillips",
    "Writer": "Todd Phillips, Scott Silver, Bob Kane (based on characters created by), Bill Finger (based on characters created by), Jerry Robinson (based on characters created by)",
    "Actors": "Joaquin Phoenix, Robert De Niro, Zazie Beetz, Frances Conroy",
    "Plot": "In Gotham City, mentally troubled comedian Arthur Fleck is disregarded and mistreated by society. He then embarks on a downward spiral of revolution and bloody crime. This path brings him face-to-face with his alter-ego: the Joker.",
    "Language": "English",
    "Country": "USA, Canada",
    "Awards": "Won 2 Oscars. Another 57 wins & 163 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg",
    "Ratings": [
        {
            "Source": "Internet Movie Database",
            "Value": "8.6/10"
        },
        {
            "Source": "Rotten Tomatoes",
            "Value": "68%"
        },
        {
            "Source": "Metacritic",
            "Value": "59/100"
        }
    ],
    "Metascore": "59",
    "imdbRating": "8.6",
    "imdbVotes": "665,555",
    "imdbID": "tt7286456",
    "Type": "movie",
    "DVD": "17 Dec 2019",
    "BoxOffice": "N/A",
    "Production": "Warner Bros. Pictures",
    "Website": "N/A",
    "Response": "True",
    "__v": 0
}

Example movie or 

{
    "Response": "False",
    "Error": "Movie not found!"
}

```
___

### POST /comments
Creates comments ``

**Parameters**

|          Name | Required |  Type   | Description                                                                                                                                                         |
| -------------:|:--------:|:-------:| ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `author` | required | string  | Your name, nickname                                                                   |
| `comment` | required | string |  Comment

You can use title or id but one of them is required.

**Response**

```
{
    "_id": "5e54395d268f2600177e8992",
    "author": "me again",
    "comment": "checking how response look",
    "date": "2020-02-24T21:00:13.017Z",
    "__v": 0
}

```
___

### GET /comments or /movies

**Response**

```
Comments: Array<Comment>
[
  {
      "_id": "5e54395d268f2600177e8992",
      "author": "me again",
      "comment": "checking how response look",
      "date": "2020-02-24T21:00:13.017Z",
      "__v": 0
  }
]
Movies: Array<Movie>
[
  {
    "_id": "5e54385d268f2600177e8991",
    "Title": "Joker",
    "Year": "2019",
    "Rated": "R",
    "Released": "04 Oct 2019",
    "Runtime": "122 min",
    "Genre": "Crime, Drama, Thriller",
    "Director": "Todd Phillips",
    "Writer": "Todd Phillips, Scott Silver, Bob Kane (based on characters created by), Bill Finger (based on characters created by), Jerry Robinson (based on characters created by)",
    "Actors": "Joaquin Phoenix, Robert De Niro, Zazie Beetz, Frances Conroy",
    "Plot": "In Gotham City, mentally troubled comedian Arthur Fleck is disregarded and mistreated by society. He then embarks on a downward spiral of revolution and bloody crime. This path brings him face-to-face with his alter-ego: the Joker.",
    "Language": "English",
    "Country": "USA, Canada",
    "Awards": "Won 2 Oscars. Another 57 wins & 163 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg",
    "Ratings": [
        {
            "Source": "Internet Movie Database",
            "Value": "8.6/10"
        },
        {
            "Source": "Rotten Tomatoes",
            "Value": "68%"
        },
        {
            "Source": "Metacritic",
            "Value": "59/100"
        }
    ],
    "Metascore": "59",
    "imdbRating": "8.6",
    "imdbVotes": "665,555",
    "imdbID": "tt7286456",
    "Type": "movie",
    "DVD": "17 Dec 2019",
    "BoxOffice": "N/A",
    "Production": "Warner Bros. Pictures",
    "Website": "N/A",
    "Response": "True",
    "__v": 0
  }
]

```

# How to start application locally:

Requirements:
- Docker
- Docker-compose
- API_KEY from http://omdbapi.com/

Generate API_KEY on this site. Create ```.env``` file in top level directory. Put there: <br/>
```API_KEY=<YOUR API KEY>```

Run CMDs <br />
``` docker-compose build ``` <br />
``` docker-compose up ```
