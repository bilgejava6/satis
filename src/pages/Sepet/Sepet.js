import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSepetListele } from "../../store/features/sepetSlice";

function Sepet(){
    const dispatch = useDispatch();
    const sepetList = useSelector(state=> state.sepet.sepetList);
    const sunucuSepetListesi = useSelector(state=>state.sepet.userSepetList);
    const toplamHesapla = (list)=>{
        let result = 0;
        list.forEach(element => {
            result+= element.toplamFiyat;
        });
        return result;
    }
    const [toplam,setToplam] = useState(toplamHesapla(sunucuSepetListesi));
    const numberFormat = (value) => {
        return value ? value?.toString()?.replace(/\B(?=(\d{3})+(?!\d))/g, '.') : 0;
      };
    useEffect(()=>{
        dispatch(fetchSepetListele(1));
    },[]);
    return(
        <div className="container">
            <div className="row mt-4"></div>
            <div className="row mt-4">
                    <div className="col-1"></div>
                    <div className="col-10 border border-success">
                            {
                                /**
                                 * İhtiyaç olduğu kadar div ekleyelim. Yani ürünler buray gelsin
                                 */
                                sunucuSepetListesi.map((urun,index)=>{                                    
                                    return(
                                        <div className="row m-3 border-bottom border-info pb-2 align-items-center">
                                            <div className="col-3">
                                                    <img alt="" src={urun.resim} width={70} height={70}/>
                                            </div>
                                            <div className="col-6 ">
                                                <label>{urun.ad}</label>
                                            </div>
                                            <div className="col-1 ">
                                                <label>{urun.adet}</label>
                                            </div>
                                            <div className="col-1">
                                                <label>{numberFormat(urun.fiyat)}₺</label>
                                            </div>
                                            <div className="col-1">
                                                <label>{numberFormat(urun.toplamFiyat)}₺</label>
                                            </div>
                                        </div>
                                    )
                                })
                            }                           

                            <div className="row text-end">
                                <label>Ürün toplamı.....: {numberFormat(toplam)}₺ </label>
                            </div>
                    </div>
                    <div className="col-1"></div>                        
            </div>
        </div>
    )
};

export default Sepet;