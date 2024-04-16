import restApi from "./RestApis";

const urunUrl={
    urunEkle: restApi.urunUrl + '/ekle',
    urunListele: restApi.urunUrl + '/get-all'
};

export default urunUrl;