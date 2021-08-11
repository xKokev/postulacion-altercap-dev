import React, {Fragment, useState} from 'react';
//import uuid from 'uuid/v4'
const Formulario = () => {

const [cita, setCita] = useState({
    nombre:'',
    apellido: '',
    rut:'',
    correo:''
})

const [error, setError] = useState(false)

const actualizarState = e =>{
 //   console.log('escribiendo... ')
 //console.log(e.target.name)
 //console.log(e.target.value)
 setCita({
     ...cita, 
     [e.target.name]: e.target.value
 })
}

const {nombre, apellido, rut, correo } = cita 

const submitCita = e  =>{
    e.preventDefault();
 //   console.log('enviando form')
 //Validacion
if(nombre.trim()=== '' || apellido.trim()=== '' || rut.trim()=== '' || correo.trim()=== '' ){
     console.log('Completa todos los campos')
   setError(true);
     return;
}
setError(false);
console.log(`Nombre:${cita.nombre}, Apellido:${cita.apellido}, RUT: ${cita.rut}, Correo: ${cita.correo} ` );

 // Reiniciar el formulario
 setCita ({
    nombre:'',
    apellido: '',
    rut:'',
    correo:''
 })
}
return ( <Fragment>
        <h2>Añadir persona</h2>
        {error ?  <p className='alerta-error'>😢 Todos los campos son obligatorios 😢 <br/> Por favor completa el formulario</p> : null}
        <form
        onSubmit={submitCita}
        >
            <label>Nombre</label>
            <input 
            type= 'text'
            name='nombre'
            className='u-full-width'
            placeholder='Escribe el nombre aqui'
            onChange={actualizarState}
            value={nombre}
            />
              <label>Apellido</label>
            <input 
            type= 'text'
            name='apellido'
            className='u-full-width'
            placeholder='Escribe el apellido aqui'
            onChange={actualizarState}
            value={apellido}
            />

        <label>RUT</label>
            <input 
            type= 'number'
            name='rut'
            className='u-full-width'
            placeholder='Escribe el RUT aqui'
            onChange={actualizarState}
            value={rut}

            />

        <label>Email</label>
            <input 
            type= 'email'
            name='correo'
            className='u-full-width'
            placeholder='Escribe el email aqui'
            onChange={actualizarState}
            value={correo}
            />

            <button 
            type='submit'
            className='u-full-width button-primary'
            
            >Agregar</button>
        </form>
    </Fragment> );
}
 
export default Formulario;