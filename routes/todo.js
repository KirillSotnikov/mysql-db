const {Router} = require('express')
const Todo = require('../models/todo')
const router = Router()

// Geet ToDo List
router.get('/', (req, res) => {
  res.json({a: 1})
  try{
    
  } catch(err) {
    console.log(err)
    res.status(500).json({
      message: 'Server error'
    })
  }
})

// Create new ToDo
router.post('/', async (req, res) => {
  try{
    const todo = await Todo.create({
      title: req.body.title,
      done: false
    })
    res.status(201).json({todo})
  } catch(err) {
    console.log(err)
    res.status(500).json({
      message: 'Server error'
    })
  }
})

// Change Some Task
router.put('/:id', (req, res) => {
  try{
    
  } catch(err) {
    console.log(err)
    res.status(500).json({
      message: 'Server error'
    })
  }
})

// Delete Some Task
router.delete('/:id', (req, res) => {
  try{
    
  } catch(err) {
    console.log(err)
    res.status(500).json({
      message: 'Server error'
    })
  }
})

module.exports = router