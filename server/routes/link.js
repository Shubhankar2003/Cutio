import express from "express";
import { addLink, getLink } from '../controller/linkController.js';

const router = express.Router()

router.post('/addlink', addLink)
router.post('/getlink', getLink)


export default router