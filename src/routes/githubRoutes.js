import express from 'express';
import { getUserRepos } from '../controllers/githubController.js';

const router = express.Router();

router.get('/getdata/:username', getUserRepos);

export default router;