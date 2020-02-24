const request = require('supertest');
const { createApp } = require('../src/app');
const { createHttpApp } = require('../src/http/server');
const createRepositories = require('../src/models/repositories');
const mongoose = require('mongoose');
const config = require('../src/config');
const { MongoMemoryServer } = require('mongodb-memory-server');
const { version } = require('../package.json');

const testNetguruApp = createApp(
  Object.assign(config, { version }),
  createRepositories()
);
const { app } = createHttpApp(config, testNetguruApp);
const requestRunner = request(app);
let mongoServer;

describe('http', () => {
  beforeAll(async () => {
    mongoServer = new MongoMemoryServer();
    const mongoUri = await mongoServer.getConnectionString();
    await mongoose.connect(
      mongoUri,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
      err => {
        if (err) console.error(err);
      }
    );
  });
  describe('/status', () => {
    it('Health should return OK', () => {
      return requestRunner.get('/status/health').expect('"OK"');
    });
    it('Version should return correct version', () => {
      return requestRunner.get('/status/version').expect(`"${version}"`);
    });
  });
  describe('/comments', () => {
    it('Should be able to post to comment endpoint', () => {
      const comment = {
        author: 'Karol tluscik',
        comment: 'Test',
      };
      return requestRunner
        .post('/comments')
        .send(comment)
        .expect(201);
    });
    it('Get all should return just 1 comment created in previous test', () => {
      return requestRunner
        .get('/comments')
        .expect(200)
        .expect(res => res.author === 'Karol tluscik');
    });
  });
  describe('/movies', () => {
    it('Should be able to post to movie endpoint', () => {
      const movie = {
        title: 'Batman',
      };
      return requestRunner
        .post('/movies')
        .send(movie)
        .expect(201)
        .expect(res => res.title === 'Batman');
    });
    it('Get all should return just 1 comment created in previous test', () => {
      return requestRunner
        .get('/movies')
        .expect(200)
        .expect(res => res.body[0].title === 'Batman');
    });
  });
  afterAll(async () => {
    await mongoose.disconnect();
    await mongoServer.stop();
  });
});
