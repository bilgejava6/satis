import './Login.css';

function Login(){
    return(
        <div className="wrapper fadeInDown">
            <div id="formContent">                
                <div className="fadeIn first mt-2 p-4">
                    <img src="/Lock_icon.png" id="icon" alt="User Icon" />
                    <h1 className='mt-5'>Giriş Yap</h1>
                </div>

                <form>
                    <input type="text" id="login" className="fadeIn second" name="login" placeholder="username" />
                    <input type="text" id="password" className="fadeIn third" name="login" placeholder="password" />
                    <input type="submit" className="fadeIn fourth" value="Log In" />
                </form>
               
                <div id="formFooter">
                    <a className="underlineHover" href="/register">Go to the Register</a>
                </div>

            </div>
        </div>
    )
}

export default Login;