function enviarFormulario () {
  let nombre = document.getElementById("nombre").value
  let apellido = document.getElementById("apellido").value
  let fechaN = document.getElementById("fechaN").value
  let lugarN = document.getElementById("lugarN").value

  let datos = document.getElementById("datosDelFormulario")

datos.innerHTML = `

El nombre capturado es: ${nombre}
<br>
El apellido capturado es: ${apellido}
<br>
La fecha de nacimiento capturada es: ${fechaN}
<br>
El lugar de nacimiento capturado es: ${lugarN}
`
  
}