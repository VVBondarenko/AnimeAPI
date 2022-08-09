<div align="center">
<img src="https://capsule-render.vercel.app/api?type=waving&color=auto&height=300&section=header&text=AnimeAPI&fontSize=90&animation=fadeIn&fontAlignY=38&desc=anime%20streaming%20and%20discovery%20api&descAlignY=51&descAlign=62" align="center" style="width: 100%" />
</div>  
  
### <div align="center">AnimeAPI is a anime streaming and discovery api built using NodeJS and express that scrapes Gogoanime and Animixplay to return data</div>  


<p align="center">
    <a href="https://github.com/IGRohan/AnimeAPI">
      <img src="https://img.shields.io/github/license/IGRohan/AnimeAPI?style=flat-square" alt="Github license">
    </a>
     <a href="https://github.com/IGRohan/AnimeAPI">
      <img src="https://img.shields.io/github/package-json/v/IGRohan/AnimeAPI?style=flat-square" alt="GitHub package.json version">
    </a>
</p>



<br/>

## Navigation
- [Navigation](#navigation)
- [Installation](#installation)
- [Available Routes](#available-routes)
  - [Search Anime using Gogoanime](#search-anime-using-gogoanime)
  - [Search Anime using Animixplay](#search-anime-using-animixplay)
  - [Get latest released episodes](#get-latest-released-episodes)
  - [Get popular anime](#get-popular-anime)
  - [Get anime info from Gogoanime](#get-anime-info-from-gogoanime)
  - [Get anime info from Animixplay](#get-anime-info-from-animixplay)
  - [Get anime episodes (from animix's website)](#get-anime-episodes-from-animixs-website)
  - [Get streaming URLs from Gogoanime](#get-streaming-urls-from-gogoanime)
  - [Get streaming URLs from Animixplay](#get-streaming-urls-from-animixplay)
- [Contributing](#contributing)

## Installation
Execute the following commands in your terminal:

```sh
git clone https://github.com/IGRohan/AnimeAPI.git
cd AnimeAPI
npm install
npm start
```

## Available Routes

### Search Anime using Gogoanime

| Parameters      | Description                                                                     | Optional |
| --------------- | ------------------------------------------------------------------------------- | -------- |
| `keyw` (string) | Keyword used to search for anime. Example: `GET /gogoanime/search?keyw=jujutsu` | No       |
| `page` (int)    | Page number. Limit unknown                                                      | Yes      |

```js
axios.get('/animix/search?keyw=jujutsu')
.then(response => response.data)
```

Output

```json
[
    {
        "animeId": "jujutsu-kaisen-tv",
        "animeTitle": "Jujutsu Kaisen (TV)",
        "animeUrl": "https://gogoanime.lu///category/jujutsu-kaisen-tv",
        "animeImg": "https://gogocdn.net/cover/jujutsu-kaisen-tv.png",
        "status": "Released: 2020"
    },
    {...},
    {...}
]
```

### Search Anime using Animixplay

| Parameters      | Description                                                                  | Optional |
| --------------- | ---------------------------------------------------------------------------- | -------- |
| `keyw` (string) | Keyword used to search for anime. Example: `GET /animix/search?keyw=jujutsu` | No       |


```js
axios.get('/animix/search?keyw=jujutsu')
.then(response => response.data)
```

Output

```json
[
    {
        "animeTitle": "Jujutsu Kaisen (TV)",
        "animeId": "jujutsu-kaisen-tv",
        "animeImg": "https://cachecow.eu/i/7802b28c9b08401ccf503d4ebf6c5004.jpg"
    },
    {...},
    {...}
]
```

### Get latest released episodes

| Parameters      | Description                                                                                                                                                    | Optional |
| --------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- |
| `type` (string) | Default: 1. **type 1: japanese with subtitle. type 2: english dub with no subtitles. type 3: chinese with english subtitles.** Example: `GET /recent-episodes` | Yes      |
| `page` (int)    | Page number.                                                                                                                                                   | Yes      |

```js
axios.get('/recent-episodes')
.then(response => response.data)
```

Output

```json
[
    {
        "episodeId": "bonobono-1995-episode-46",
        "animeTitle": "Bonobono (1995)",
        "episodeNum": "46",
        "subOrDub": "SUB",
        "animeImg": "https://gogocdn.net/cover/bonobono-1995.png",
        "episodeUrl": "https://gogoanime.lu///bonobono-1995-episode-46"
    },
    {...}
]
```

### Get popular anime

| Parameters   | Description                                                                | Optional |
| ------------ | -------------------------------------------------------------------------- | -------- |
| `type` (int) | Default: 1 **type 1: weekly most viewed. type 2: most viewed of all time** | Yes      |


```js
axios.get('/popular')
.then(response => response.data)
```

Output

```json
[
    {
        "animeTitle": "One Piece",
        "mal_id": "21",
        "animeImg": "https://cachecow.eu/i/73059c39fee46b7c378a3aa0bdd9b6a2.jpg",
        "views": "2,468,790",
        "score": 8.65
    },
    {...},
    {...}
]
```

### Get anime info from Gogoanime

| Parameters          | Description                                 | Optional |
| ------------------- | ------------------------------------------- | -------- |
| `:animeId` (string) | animeId received from other previous calls. | No       |


```js
axios.get('/gogoanime/info/one-piece')
.then(response => response.data)
```

Output

```json
[
    {
        "animeTitle": "One Piece",
        "type": "TV Series",
        "synopsis": "...",
        "animeImg": "https://gogocdn.net/images/anime/One-piece.jpg",
        "releaseDate": "1999",
        "status": "Ongoing",
        "genres": [
            "Action",
            "Adventure",
            "Comedy",
            "Fantasy",
            "Shounen",
            "Super Power"
        ],
        "otherNames": "",
        "eptotal": "1026",
        "episodes": [
            {
            "episodeId": "one-piece-episode-1026",
            "epNum": "1026",
            "episodeUrl": "https://gogoanime.lu//one-piece-episode-1026"
            },
            {...}
        ]
]
```

### Get anime info from Animixplay

| Parameters        | Description                                                     | Optional |
| ----------------- | --------------------------------------------------------------- | -------- |
| `:malId` (string) | MyAnimeList ID of the anime, also received through some routes. | No       |


```js
axios.get('/animix/info/21')
.then(response => response.data)
```

Output

```json
{
    "animeTitle": "One Piece",
    "animeId": "one-piece",
    "mal_id": 21,
    "animeImg": "https://cdn.myanimelist.net/images/anime/6/73245.jpg",
    "episodes": null,
    "status": "Currently Airing",
    "score": 8.65,
    "synopsis": "...",
    "genres": [
        "Action",
        "Adventure",
        "Fantasy"
    ],
    "studios": [
        "Toei Animation"
    ],
    "gogoAnimeLink": [
        {
        "url": "https://gogoanime.sk/category/one-piece",
        "title": "One Piece"
        },
        {
        "url": "https://gogoanime.sk/category/one-piece-dub",
        "title": "One Piece (Dub)"
        }
    ],
    "animepaheLink": [
        {
        "url": "https://animepahe.com/a/4",
        "title": "One Piece"
    }
    ],
    "zoroLink": [
        {
        "url": "https://zoro.to/one-piece-100",
        "title": "One Piece"
    }
    ]
}
```

### Get anime episodes (from animix's website)

| Parameters          | Description                                 | Optional |
| ------------------- | ------------------------------------------- | -------- |
| `:animeId` (string) | animeId received from other previous calls. | No       |


```js
axios.get('animix/episodes/one-piece')
.then(response => response.data)
```

Output

```json
{
    "animeTitle": "One Piece",
    "mal_id": "21",
    "genres": "Action, Adventure, Fantasy, Shounen",
    "status": "Status : Ongoing",
    "total_episodes": 1026,
    "episodes": [
        {
        "epNum": 1,
        "link": "//goload.pro/streaming.php?id=MzUxOA==&title=One+Piece+Episode+1"
        },
        {
        "epNum": 2,
        "link": "//goload.pro/streaming.php?id=MzUyMQ==&title=One+Piece+Episode+2"
        },
        {...}
    ]
}
```

### Get streaming URLs from Gogoanime

| Parameters            | Description                                        | Optional |
| --------------------- | -------------------------------------------------- | -------- |
| `:episodeId` (string) | episodeId received from gogoanime anime info route | No       |


```js
axios.get('/gogoanime/watch/one-piece-episode-1015')
.then(response => response.data)
```

Output

```json
{
    "Referer": "https://goload.pro/streaming.php?id=MTg1MDA5&title=One+Piece+Episode+1015&typesub=SUB",
    "sources": [
        {
        "file": "https://manifest.prod.boltdns.net/manifest/v1/hls/v4/clear/6312749785001/2862bdc3-e420-4d02-81ec-2edb4feb0cc3/6s/master.m3u8?fastly_token=NjJkZGRjNmRfZGY2MmNlYTcwMmJmZmVhMzYxZTc5ZDIxNDk4MzBhMzc3ZmE4ZGIzZmE0OGE5MTRkYzU1MDFmMzY3YTc2YTNlMg%3D%3D",
        "label": "auto P",
        "type": "mp4"
        }
    ],
    "sources_bk": [
        {
        "file": "https://wwwx20.gogocdn.stream/hls/0b594d900f47daabc194844092384914/ep.1015.1657688386.m3u8",
        "label": "hls P",
        "type": "mp4"
        }
    ]
}
```

### Get streaming URLs from Animixplay

| Parameters            | Description                           | Optional |
| --------------------- | ------------------------------------- | -------- |
| `:episodeId` (string) | episodeId = {animeId}-episode-{epNum} | No       |


```js
axios.get('/animix/watch/one-piece-episode-1015')
.then(response => response.data)
```

Output

```json
{
    "animeId": "one-piece",
    "episodeNum": "1015",
    "sources": [
        {
            "file": "https://v.vrv.co/evs3/c925fcce0204d351a1e2c282862c3f2a/assets/66019d5a1dc3ae6644144f8543bffc55_,4449484.mp4,4449485.mp4,4449483.mp4,4449481.mp4,4449482.mp4,.urlset/master.m3u8........",
            "type": "hls"
        }
    ]
}
```

## Contributing

Contributions are always welcome!

You can contribute to this project by forking the project, adding
/making changes, and submitting a pull request.

However the best way to contribute would be to suggest new routes
or features and if possible, showing the logic and process behind
it.

