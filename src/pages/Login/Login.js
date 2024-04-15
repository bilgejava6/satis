import './Login.css';

function Login(){
    return(
        <div className="wrapper fadeInDown">
            <div id="formContent">                
                <div className="fadeIn first">
                    <img src="https://www.b-cube.in/wp-content/uploads/2014/05/aditya-300x177.jpg" id="icon" alt="User Icon" />
                    <h1>Aditya News</h1>
                </div>

                <form>
                    <input type="text" id="login" className="fadeIn second" name="login" placeholder="username" />
                    <input type="text" id="password" className="fadeIn third" name="login" placeholder="password" />
                    <input type="submit" className="fadeIn fourth" value="Log In" />
                </form>
               
                <div id="formFooter">
                    <a className="underlineHover" href="#">Go to the Site</a>
                </div>

            </div>
        </div>
    )
}

export default Login;