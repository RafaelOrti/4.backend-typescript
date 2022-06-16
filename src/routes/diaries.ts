import express from 'express'

const router = express.Router()

//reading all diaries
router.get('/', (_req, res) => {
    res.send('Fetching all entry diaries')
})

//posting a new diary
router.post('/', (_req, res) => {
    res.send('Saving a diary')
})

export default router
