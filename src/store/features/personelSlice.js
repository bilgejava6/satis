import {createAsyncThunk,createSlice} from '@reduxjs/toolkit';
import userController from '../../config/UserController';
const personelInitialState={
    token: '',
    data: {},
    isLogin: false,
    isLoadingFetchLogin: false,
    isLoadingFetchRegister: false
};


/**
 * Burada 2 farklı işlemimiz olacak
 * 1- fetch işlemlerini yöneteceğimiz kısım.
 * 2- state bilgilerini güncellediğimiz kısım.
 * state bilgileri fetch işlemlerinin sonuçlarına göre takip edilerek setlenevilirler.
 */
/**
 * DİKKAT!!!! 
 * Burada asyncThunk lara verdiğiniz isimler benzersiz olmalıdır. kopyala
 * yapıştır işle işlem yapılırken genellikle isimler değiştirilmedeb işlem ya
 * yapılmaya çalıılır bu nedenle sonuçlar hatalı çalışır.
 * payload -> bu methodu kullanmak isteyen birisi methoda parametre girmek istiyor ise
 * bunu kullanır. Yani bu methoda girilen tüm değişkenler bu payload değişkenine atanır.
 * fetchLogin({username,password}) -> username,password = payload
 * 
 * public String getName(){
 *  return "ali";
 * }
 * DİKKAT!!!!! async işlemler zaman alan işlemlerdir, ve kendileri tetiklendikten sonra
 * diğer kodların çalışmasına izin verirler. Ancak eğer bu işlemin neticesi beklenecek ise
 * o zaman asenkron işlemin bitişinin bekletilebilmesi için method önüne "await" eklenir.
 */
export const fetchLogin = createAsyncThunk(
    'personel/fetchLogin',
    async (payload)=>{
        try {
            const result = await fetch(userController.login,{
                method: 'POST',
                headers:{
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            }).then(data=>data.json())
              .then(data=> data);           
            return result;
        } catch (error) {
            console.log('ERROR: personel/fetchLogin...: ', error);
        }
      
    }
);

export const fetchRegister = createAsyncThunk(
    'personel/fetchRegister',
    async (payload)=>{
        try {
            const result = await fetch(userController.register,{
                method: 'POST',
                headers: { 'Content-Type':'application/json'},
                body: JSON.stringify(payload)
            }).then(data=>data.json()).then(data=>data)
            return result;
        } catch (error) {
            console.log("ERROR: personel/fetchRegister...: ", error);
        }

    }
);

const personelSlice = createSlice({
    name: 'personel',
    initialState: personelInitialState,
    /**
     * default değerleri almak ve yönetmek için kullanıyoruz. Çünkü slice içinde
     * bu değerleri sunucudan gelen değereler ile setlememiz gerekiyor. Bu işlemleri
     * yapmak için kullanıyoruz.
     */
    reducers: {},
    extraReducers:(build)=>{
            /**
             * Bir sunucu request işlemi 3 aşamada takip edilir. 
             * 1- işlemin başladığı an, 
             * 2- işlemin başarı ile tamamlandığı an,
             * 3- işlemin başarısız olduğu an 
             * bunları hepsi için burada bir aksiyon yazmamız gerekecektir. 
             * Mesela işlem başladığında bunu belirten bir loading ikonu çıkartmak
             * işlem bittiğinde bunu kpatmak gibi işlemler burada yapılır. Sunucudan
             * gelen veriler state ler içine aktarılır ya da bir hata olduğunda hata 
             * kullanıcıya iletilir.
             */
            build.addCase(fetchLogin.pending,(state)=>{
                state.isLoadingFetchLogin = true;
            }); // işlemin devam ettiği an
            build.addCase(fetchLogin.fulfilled,(state,action)=>{
                state.isLoadingFetchLogin = false;
                if(action.payload.status===null || action.payload.status!==200){
                  alert('hata...:'+ action.payload.message);  
                }else{   
                    console.log("gelen data....: ", action.payload);               
                    state.data = action.payload.data;
                    state.isLogin = true;
                   // sessionStorage.setItem("token", action.payload.data);
                }
               
            }); // işlem tamamlandı
            build.addCase(fetchLogin.rejected,(state)=>{
                state.isLoadingFetchLogin=false;
            }); // işlem iptal oldu
            build.addCase(fetchRegister.pending,(state)=>{
                state.isLoadingFetchRegister= true;
            });
            build.addCase(fetchRegister.fulfilled,(state,action)=>{
                state.isLoadingFetchRegister = false;
                console.log(action.payload);
            });
            build.addCase(fetchRegister.rejected,(state)=>{
                state.isLoadingFetchRegister = false;
            });
    }
});

export default personelSlice.reducer;
