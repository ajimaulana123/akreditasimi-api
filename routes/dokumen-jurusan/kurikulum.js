import {
  getKurikulum,
  postKurikulum,
  putKurikulum,
  deleteKurikulum
} from '../../controllers/dokumen-jurusan/kurikulum.js'
import express from 'express'

const router = express.Router()

router.get('/kurikulum', getKurikulum)
router.post('/kurikulum', postKurikulum)
router.put('/kurikulum/:idKurikulum', putKurikulum)
router.delete('/kurikulum/:idKurikulum', deleteKurikulum)

export default router
