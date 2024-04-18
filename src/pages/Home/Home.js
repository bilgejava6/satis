import { useDispatch, useSelector } from "react-redux";
import UrunListesi from "../../components/organizma/UrunListesi";
import { useEffect } from "react";
import { fetchUrunListele } from "../../store/features/urunSlice";

function Home(){
    const dispatch = useDispatch();
    const urunList = useSelector(state=> state.urun.urunList);
    useEffect(()=>{
        dispatch(fetchUrunListele());
    },[]);
    return(
        <>
          <div className="container-fluid">
            <div className="row mt-3">
                <div className="col-9">

                </div>
                <div className="col-3">
                              <button type="button" className="btn btn-primary position-relative">
                                <i class="fa-solid fa-cart-shopping"></i>
                                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                  3
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