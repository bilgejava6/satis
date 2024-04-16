import React,{ useState } from 'react';
import './Login.css';
import { useDispatch } from 'react-redux';
import { fetchLogin } from '../../store/features/personelSlice';
import { useNavigate } from 'react-router-dom';

function Login(){
    const dispatch = useDispatch();   
    const navigate = useNavigate();
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const login = ()=>{
        dispatch(fetchLogin({username,password})).then((data)=>{            
            if(data.payload.status===200)
                navigate.call(null,'/admin-panel');
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