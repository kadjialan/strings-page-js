const input1 = document.querySelector('.text1')
const input2 = document.querySelector('.text2')
const done = document.querySelector('.button')
const holder = document.querySelector('.content')
let bizarre
done.onclick = function compare () {
  const result1 = (input1.value).split('')
  const result2 = (input2.value).split('')
  const map = {}
  if (result1.length === result2.length) {
    for (let i = 0; i < result1.length; i++) {
      if (map[result1[i]] === undefined) {
        map[result1[i]] = result2[i]
        bizarre = true
      } else if (map[result1[i]] !== result2[i]) {
        bizarre = false
      }
    }
    if (bizarre !== true) {
      holder.innerHTML = 'false'
    } else {
      holder.innerHTML = 'true'
    }
  } else {
    holder.innerHTML = 'strings are unequal'
  }
}
