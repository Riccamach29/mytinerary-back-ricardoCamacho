
const error_400 = (err, req, res, next) => {
    
    if (err.name === "ValidationError" || err.status === 400) {
        console.error("🔥 Error 400:", err);
        return res.status(400).json({
            success: false,
            message: err.message || 'Solicitud incorrecta',
            details: err.errors || err.message
        });
    }
    next(err); 
};

export default error_400;
