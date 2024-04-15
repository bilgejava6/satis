import './Register.css'
import React,{ useState} from 'react';
import userController from '../../config/UserController';
function Register(){
    const [adsoyad,setAdsoyad] = useState('');
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    
    const register = () =>{
        /**
         * 1- Gerekli olan girişlerin alınması. [adsoyad, username, password]
         * 2- Almış olduğum bilgileri sunucaya iletmeliyim. [fecth -> post]
         * 3- Login page return.
         */
        fetch(userController.register,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'adsoyad': adsoyad,
                'username': username,
                'password': password
            })
        }).then(data=> data.json())
        .then(ahmetAmcaNasilsin=>{
            console.log(ahmetAmcaNasilsin);
        })
    }

    return(
        <div className="wrapper fadeInDown">
        <div id="formContent">                
            <div className="fadeIn first mt-2 p-4">
                <img src="/Lock_icon.png" id="icon" alt="User Icon" />
                <h1 className='mt-5'>Yeni Kayıt</h1>
            </div>

            <form>
                <input onChange={(evt)=>{
                    setAdsoyad(evt.target.value);
                }} type="text" id="name" className="fadeIn third" name="login" placeholder="name surname" />
                <input  onChange={(evt)=>{
                    setUsername(evt.target.value);
                }}
                type="text" id="login" className="fadeIn second" name="login" placeholder="username" />
                <input onChange={(evt)=>{
                    setPassword(evt.target.value);
                }}
                type="text" id="password" className="fadeIn third" name="login" placeholder="password" />
                <input type="button" className="fadeIn fourth" value="Register" onClick={register} />
            </form>
           
            <div id="formFooter">
                <a className="underlineHover" href="/login">Go to the Login</a>
            </div>

        </div>
    </div>
    )
}

export default Register;