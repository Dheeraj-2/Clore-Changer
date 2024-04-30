const button = document.querySelectorAll('.button');
const body = document.querySelector("body")

button.forEach(function(button){
    console.log(button)

    button.addEventListener('click',function(D){
        console.log(D)
        console.log(D.target)

        if (D.target.id === 'grey'){
            body.style.backgroundColor = D.target.id;
        }
        
        if (D.target.id === 'white'){
            body.style.backgroundColor = D.target.id;
        }
        
        if (D.target.id === 'blue'){
            body.style.backgroundColor = D.target.id;
        }
        
        if (D.target.id === 'yellow'){
            body.style.backgroundColor = D.target.id;
        }     
    })

});