const perguntas = document.querySelectorAll('.question')

perguntas.forEach(pergunta => {
    const botao = pergunta.querySelector('.question-btn')
    botao.addEventListener('click', () => {
        pergunta.classList.toggle('show-text')

        perguntas.forEach(pergunta2 => {
            if(pergunta2 !== pergunta) pergunta2.classList.remove('show-text')
        })
    })
})