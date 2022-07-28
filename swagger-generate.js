import swaggerAutogen from 'swagger-autogen';

const doc = {
  info: {
    title: 'Anime API by IGRohan',
    description: 'AnimeAPI is a anime streaming and discovery api built using NodeJS and express that scrapes Gogoanime and Animixplay to return data. https://github.com/IGRohan/AnimeAPI',
  },
  host: 'animeapi.up.railway.app',
  schemes: ['https'],
};

const outputFile = './swagger.json';
const endpointsFiles = ['./index.js'];

swaggerAutogen()(outputFile, endpointsFiles, doc);
