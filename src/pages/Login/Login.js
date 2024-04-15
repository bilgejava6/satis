import { useState } from 'react';
import './Login.css';
import userController from '../../config/UserController';
import { useDispatch } from 'react-redux';
function Login(){
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const login = ()=>{
      
        fetch(userController.login,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',  // text, multipart/form-data           
            },
            body: JSON.stringify({
                username, // -> K,V 'username': username DİKKAT!!! Eğer Key ve Value aynı değişken ile ifade ediliyor ise
                // ayrı ayrı yazmanıza gerek yoktur.
                password // password: password
            })
        }).then(data=> data.json())
        .then(data=>{
            if(data.code===200 || data.status===200)
                console.log(data);
            else
                alert('Hata...'+ data.message);
        })
        .catch(error=>{           
            console.log(error);
        });
    }
    return(
        <div className="wrapper fadeInDown">
            <div id="formContent">                
                <div className="fadeIn first mt-2 p-4">
                    <img src="/Lock_icon.png" id="icon" alt="User Icon" />
                    <h1 className='mt-5'>Giriş Yap</h1>
                </div>

                <form>
                    <input  onChange={(evt)=>{setUsername(evt.target.value)}}
                    type="text" id="login" className="fadeIn second" name="login" placeholder="username" />
                    <input onChange={(evt)=>{setPassword(evt.target.value)}}
                    type="text" id="password" className="fadeIn third" name="login" placeholder="password" />
                    <input type="button" className="fadeIn fourth" value="Log In" onClick={login} />
                </form>
               
                <div id="formFooter">
                    <a className="underlineHover" href="/register">Go to the Register</a>
                </div>

            </div>
        </div>
    )
}

export default Login;