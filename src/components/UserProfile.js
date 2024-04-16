
function UserProfile(props){

    return(
        <div className="m-1 p-2">
            <div className="row align-items-center justify-content-center" >
                <img src={props.image} style={{
                    borderRadius: 100,
                    width: 100,
                    height: 100                  
                }} alt=""/>
            </div>
            <div className="row mt-1 text-center">
                <label>{props.userName}</label>
            </div>
            <div className="row mt-1 text-center">
                <label>{props.name}</label>
            </div>            
        </div>
    )
}
export default UserProfile;