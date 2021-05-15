import qs from 'qs';
import axios from '../../../utils/axios';

// const HEADERS = {
// 	headers: {
// 		Accept: 'application/json',
// 	},
// };

// const FORM_HEADER = {
// 	headers: {
// 		Accept: '*/*',
// 		'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
// 	},
// 	withCredentials: true,
// };

const URL_HELPER = {
	GET_SUB_TYPE_ENUM_LIST: `https://jsonplaceholder.typicode.com/todos/1`,
};

// Api Call to get the sub Type for the services enum list
async function postCategoryListApi(request) {
	try {
		const response = await axios.post(URL_HELPER.FETCH_CATALOG_PRICE, request);
		return response;
	} catch (error1) {
		// console.error('error:fetching:prices', error1);
		return {};
		// throw error;
	}
}

async function fetchCategoryListApi() {
	try {
        const response = await axios.get(`${URL_HELPER.GET_SUB_TYPE_ENUM_LIST}`);
        console.log(response,"response")
		return response;
	} catch (error) {
		throw error;
	}
}

export {
    fetchCategoryListApi,
	postCategoryListApi,
};
