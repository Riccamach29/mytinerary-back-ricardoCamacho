const error_500 = (err, req, res, next) => {
    console.error("🔥 Error 500:", err);
    res.status(500).json({
        success: false,
        message: "Error interno del servidor",
        error: err.message,
    });
};

export default error_500;
