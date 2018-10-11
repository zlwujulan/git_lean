import ApiUtils from './network/ApiUtils';
const api = {
    getApiList: ['/product/getProductDetail', { method: 'get' }],
    getApiCodeLogin: ['/user/userSign/findMemberByPhone', { method: 'post' }],
};

const API = ApiUtils(api);

export default API;
