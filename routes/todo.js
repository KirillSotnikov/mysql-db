const {Router} = require('express')
const router = Router()

// Geet ToDo List
router.get('/', (req, res) => {
  res.json({a: 1})
})

// Create new ToDo
router.post('/', (req, res) => {

})

// Change Some Task
router.put('/:id', (req, res) => {
  
})

// Delete Some Task
router.delete('/:id', (req, res) => {
  
})

module.exports = router