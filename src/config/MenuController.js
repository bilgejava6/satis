import restApi from "./RestApis";

const menuUrl = {
    menuEkleme: restApi.menuUrl + '/add-menu',
    menuListesi: restApi.menuUrl + '/get-all' 
};

export default menuUrl;