const valor = document.getElementById('valor');

document.getElementById('convertir').addEventListener('click',()=>{
    
        let f =  document.getElementById('farenheit').value;
          let c = (f-32)/1.8;

          console.log(c);

          if(c<0){g
  
            alert("El valor en Farenheit debe ser mayor a 31°F")

          } else if (c>100){

            alert("El valor en Farenheit debe ser menor a 213°F")

        } else {
          c = c.toFixed(1)
          document.getElementById('celcius').value=c;
            valor.textContent = `${c}°`
            valor.style.height = `${c}px`

        }


    
})



/* document.getElementById('farenheit').addEventListener('keyup',()=>{
    
    let f =  document.getElementById('farenheit').value;
      let c = (f-32)/1.8;

      c = c.toFixed(2)
      document.getElementById('celcius').value=c;


      console.log(c);


})

document.getElementById('celcius').addEventListener('keyup',()=>{
    
    let c =  document.getElementById('celcius').value;
      let f = (c-1.8)+32;

      f = f.toFixed(2)
      document.getElementById('farenheit').value=f;


      console.log(c);


})
 */

/* function convertir() {
  let f =  document.getElementById('farenheit').value;
    let c = (f-32)/1.8;

    document.getElementById('celcius').innerHTML=c;
} */