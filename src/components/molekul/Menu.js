import { useState } from "react";
import { useSelector } from "react-redux";
function Menu(){
    const menuListesi = useSelector(state=> state.menu.menuList);
    const [aktif,setAktif] = useState(0);
    const secildi = (secilenId)=>{
        console.log('seçildi...: ', secilenId);
        setAktif(secilenId);
    }
    return(
        <ul class="list-group">
                    {
                        menuListesi.map((menu,index)=>{
                            if(index===aktif)
                                return(
                                    <li class="list-group-item active" aria-current="true">{menu.ad}</li>
                                )
                            else
                                return(
                                    <li onClick={()=>secildi(index)} class="list-group-item">{menu.ad}</li>
                                )
                        })
                    }
                    
        </ul>
    )
}

export default Menu;