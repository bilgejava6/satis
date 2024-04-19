import { useDispatch, useSelector } from "react-redux";
import UrunListesi from "../../components/organizma/UrunListesi";
import { useEffect } from "react";
import { fetchUrunListele } from "../../store/features/urunSlice";
import { useNavigate } from "react-router-dom";
import { fetchSepetListele } from "../../store/features/sepetSlice";

function Home(){
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const urunList = useSelector(state=> state.urun.urunList);
    const sepetAdedi = useSelector(state=> state.sepet.sepetAdedi);
    const userSepetAdedi = useSelector(state=> state.sepet.userSepetAdedi);
    const sepeteGit = ()=>{
      navigate.call(null,'/sepet');
    };
    useEffect(()=>{
        dispatch(fetchUrunListele());
        dispatch(fetchSepetListele(1));
    },[]);
    return(
        <>
          <div className="container-fluid">
            <div className="row mt-3">
                <div className="col-9">

                </div>
                <div className="col-3">
                              <button onClick={sepeteGit} type="button" className="btn btn-primary position-relative">
                                <i class="fa-solid fa-cart-shopping"></i>
                                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                  {userSepetAdedi}
                                  <span className="visually-hidden">unread messages</span>
                                </span>
                              </button>
                </div>
            </div>
           
          </div>

          <div className="container mt-5">
            <UrunListesi urunListesi={urunList}/>
          </div>  
        </>
            
    )
}

export default Home;