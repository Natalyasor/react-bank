// Підключаємо роутер до бек-енду
const express = require('express')
const router = express.Router()
const { User } = require('../class/user')


User.create({
  email: 'test@mail.com',
  password: '123'
})
// Підключіть файли роутів
// const test = require('./test')
// Підключіть інші файли роутів, якщо є

// Об'єднайте файли роутів за потреби
// router.use('/', test)
// Використовуйте інші файли роутів, якщо є

router.get('/SignUpPage',(req, res) => {
  return res.render('SignUpPage', {
    name: 'SignUpPage',
    component: [],
    title: 'Signup Page'
  })
 
})


router.post('/SignUpPage',(req, res) => {
  const { email, password } = req. body

  console.log(req.body)

  if(!email || !password) {
    return res.status(400).json({
      message: "Помилка. Обовязкові поля відсутні"
    })
  }

 try {
   User.create({ email, password })
   
  return res.status(200).json({
    message: " Користувач успішно зареєстрований"
  })
 } catch (err) {
  return res.status(400).json({
    message: "Помилка створення користувача"
  })
 }
})
// Експортуємо глобальний роутер
module.exports = router
