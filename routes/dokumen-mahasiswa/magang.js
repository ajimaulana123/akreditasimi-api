import upload from '../../middleware/multer.js'
import {
  getMagang,
  postMagang,
  deleteMagang
} from '../../controllers/dokumen-mahasiswa/magang.js'
import express from 'express'

const router = express.Router()

router.get('/magang/:year', getMagang)
router.post('/magang/:year', upload.single('image'), postMagang)
router.delete('/magang/:year/:idMagang', deleteMagang)

export default router
