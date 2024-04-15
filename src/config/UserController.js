import restApi from "./RestApis";
const userUrl ={
    login: restApi.personelUrl + '/login',
    register: restApi.personelUrl + '/register'
};

export default userUrl;