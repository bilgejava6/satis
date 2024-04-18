import { useState } from "react";
import { useSelector } from "react-redux";

function Sepet(){
    const sepetList = useSelector(state=> state.sepet.sepetList);
    const toplamHesapla = (list)=>{
        let result = 0;
        list.forEach(element => {
            result+= element.fiyat;
        });
        return result;
    }
    const [toplam,setToplam] = useState(toplamHesapla(sepetList));
    return(
        <div className="container">
            <div className="row mt-4"></div>
            <div className="row mt-4">
                    <div className="col-3"></div>
                    <div className="col-6 border border-success">
                            {
                                /**
                                 * İhtiyaç olduğu kadar div ekleyelim. Yani ürünler buray gelsin
                                 */
                                sepetList.map((urun,index)=>{                                    
                                    return(
                                        <div className="row m-3 border-bottom border-info pb-2 align-items-center">
                                            <div className="col-3">
                                                    <img alt="" src={urun.resim} width={70} height={70}/>
                                            </div>
                                            <div className="col-7 ">
                                                <label>{urun.ad}</label>
                                            </div>
                                            <div className="col-2">
                                                <label>{urun.fiyat}₺</label>
                                            </div>
                                        </div>
                                    )
                                })
                            }                           

                            <div className="row text-end">
                                <label>Ürün toplamı.....: {toplam}₺ </label>
                            </div>
                    </div>
                    <div className="col-3"></div>                        
            </div>
        </div>
    )
};

export default Sepet;