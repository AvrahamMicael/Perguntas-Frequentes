const btns = document.querySelectorAll('.question-btn')

btns.forEach( btn => {
    btn.addEventListener('click', b => {
        const pergunta = b.currentTarget.parentElement.parentElement
        pergunta.classList.toggle('show-text')
    })
})

//------------------ ou

// const perguntas = document.querySelectorAll('.question')

// perguntas.forEach(pergunta => {
//     const botao = pergunta.querySelector('.question-btn')
//     botao.addEventListener('click', () => {
//         pergunta.classList.toggle('show-text')
//     })
// })