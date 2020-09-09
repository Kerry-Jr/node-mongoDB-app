require('../src/db/mongoose')
const Task = require('../src/models/task')

// Task.findByIdAndDelete('5f530f11f762b656ac4d2886').then((task) => {
//   console.log('What is done.. is done.', task)
//   return Task.countDocuments({ completed: false })
// }).then((result) => {
//   console.log(result)
// }).catch((e) => {
//   console.log(e)
// })

const deleteTaskAndCount = async (id, completed) => {
  const deletedTask = await Task.findByIdAndDelete(id)
  const count = await Task.countDocuments({ completed: false })
  return count
}

deleteTaskAndCount('5f5559241f0e092074c4df42').then((count) => {
  console.log(count)
}).catch((e) => {
  console.log(e)
})
