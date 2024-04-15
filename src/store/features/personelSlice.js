import {createAsyncThunk,createSlice} from '@reduxjs/toolkit';
import userController from '../../config/UserController';
const personelInitialState={
    token: '',
    isLogin: false
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
const fetchLogin = createAsyncThunk(
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

const fetchRegister = createAsyncThunk(
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
