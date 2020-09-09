require('../src/db/mongoose')
const User = require('../src/models/user')

//5f51ca988cdf2d1554e91bc9  id for Wednesday user

// User.findByIdAndUpdate('5f530c13f6611e0444d71487', { age: 35 }).then((user) => {
//   console.log(user)
//   return User.countDocuments({ age: 0 })
// }).then((result) => {
//   console.log(result)
// }).catch((e) => {
//   console.log(e)
// })


const updateAgeAndCount = async (id, age) => {
  const user = await User.findByIdAndUpdate(id, { age })
  const count = await User.countDocuments({ age })
  return count

}

updateAgeAndCount('5f530c13f6611e0444d71487', 99).then((count) => {
  console.log(count)
}).catch((e) => {
  console.log(e)
})
