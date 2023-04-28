function IELTS(listening, reading, writing, speaking){
    let temp = [0,0,0,0]
    let arr = [listening, reading, writing, speaking]

    let count = 0
    for(let i in arr){
        let el = arr[i]

        if(el > 0 && el <= 9){
            if(el - Math.floor(el) == 0){
                temp[i] = el
            }
            else if (el - Math.floor(el) <= 0.5) {
                temp[i] = Math.floor(el) + 0.5
            }
            else if (el - Math.floor(el) > 0.5) {
                temp[i] = Math.ceil(el)
            }
            count += temp[i]
        }else {
            return 'bad request'
        }
    }
    count = count/4
    let floorcount = Math.floor(count)

    if(count - Math.floor(count) == 0){
        count = floorcount
    }else if(count - Math.floor(count) <= 0.5){
        count = floorcount + 0.5
    }else if (count - Math.floor(count) > 0.5) {
        count = floorcount + 1
    }
    return  +count.toFixed(1)
    
}

console.log(IELTS(6.7, 7.5, 8.5, 9.1))

let forum = document.getElementById('forum')

let listening = document.getElementById('listening')
let reading = document.getElementById('reading')
let writing = document.getElementById('writing')
let speaking = document.getElementById('speaking')
let temp = document.getElementById('temp')

forum.onsubmit = async function(e) {
    e.preventDefault()

    const res = IELTS(+listening.value, +reading.value, +writing.value, +speaking.value)
    console.log(res);
    temp.innerHTML = `${res}`
}