const form = document.querySelector('.form-test-drive')
form.addEventListener('submit', e => {
  e.preventDefault()

  let data = {}

  for (let {name, value} of form.elements) {
    if (name) {
      data[name] = value
    }
  }

  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify(data)
  })
    .then(response => {
      if (response.status === 200 || response.status === 201) {
        return response.json()
      } else {
        throw new Error(response.text)
      }
    })
    .then(data => {
      if (form.name.value.trim() === ''){
        throw new Error("Введите 'Имя'")
      } else if (form.mail.value.trim() === '') {
        throw new Error("Введите 'Электронную почту'")
      } else if (form.phone.value.trim() === '') {
        throw new Error("Введите 'Телефон'")
      } else {
        alert('Данные успешно отправлены')
        console.log(data)
        form.reset()
      }
    })
    .catch(error => {
      alert('Ошибка: ' + error.message)
    })
})