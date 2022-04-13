import {
	getDummyData,
	adminRoute,
	publicRoute,
	generalRoute,
} from '../controllers/dummy.js';
import { checkPublicScope } from '../middleware/index.js';

export const dummyData = (router) => {
	router.get('/dummy', checkPublicScope, getDummyData);
	router.get('/public', publicRoute);
	router.get('/admin', adminRoute);
	router.get('/general', generalRoute);
};
