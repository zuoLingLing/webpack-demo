window.onload = function(){
    document.querySelector('ul').style.listStyle='none';
    console.log(1)
    
}()

function* App () {
    yield 1,
    yield 2,
    yield 3
    return
}

let APP = App();
console.log(APP.next());
console.log(APP.next());
console.log(APP.next());
console.log(APP.next());

let text = 'acvsdfsdfs';
console.log(text.includes('ca'));

