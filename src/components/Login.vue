<template>
  <div id="login">
      <div class="container-fluid">
        <div class="row">
            <div class="col-sm-4">
                <div class="d-grid mx-auto formdisgn"> 
                    <img src="../imgs/LogoWobiz.png" alt="" class="">
                    <h1 class="text-center">Ingresa a tu cuenta</h1>  
                    <form v-on:submit.prevent="login"> 
                        <div class="d-grid mx-auto">
                            <label for="Username" class="lblLogin">Email</label>
                            <input type="email" class="form-control" placeholder="ej: ejemplo@mail.com" aria-label="Username" v-model="username" required>
                            <label for="Password" class="lblLogin">Contraseña</label>
                            <input type="password" class="form-control" placeholder="Escribe tu contraseña" aria-label="Password" v-model="password"  minlength="6" required>
                            <a href="" class="olvCont">¿Olvidaste tu Contraseña?</a>
                            <button class=" btnMod" type="submit">Ingresar a mi cuenta</button>
                        </div>
                    </form>
                </div> 
            </div> 
            <div class="col" style="width:70%">
                    <div class="button-container">
                        <img src="../imgs/fondo.png" alt="" style="max-width:100%; vertical-align: middle;">
                        <div>
                            <label for="">¿No tienes una cuenta en Wobiz?</label>
                            <a href="" class="btn btn-outline-dark">Crea tu Cuenta</a>
                        </div>
                        
                    </div>
            </div> 
        </div> 
        
    </div>
    </div>

</template>

<script>

import axios from 'axios'

export default {
    name:'data',
    data(){
        return {
            username:"",
            password:"",
        }
    },
    methods:{
        login(){
            console.log("Usuario: "+this.username + ".. Password: "+this.password); //Para corroborar que toma los datos del form
            axios.get('https://admin.localwobiz.com/login',{
                params:{
                    Username: this.username,
                    Password: this.password
                }
            })
            .then(data =>{
                if(data.data.status == "ok"){
                    console.log("Funciona Correctamente")//Linkear con la view que corresponda
                }
                else
                {
                    this.error = true;
                    this.error_msg = data.data.result.error_msg;
                    console.log("No funciona"); //Generar aviso de que el usuario es incorrecto
                }
            })
        }
    }
}
</script>