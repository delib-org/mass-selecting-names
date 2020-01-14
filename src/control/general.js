export function simpleName(name) {
    let simpleName = name.replace(/ו/g, '');
    simpleName = simpleName.replace(/ה/g, '');
    simpleName = simpleName.replace(/י/g, '');
    simpleName = simpleName.replace(/א/g, '');
    simpleName = simpleName.replace(/ /g, '');

    return simpleName;
}

export function getRandomNames(arr, numberOfNames = 1) {
   console.log(arr, numberOfNames);
    if (arr) {
        if (arr.length <= numberOfNames) {
            console.error('too short array')
            return arr;
        } else {
            let arrayLength = arr.length;
            let i = 0, previous = 0;
            let tempArray = [], rands = new Set();
            while (i < numberOfNames) {
                let rand = Math.floor(Math.random() * arrayLength);
                previous = rands.size;
                rands.add(rand);
             
                if (previous < rands.size) {
                    arr[rand].isNew = true;
                    tempArray.push(arr[rand]);
                    i++;
                }
            }
            console.dir(tempArray)
            return tempArray;
        }


    }
   
}