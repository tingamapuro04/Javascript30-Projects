const panels = document.querySelectorAll('.first')

const toggleopen = () => {
  console.log(this)
}

panels.forEach(function(panel) {
  panel.addEventListener('click', toggleopen)
})
