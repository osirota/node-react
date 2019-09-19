export default (err, req, res, next) => {
    console.log(`[LOG] Error in ${req.method} ${req.originalUrl}`);
    let messages = [{ msg: 'INTERNAL SERVER ERROR' }];
    let status = 500;
    if (!(err instanceof Error)) {
    status = 400;
    messages = Object.values(err);
    } else if (err.name === 'HttpError') {
    status = err.status;
    messages = [{ msg: err.message }];
    }
    res.status(status).json(messages);
};