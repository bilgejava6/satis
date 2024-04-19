const root = 'http://localhost:9090';
const restApi = {
    personelUrl : root+ '/personel',
    urunUrl : root + '/urun',
    menuUrl: root + '/menu',
    sepetUrl: root + '/sepet'
};
/**
 * Burada tanımını yaptığınız bileşenleri dışarıya açmak istiyorsanız
 * export etmelisiniz.
 */
export default restApi;