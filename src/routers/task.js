const express = require('express')
const router = new express.Router()
const Task = require('../models/task')
const auth = require('../middleware/auth')

router.patch('/tasks/:id', auth, async (req, res) => {
  const updates = Object.keys(req.body)
  const allowedUpdates = ['description', 'completed']
  const isValidOperation = updates.every((update) => allowedUpdates.includes(update))
  if(!isValidOperation){
    return res.status(400).send({ error: 'Invalid Updates' })
  }
  try {
    //const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
    //this line is finding the task to update by OWNER and ID so only logged in user can update their task!
    const task = await Task.findOne({ _id: req.params.id, owner: req.user._id })
    if(!task){
      return res.status(404).send()
    }
    //below code was moved from above if statement - now the 404 will trigger if that task for update is not found
    // or is using the an ID from another user!
    updates.forEach((update) => (task[update] = req.body[update]))
    await task.save()
    res.send(task)
  } catch (e) {
    res.status(400).send(e)
  }
})

router.get('/tasks/:id', auth, async (req, res) => {
  const _id = req.params.id

  try {
    //const task = await Task.findById(_id)
    const task = await Task.findOne({ _id, owner: req.user._id })

    if(!task){
      return res.status(404).send()
    }
    res.send(task)
  } catch (e) {
    res.status(500).send(e)
  }
})

router.get('/tasks', auth, async (req, res) => {
  try {
    // const tasks = await Task.find({ owner: req.user._id }) this will 100% work the same as method below - trying
    // to get all tasks for individual user and only the logged in user.
    await req.user.populate('tasks').execPopulate()
    res.status(201).send(req.user.tasks)
  } catch (e) {
    res.status(500).send(e)
  }
})


// updated it so the task is associated with owner. Added owner property to task model. --
router.post('/tasks', auth, async (req, res) => {
  const task = new Task({
    ...req.body,
    owner: req.user._id
  })

  try {
    await task.save()
    res.status(201).send(task)
  } catch (e) {
    res.status(400).send(e)
  }
})

router.delete('/tasks/:id', auth, async (req, res) => {
  try {
    // const task = await Task.findByIdAndDelete(req.params.id) this is before adding auth. Code below will ensure
    // auth is used and that only the owner can delete their own tasks and not anyone else's!
    const task = await Task.findOneAndDelete({ _id: req.params.id, owner: req.user._id })

    if(!task){
      return res.status(404).send()
    }

    res.send(task)
  } catch (e) {
    res.status(500).send()
  }
})

module.exports = router
