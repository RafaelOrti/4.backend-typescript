import express from 'express'
import * as diaryServices from '../services/diaryServices'
import toNewDiaryEntry from '../utils'

const router = express.Router()

// reading all diaries
router.get('/', (_req, res) => {
  res.send(diaryServices.getEntriesWithoutSensitiveInfo())
})

router.get('/:id', (req, res) => {
  // convertir a numero con el + porque params siempre viene como string
  const diary = diaryServices.findById(+req.params.id)
  // añade el ? porque puede ser undefined
  return diary !== null
    ? res.send(diary)
    : res.sendStatus(404)
})

// posting a new diary
router.post('/', (req, res) => {
  try {
    const newDiaryEntry = toNewDiaryEntry(req.body)
    const addedDiaryEntry = diaryServices.addDiary(newDiaryEntry)
    res.json(addedDiaryEntry)
  } catch (e: any) {
    res.status(400).send(e.message)
  }
})

export default router
