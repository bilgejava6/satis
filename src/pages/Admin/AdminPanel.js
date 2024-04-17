import {  useDispatch } from "react-redux";
import UserProfile from "../../components/molekul/UserProfile";
import { useEffect } from "react";
import {  fetchUrunListele } from "../../store/features/urunSlice";
import { fetchMenuListele } from "../../store/features/menuSlice";
import Menu from "../../components/molekul/Menu";
import UrunEkleme from "../../components/organizma/UrunEkleme";

function AdminPanel(){
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(fetchUrunListele());
        dispatch(fetchMenuListele());
    },[dispatch]);
    console.log('Admin Panel Render oldu.');
    return(
        <div className="container">
            <div className="row mt-5 p-3 border border-primary">
                <div className="col-10"></div>
                <div className="col-2 p-3 border border-danger" >
                    <UserProfile />
                </div>                    
            </div>
            <div className="row mt-1 p-3 border border-success">
                <div className="col-3 ">
                    <Menu />
                </div>
                <div className="col-9">
                    <UrunEkleme />
                </div>
            </div>
        </div>
    )
}

export default AdminPanel;