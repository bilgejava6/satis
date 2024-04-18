import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sepeteEkle, sepettenCikart } from "../../store/features/sepetSlice";

function UrunKarti(props){
    const dispatch = useDispatch();
    const urun = props.urun;
    const [isActive, setIsActive] = useState(false);
    const sepetAdedi = useSelector(state=> state.sepet.sepetAdedi);
    const buttonClick = ()=>{
        if(isActive){ // sepetten çıkart
            dispatch(sepettenCikart(urun));
        }else{ // sepete ekle
            dispatch(sepeteEkle(urun));    
        }
        setIsActive(!isActive);
    }
    return(
        <div className="col-3 m-3 border border-success">
            <div className="row justify-content-center align-items-center">
                <img alt="" src={urun.resim} style={{height: '70%',width: '70%', margin: 10, borderRadius: 20}} />
            </div>
            <div className="row p-2">
                <h3>{urun.ad}</h3>
            </div>
            <div className="row p-2">
                <p>{urun.aciklama}</p>
            </div>
            <div className="row p-2">
                <p>{urun.fiyat} ₺</p>
            </div>
            <div className="row p-2">
                {
                    sepetAdedi < 3 || isActive
                    ?
                        isActive 
                        ?  <button onClick={buttonClick} className="btn btn-danger">Sepetten Çıkart</button> 
                        :  <button onClick={buttonClick} className="btn btn-info">Sepete Ekle</button> 
                    : null
                }
                   
            </div>            
        </div>
    )
};

export default UrunKarti;