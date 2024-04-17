import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setActiveMenuId } from "../../store/features/menuSlice";

function Menu(){
    const dispatch = useDispatch();
    const menuListesi = useSelector(state=> state.menu.menuList);
    const aktif = useSelector(state=> state.menu.activeMenuId);
    //const [aktif,setAktif] = useState(0);
    const secildi = (secilenId)=>{
        console.log('seçildi...: ', secilenId);
        //setAktif(secilenId);
        /**
         * Burada props içerisine bir method tanımı yapmış oluyoruz.
         */
      //  props.secimYapildi(secilenId);
        dispatch(setActiveMenuId(secilenId));
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