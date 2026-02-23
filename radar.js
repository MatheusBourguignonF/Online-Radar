const action = document.querySelector('.submit')
const number = document.querySelector('.speed') 

const roadSelect = document.getElementById('vias') 
const roadLimits = {
    IDontKnow: { min: 15, max: 60 },
    FastTransit: { min: 40, max: 80 },
    Arterial: { min: 30, max: 60 },
    Collector: { min: 20, max: 50 },
    Local: { min: 15, max: 40 },
    Highway: { min: 60, max: 110 }
}
action.addEventListener('click', () => {
    calculate()
})

function calculate() {
    
    const selectedRoad = roadSelect.value
    const limits = roadLimits[selectedRoad]

    const speed = Number(number.value) 
    const resultContainer = document.querySelector(`.hidden`)
    resultContainer.className = ('result_Container')
    const result = document.createElement(`p`)
    resultContainer.innerHTML = ''
    
    result.className = 'result'

        if (speed < limits.min) {
            //console.log('Você foi multado por trafegar abaixo da velocidade mínima permitida na via. Sua velocidade registrada foi de ${speed} km/h.')
            result.innerText = `Você foi multado por trafegar abaixo da velocidade mínima permitida na via. Sua velocidade registrada foi de ${speed} km/h.`
            result.style.color = 'rgb(223, 88, 88)'
            result.style.fontWeight = '50'
            resultContainer.appendChild(result)
        } 
        else if (speed > limits.max) {
            //console.log('Você foi multado por ultrapassar a velocidade máxima permitida na via. Sua velocidade registrada foi de ${speed} km/h.')
            result.innerText = `Você foi multado por ultrapassar a velocidade máxima permitida na via. Sua velocidade registrada foi de ${speed} km/h.`
            result.style.color = 'rgb(223, 88, 88)'
            resultContainer.appendChild(result)
        } else  {
            result.innerText = `Velocidade dentro do limite permitido. Velocidade registrada: ${speed} km/h.`
            result.style.color = 'rgb(88, 223, 88)'
            resultContainer.appendChild(result)
        }
}
