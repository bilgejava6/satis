import UrunKarti from "../molekul/UrunKarti";

function UrunListesi(props){
    const urunListesi = props.urunListesi;
    return(        
        <div className="row">
            {
                urunListesi.map((urun,index)=>{
                    return <UrunKarti key={index} urun={urun} />
                })
            }
            
                        
        </div>
    )
};

export default UrunListesi;