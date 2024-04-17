import { useDispatch, useSelector } from "react-redux";
import { fetchUrunListele } from "../../store/features/urunSlice";
function UserProfile(){
    const dispatch = useDispatch();
    const user = useSelector(state=> state.personel.data); 
    const yenile = ()=>{
        dispatch(fetchUrunListele());
    }  
    console.log('Profile Render oldu.');
    return(
        <div className="m-1 p-2">
            <div className="row align-items-center justify-content-center" >
                <img src={user.image} style={{
                    borderRadius: 100,
                    width: 100,
                    height: 100                  
                }} alt=""/>
            </div>
            <div className="row mt-1 text-center">
                <label>{user.userName}</label>
            </div>
            <div className="row mt-1 text-center">
                <label>{user.name}</label>
            </div>    
            <div className="row mt-2">
                <button className="btn btn-primary" onClick={yenile}>Verileri Yükle</button>
            </div>        
        </div>
    )
}
export default UserProfile;