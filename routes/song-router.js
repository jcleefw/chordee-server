const express = require('express')

const SongCtrl = require('../controllers/song-ctrl')

const router = express.Router()

router.post('/song', SongCtrl.createSong)
router.put('/song/:id', SongCtrl.updateSong)
router.delete('/delete-song/:id', SongCtrl.deleteSong)
router.get('/song/:id', SongCtrl.getSongById)
router.get('/songs', SongCtrl.getSongs)

module.exports = router