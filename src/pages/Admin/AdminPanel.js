import { useSelector } from "react-redux";
import UserProfile from "../../components/UserProfile";

function AdminPanel(){
    const userProfileData = useSelector(state=> state.personel.data);

    return(
        <div className="container">
            <div className="row mt-5 p-3 border border-primary">
                <div className="col-10"></div>
                <div className="col-2 p-3 border border-danger" >
                    <UserProfile 
                        name={userProfileData.name} 
                        userName={userProfileData.userName} 
                        image={userProfileData.image}/>
                </div>                    
            </div>
            <div className="row mt-1 p-3 border border-success">
                
            </div>
        </div>
    )
}

export default AdminPanel;