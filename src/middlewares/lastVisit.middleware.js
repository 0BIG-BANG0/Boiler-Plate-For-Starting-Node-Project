export const lastVisit = (req, res, next) => {
    // 1. Check if cookie is set; if yes, set a local variable with the last visit time data
    if (req.cookies.lastVisit) {
        res.locals.lastVisit = new Date(req.cookies.lastVisit).toLocaleString();
    }
    
    // Set a new cookie with the current time as the last visit time, and expire it in 2 days
    res.cookie('lastVisit', new Date().toISOString(), {
        maxAge: 2 * 24 * 60 * 60 * 1000 // milliseconds
    });
    
    // Move to the next middleware
    next();
}
