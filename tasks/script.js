// Задание 1
function findCouple(array, number){
    let end = array.length - 1
    let answer = []
    for(let i = 0; i < end; i++){
        for(let j = i; j < end; j++){
            if(array[i]+array[j]===number){
                if(i != j){
                    let couple = `${array[i]} + ${array[j]}`
                    answer.push(couple)
                    console.log(array[i], array[j])
                }
            }
        }
    }
    console.log(answer)
}

// let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 5, 1, 8, 9]
// findCouple(a, 10)

//Задание 2
function numDifference(array){
    let end = array.length
    let maxFirstCouple = 0
    let minSecondCouple = 1000000000000
    for(let i = 0; i < end; i++){
        for(let j = i; j < end; j++){
            if(i != j){
                let firstCouple = array[i]*array[j]
                if(firstCouple>maxFirstCouple){
                    maxFirstCouple=firstCouple
                }
            }
        }
    }
    for(let i = 0; i < end; i++){
        for(let j = i; j < end; j++){
            if(i != j){
                let secondCouple = array[i]*array[j]
                if(secondCouple<minSecondCouple){
                    minSecondCouple=secondCouple
                }
            }
        }
    }
    let answer = maxFirstCouple - minSecondCouple
    return answer
}

// let a = [1, 3, 10, 5]
// numDifference(a)

//Задание 3
function findDiagonals(matrix){
    let mainDiagonal = matrix[0][0] + matrix[1][1] + matrix[2][2]
    let sideDiagonal = matrix[2][0] + matrix[1][1] + matrix[0][2]
    let answer = mainDiagonal + sideDiagonal
    console.log(answer)
}

// let matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
// findDiagonals(matrix)

//Задание 4
function findUnique(array){
    let count = 0
    let answer = 0
    let end = array.length
    for(let i = 0; i < end; i++){
        for(let j = 0; j < end; j++){
            if(array[i] === array[j]){
                count++
            }
        }
        if(count===1){
            answer += array[i]
        }
        count = 0
    }
    return answer
}

// a = [1, 2, 2, 3, 3, 4, 5, 4, 5, 6, 7, 8, 8, 9, 7]
// findUnique(a)

//Задание 5
function twoArrays(fArray, sArray){
    let end = fArray.length
    let pass = fArray.length
    let numberCount = 0
    let count = 0
    if(fArray.length=sArray.length){
        for(let i = 0; i < end; i++){
            for(let j = 0; j < end; j++){
                if(fArray[i]===sArray[j]){
                    numberCount++
                    count++
                }
            }
            if(count>1){
                pass--
            }
            count = 0
        }
    }
    if(numberCount===end){
        if(pass<end){
            return "false"
        }else{
            return "true"
        }
    }else{
        return "false"
    }
}

// a = [1, 2, 3, 4, 5]
// b = [5, 4, 3, 2, 1]
// twoArrays(a, b)

//Задание 8

function fillArray(size, data){
    let array = []
    for(let i = 0; i<size; ++i){
        array.push(data)
    }
    return array
}

// fillArray(3, 'a')

//Задание 9

function erase(array){
    let answer = []
    for(let i = 0; i<array.length; ++i){
        if(typeof(array[i])==="number"){
            if(array[i]!=0){
                answer.push(array[i])
            }
        }
    }
    return answer
}

// const data = [0, 1, false, 2, undefined, '', 3, null];
// console.log(erase(data))

//Задание 11

function concatenate(array, separator){

    let answer = array.join(' ')
    return answer
}

console.log(concatenate(['Я','учусь','на','лучшей','кафедре'], ' '))