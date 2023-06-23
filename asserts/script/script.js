const firstString = document.querySelector('.text1')
const secondString = document.querySelector('.text2')
const message = document.querySelector('.content')
const submit = document.querySelector('.button')

const indices = (char, string) => {
  const indicesArray = []
  for (let i = 0; i < string.length; i++) {
    const element = string[i]
    if (element === char) {
      indicesArray.push(i)
    }
  }
  return indicesArray
}

const checkForIsophorms = (string1, string2) => {
  let isIsophorm = true
  for (let i = 0; i < string1.length; i++) {
    const indices1 = JSON.stringify(indices(string1[i], string1))
    const indices2 = JSON.stringify(indices(string2[i], string2))
    if (indices1 !== indices2) { isIsophorm = false }
  }
  return isIsophorm
}

submit.addEventListener('click', () => {
  const str1 = firstString.value
  message.classList.remove('hide')
  const str2 = secondString.value
  if (str1.length !== str2.length || str1 === '') {
    message.innerHTML = 'Please enter strings of equal length'
  } else {
    checkForIsophorms(str1, str2)

      ? message.innerHTML = 'True'
      : message.innerHTML = 'False'
  }
  firstString.value = ''
  secondString.value = ''
})
