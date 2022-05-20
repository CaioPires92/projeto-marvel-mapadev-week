const characters = document.querySelectorAll('.character')

characters.forEach(character => {
  const idSelected = character.attributes.id.value
  if (idSelected === 'ultron') return

  character.addEventListener('mouseenter', () => {
    const selectedCharacter = document.querySelector('.selected')
    selectedCharacter.classList.remove('selected')
    character.classList.add('selected')

    const selectedName = character.getAttribute('data-name')

    const imgPlayer1 = document.getElementById('character-player1')
    imgPlayer1.src = `src/imagens/${idSelected}.png`

    const namePlayer1 = document.getElementById('namePlayer1')
    namePlayer1.innerHTML = `${selectedName}`
  })
})
