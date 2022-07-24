<div align="center">
<img src="https://capsule-render.vercel.app/api?type=waving&color=auto&height=300&section=header&text=AnimeAPI&fontSize=90&animation=fadeIn&fontAlignY=38&desc=anime%20streaming%20and%20discovery%20api&descAlignY=51&descAlign=62" align="center" style="width: 100%" />
</div>  
  

### <div align="center">AnimeAPI is a anime streaming and discovery api built using NodeJS and express that scrapes Gogoanime and Animixplay to return data</div>  
  

<br/>

## Navigation

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

| Parameters    | Description                                                             | Optional   |
| ------------ | -------------------------------------------------------------------------|---------------------------|
| `keyw` (string) | Keyword used to search for anime. Example: `GET /gogoanime/search?keyw=jujutsu` | No |
| `page` (int) | Page number. Limit unknown | Yes

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

| Parameters    | Description                                                             | Optional   |
| ------------ | -------------------------------------------------------------------------|---------------------------|
| `keyw` (string) | Keyword used to search for anime. Example: `GET /animix/search?keyw=jujutsu` | No |


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

| Parameters    | Description                                                             | Optional   |
| ------------ | -------------------------------------------------------------------------|---------------------------|
| `type` (string) | Default: 1. **type 1: japanese with subtitle. type 2: english dub with no subtitles. type 3: chinese with english subtitles.** Example: `GET /recent-episodes` | Yes |
| `page` (int) | Page number. | Yes

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

| Parameters    | Description                                                             | Optional   |
| ------------ | -------------------------------------------------------------------------|---------------------------|
| `type` (int) | Default: 1 **type 1: weekly most viewed. type 2: most viewed of all time** | Yes |


```js
axios.get('/popular')
.then(response => response.data)
```

Output

```json
[
    {
        "title": "One Piece",
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

| Parameters    | Description                                                             | Optional   |
| ------------ | -------------------------------------------------------------------------|---------------------------|
| `:animeId` (string) | animeId received from other previous calls. | No |


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

| Parameters    | Description                                                             | Optional   |
| ------------ | -------------------------------------------------------------------------|---------------------------|
| `:malId` (string) | MyAnimeList ID of the anime, also received through some routes. | No |


```js
axios.get('/animix/info/21')
.then(response => response.data)
```

Output

```json
{
    "animeTitle": {
        "default": "One Piece",
        "english": "One Piece",
        "japanese": "ONE PIECE"
    },
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

| Parameters    | Description                                                             | Optional   |
| ------------ | -------------------------------------------------------------------------|---------------------------|
| `:animeId` (string) | animeId received from other previous calls. | No |


```js
axios.get('/episodes/one-piece')
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

| Parameters    | Description                                                             | Optional   |
| ------------ | -------------------------------------------------------------------------|---------------------------|
| `:episodeId` (string) | episodeId received from gogoanime anime info route | No |


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

| Parameters    | Description                                                             | Optional   |
| ------------ | -------------------------------------------------------------------------|---------------------------|
| `:episodeId` (string) | episodeId = {animeId}-episode-{epNum} | No |


```js
axios.get('/animix/watch/one-piece-episode-1015')
.then(response => response.data)
```

Output

```json
{
    "animeId": "one-piece",
    "episodeNum": "1015",
    "src": "https://v.vrv.co/evs3/c925fcce0204d351a1e2c282862c3f2a/assets/66019d5a1dc3ae6644144f8543bffc55_,4449484.mp4,4449485.mp4,4449483.mp4,4449481.mp4,4449482.mp4,.urlset/master.m3u8?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cCo6Ly92LnZydi5jby9ldnMzL2M5MjVmY2NlMDIwNGQzNTFhMWUyYzI4Mjg2MmMzZjJhL2Fzc2V0cy82NjAxOWQ1YTFkYzNhZTY2NDQxNDRmODU0M2JmZmM1NV8sNDQ0OTQ4NC5tcDQsNDQ0OTQ4NS5tcDQsNDQ0OTQ4My5tcDQsNDQ0OTQ4MS5tcDQsNDQ0OTQ4Mi5tcDQsLnVybHNldC9tYXN0ZXIubTN1OCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTY1ODg1MTQwMX19fV19&Signature=gAOXIDwb3DdGyj0zG2grVo6cmzBri0N0-7JkP8Xa3v8yBpLsM9KXGAnANFWgkH0T1qUxWdJlR6izuX3boiU1fU1PyoClcHW0t~vwXCg2LNS46IBOSdBCYSOBoRIWzLMhdfZlhmobN3Yt34AA90NlYAVSKSmPa~fYn9hjv77ydCnh7EnoAFHSw0xmSLYTtHTLYtLYa55Kvgfbni~JNETOAHq5YJIFZmuf49HXSMIeAYqtHTBfqYzrNA~Lbbx5QaY3wovVjcwwNrF4HLDAmklHvhfJVWLfWAtY0cuxYSWa-RwhPMXQf3AP5n-M8b91Flgp9SNy7WqIbg1-LLWH4cl7Hw__&Key-Pair-Id=APKAJMWSQ5S7ZB3MF5VA"
}
```

