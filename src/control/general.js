export function simpleName(name){
    let simpleName = name.replace(/ו/g,'');
    simpleName = simpleName.replace(/ה/g,'');
    simpleName = simpleName.replace(/י/g,'');
    simpleName = simpleName.replace(/א/g,'');
    simpleName = simpleName.replace(/ /g,'');

    return simpleName;
}