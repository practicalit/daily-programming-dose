//selecting the select and body
let select = document.getElementById('backColor');
let body =  document.querySelector('body');

//have the event-listener for the select 
select.addEventListener('change', (event) => {
    console.log("select changed.", event.target.value);
    let color = event.target.value;
    //check the value and assign it to the body
    if (color !== "") {
        body.style.backgroundColor = color;
    } else {
        body.style.backgroundColor = 'white';
    }
})