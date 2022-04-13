//Production Route for admin double check
export const checkAdminReadScope = (req, res, next) => {
	if (req.authInfo.checkLocalScope('readadmin')) {
		next();
	} else {
		res.status(404).end('Page Not Found');
	}
};
