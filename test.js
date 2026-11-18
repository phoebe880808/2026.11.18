const flex = () => {
  return {
    text: 'a',
  }
}

const farm = ['a', 'b', 'c']

// [
//   { text: 'a' },
//   { text: 'b' },
//   { text: 'c' },
// ]

const output = farm.map((value) => {
  const data = flex()
  data.text = value
  return data
})

console.log(output)
