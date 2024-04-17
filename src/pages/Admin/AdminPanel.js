import {  useDispatch, useSelector } from "react-redux";
import UserProfile from "../../components/molekul/UserProfile";
import { useEffect, useState } from "react";
import {  fetchUrunListele } from "../../store/features/urunSlice";
import { fetchMenuListele } from "../../store/features/menuSlice";
import Menu from "../../components/molekul/Menu";
import UrunEkleme from "../../components/organizma/UrunEkleme";
import PersonelEkleme from "../../components/organizma/PersonelEkleme";

function AdminPanel(){
    const dispatch = useDispatch();
    //const [menuId, setMenuId] = useState(0);
    const menuId = useSelector(state=> state.menu.activeMenuId);
    useEffect(()=>{
        dispatch(fetchUrunListele());
        dispatch(fetchMenuListele());
    },[dispatch]);
    let OrtaAlan = ()=>{
        if(menuId===1)
            return <UrunEkleme />
        else if(menuId===3)
            return <PersonelEkleme />
        else
            return null;
    }
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
                    {
                        /**
                         * 
                         *  <Menu secimYapildi={(secim)=>{
                                console.log('admin panel secilen....: ', secim);
                                setMenuId(secim);
                            }} />
                         * 
                         */
                    }
                   <Menu />
                </div>
                <div className="col-9">
                    {
                        <OrtaAlan />
                    }                    
                </div>
            </div>
        </div>
    )
}

export default AdminPanel;