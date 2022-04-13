//Production Route for public double check
export const checkPublicScope = (req, res, next) => {
	if (req.authInfo.checkLocalScope('edit')) {
		next();
	} else {
		res.status(403).end('Forbidden');
	}
};
