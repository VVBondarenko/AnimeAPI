import express from 'express';
const app = express();
import cors from 'cors';

//Importing all functions & utils
import {
    fetchSearchGogo,
    fetchSearchAnimix,
    fetchRecentEpisodes,
    fetchPopular,
    fetchGogoAnimeInfo,
    fetchAnimixAnimeInfo,
    fetchAnimeWatchInfo,
    fetchAnimixEpisodeSource,
    fetchGogoanimeEpisodeSource
} from './scrapper/scrape.js';

app.use(cors({ origin: "*", credentials: true }));
app.use(express.json())


// Routes
app.get('/', (req, res) => {
    res.send('Welcome to AnimeAPI!')
});

app.get('/gogoanime/search', async (req, res) => {
    const keyw = req.query.keyw;
    const page = req.query.page;

    const data = await fetchSearchGogo({ keyw: keyw, page: page })
    res.json(data).status(200)
});

app.get('/animix/search', async (req, res) => {
    const keyw = req.query.keyw;

    const data = await fetchSearchAnimix({ keyw: keyw })
    res.json(data).status(200)
});

app.get('/recent-episodes', async (req, res) => {
    const page = req.query.page;
    const type = req.query.type;

    const data = await fetchRecentEpisodes({ page, type });
    res.json(data).status(200)
});

app.get('/popular', async (req, res) => {
    const type = req.query.type;

    const data = await fetchPopular({ type });
    res.json(data).status(200);
});

app.get('/gogoanime/info/:animeId', async (req, res) => {
    const animeId = req.params.animeId;

    const data = await fetchGogoAnimeInfo({ animeId });
    res.json(data).status(200);
})

app.get('/animix/info/:malId', async (req, res) => {
    const malId = req.params.malId;

    const data = await fetchAnimixAnimeInfo({ malId: malId });
    res.json(data).status(200)
});

app.get('/episodes/:animeId', async (req, res) => {
    const animeId = req.params.animeId;

    const data = await fetchAnimeWatchInfo({ animeId });
    res.json(data).status(200);
});

app.get('/animix/watch/:episodeId', async (req, res) => {
    const episodeId = req.params.episodeId;

    const data = await fetchAnimixEpisodeSource({ episodeId });
    res.json(data).status(200)
});

app.get('/gogoanime/watch/:episodeId', async (req, res) => {
    const episodeId = req.params.episodeId;

    const data = await fetchGogoanimeEpisodeSource({ episodeId });
    res.json(data).status(200)
});

// app.get('/testing', async (req, res) => {
//     // const resp = await axios.get('https://animixplay.to/rsssub.xml');
//     // const jsonXml = xmltoJSON(resp.data);
//     const testString = "aHR0cHM6Ly9tYW5pZmVzdC5wcm9kLmJvbHRkbnMubmV0L21hbmlmZXN0L3YxL2hscy92NC9jbGVhci82MzEyNzQ5ODI4MDAxL2Y0OGU3YjczLWE5MmItNDhmOC05YzliLWY4MmIwOGEzOTI0Ni82cy9tYXN0ZXIubTN1OD9mYXN0bHlfdG9rZW49TmpKa1lqQTROemxmTWpnMU1HSmtaakUyWXpVMFpqbG1aakZtTUdSa1pqQmlaVGhrWm1abU1UUmpZak0zWXpobE5ESTFPRGM0WW1FNU4ySTJaREV6WXpnd05tRTRNalprT0ElM0QlM0Q="
//     const yo = "https://manifest.prod.boltdns.net/manifest/v1/hls/v4/clear/6312749828001/f48e7b73-a92b-48f8-9c9b-f82b08a39246/6s/master.m3u8?fastly_token=NjJkYjA4NzlfMjg1MGJkZjE2YzU0ZjlmZjFmMGRkZjBiZThkZmZmMTRjYjM3YzhlNDI1ODc4YmE5N2I2ZDEzYzgwNmE4MjZkOA%3D%3D"
//     const decodedString = decodeString(testString)
//     const encodedString = encodeString(yo)
//     console.log(encodedString)
// })

//Start the web-server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`API running on http://localhost:${PORT}`)
});