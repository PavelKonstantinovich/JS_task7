// Задание №1 и №2

const [form, textInput, ulElement] = [document.querySelector('form'), document.querySelector('input'), document.querySelector('ul')]

form.addEventListener('submit', function (list) {
  list.preventDefault()

  const listElement = document.createElement('li')
  const textInputValue = form.querySelector('input')
  listElement.textContent = textInputValue.value
  textInputValue.value = ''

  const inputCheckbox = document.createElement('input')
  inputCheckbox.type = 'checkbox'
  listElement.prepend(inputCheckbox)
  inputCheckbox.addEventListener('click', function () {
    if (inputCheckbox.checked) {
      listElement.style.textDecoration = 'line-through'
    }
  })

  const inputDelete = document.createElement('input')
  inputDelete.setAttribute('type', 'submit')
  inputDelete.value = 'Удалить задачу'
  listElement.append(inputDelete)
  inputDelete.addEventListener('click', function () {
    listElement.remove()
  })

  ulElement.append(listElement)
})
