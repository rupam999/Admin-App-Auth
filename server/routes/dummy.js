import {
	getDummyData,
	adminRoute,
	publicRoute,
	generalRoute,
} from '../controllers/dummy.js';

export const dummyData = (router) => {
	router.get('/dummy', getDummyData);
	router.get('/public', publicRoute);
	router.get('/admin', adminRoute);
	router.get('/general', generalRoute);
};
