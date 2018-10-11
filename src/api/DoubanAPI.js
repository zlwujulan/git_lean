import ApiUtils from './network/ApiUtils';
const api = {
    getTheaterMovieList: ['/v2/movie/in_theaters', { method: 'get' }],
};

const API = ApiUtils(api);

export default API;
