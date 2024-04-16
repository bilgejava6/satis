import { useSelector, useDispatch } from "react-redux";
import UserProfile from "../../components/UserProfile";
import { useEffect, useState } from "react";
import { fetchUrunEkleme, fetchUrunListele } from "../../store/features/urunSlice";

function AdminPanel(){
    const dispatch = useDispatch();
    const userProfileData = useSelector(state=> state.personel.data);   
    const urunListesi = useSelector(state=> state.urun.urunList); 
    const [urun,setUrun] = useState({
        ad: '',
        aciklama: '',
        fiyat: 0.0,
        resim:''
    });
    const urunEkle = ()=>{
        dispatch(fetchUrunEkleme(urun)).then(()=>{
            dispatch(fetchUrunListele());
        });
    };

    useEffect(()=>{
        dispatch(fetchUrunListele());
    },[dispatch]);

    return(
        <div className="container">
            <div className="row mt-5 p-3 border border-primary">
                <div className="col-10"></div>
                <div className="col-2 p-3 border border-danger" >
                    <UserProfile 
                        name={userProfileData.name} 
                        userName={userProfileData.userName} 
                        image={userProfileData.image}/>
                </div>                    
            </div>
            <div className="row mt-1 p-3 border border-success">
                <div className="col">
                        <div className="row">
                            <div className="mb-3">
                                <label className="form-label" style={{display:'block'}}>Ürün Adı</label>
                                <input type="text" className="form-control" placeholder="ürün adı" 
                                    onChange={(evt)=>{
                                      setUrun({
                                        ...urun,                                       
                                        ad: evt.target.value,                                       
                                      });
                                    }}
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label" style={{display:'block'}}>fiyat</label>
                                <input type="text" className="form-control" placeholder="00.00₺" 
                                    onChange={(evt)=> setUrun({...urun,fiyat:evt.target.value})}
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label" style={{display:'block'}}>Açıklama</label>
                                <input type="text" className="form-control" placeholder="ürün açıklaması" 
                                    onChange={(evt)=>setUrun({...urun,aciklama:evt.target.value})}
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label" style={{display:'block'}}>Resim URL</label>
                                <input type="text" className="form-control" placeholder="http://domain.com/urun.png" 
                                    onChange={(evt)=>setUrun({...urun,resim:evt.target.value})}
                                />
                            </div>
                            <div className="mb-3">
                                <button onClick={urunEkle} type="button" className="btn btn-success" style={{display:'block', width: '100%'}}>Ürün Ekle</button>
                            </div>
                            
                        </div>

                        <div className="row">
                            <table className="table table-hover">
                                <thead className="table-success">
                                    <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Ürün Adı</th>
                                    <th scope="col">Fiyat</th>
                                    <th scope="col">Açıklama</th>
                                    <th scope="col">Resim</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        urunListesi.map((data,index)=>{
                                            return(
                                                <tr key={index}>
                                                    <th scope="row">{data.id}</th>
                                                    <td>{data.ad}</td>
                                                    <td>{data.fiyat} ₺</td>
                                                    <td>{data.aciklama}</td>
                                                    <td>
                                                        <img src={data.resim} alt="" width={50} height={50}/>
                                                    </td>
                                                </tr>
                                            )
                                        })
                                    }
                                    
                                   
                                    
                                </tbody>
                            </table>
                        </div>


                </div>
            </div>
        </div>
    )
}

export default AdminPanel;