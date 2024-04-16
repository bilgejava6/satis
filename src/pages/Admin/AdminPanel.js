import { useSelector } from "react-redux";
import UserProfile from "../../components/UserProfile";
import { useState } from "react";

function AdminPanel(){
    const userProfileData = useSelector(state=> state.personel.data);    
    const [urun,setUrun] = useState({
        ad: '',
        aciklama: '',
        fiyat: 0.0,
        resim:''
    });
    const urunEkle = ()=>{

    };
    
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
                                <input type="text" className="form-control" placeholder="ürün adı" />
                            </div>
                            <div className="mb-3">
                                <label className="form-label" style={{display:'block'}}>fiyat</label>
                                <input type="text" className="form-control" placeholder="00.00₺" />
                            </div>
                            <div className="mb-3">
                                <label className="form-label" style={{display:'block'}}>Açıklama</label>
                                <input type="text" className="form-control" placeholder="ürün açıklaması" />
                            </div>
                            <div className="mb-3">
                                <label className="form-label" style={{display:'block'}}>Resim URL</label>
                                <input type="text" className="form-control" placeholder="http://domain.com/urun.png" />
                            </div>
                            <div className="mb-3">
                                <button type="button" className="btn btn-success" style={{display:'block', width: '100%'}}>Ürün Ekle</button>
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
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>Ekran Kartı Asus</td>
                                        <td>25.000 ₺</td>
                                        <td>RTX4090</td>
                                        <td>
                                            <img src="https://picsum.photos/50/50" alt="" />
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>Ekran Kartı Asus</td>
                                        <td>25.000 ₺</td>
                                        <td>RTX4090</td>
                                        <td>
                                            <img src="https://picsum.photos/50/50" alt="" />
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>Ekran Kartı Asus</td>
                                        <td>25.000 ₺</td>
                                        <td>RTX4090</td>
                                        <td>
                                            <img src="https://picsum.photos/50/50" alt="" />
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>Ekran Kartı Asus</td>
                                        <td>25.000 ₺</td>
                                        <td>RTX4090</td>
                                        <td>
                                            <img src="https://picsum.photos/50/50" alt="" />
                                        </td>
                                    </tr>
                                    
                                </tbody>
                            </table>
                        </div>


                </div>
            </div>
        </div>
    )
}

export default AdminPanel;