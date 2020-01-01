export function simpleName(name) {
    let simpleName = name.replace(/ו/g, '');
    simpleName = simpleName.replace(/ה/g, '');
    simpleName = simpleName.replace(/י/g, '');
    simpleName = simpleName.replace(/א/g, '');
    simpleName = simpleName.replace(/ /g, '');

    return simpleName;
}

export function getRandomNames(arr, numberOfNames = 1) {

    if (arr) {

        if (arr.size <= numberOfNames) {
            return arr
        } else {
            //create random numbers
            let randNumbers = new Set();
            let safetyStop = numberOfNames*3;
            let i = 0;
            while (randNumbers.size < numberOfNames && i<safetyStop) {
                let newNumber = Math.ceil(Math.random() * (arr.length - 1));
                randNumbers.add(newNumber);
               
                i++;
            }

            let tempArr = [];
            randNumbers.forEach(rndNmb=>{
              
                arr[rndNmb].isNew = true;
                
                tempArr.push(arr[rndNmb]);
            })

            
            return tempArr;
        }
    }
    //lop through

    //handle less then number of names
}