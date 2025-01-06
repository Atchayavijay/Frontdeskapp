const jwt = require('jsonwebtoken');
const { SECRET_KEY } = require('../utils/config');

const auth = {
    // Middleware to check if the user is authenticated
    checkAuth: (request, response, next) => {
        const token = request.cookies.token;

        // If the token is not present, send a response
        if (!token) {
            return response.status(401).json({ message: 'Unauthorized' });
        }

        try {
            // Verify the token
            const decoded = jwt.verify(token, SECRET_KEY);

            // Set the user id in the request object
            request.userId = decoded.id;

            // Continue with the request
            next();
        } catch (error) {
            response.status(500).json({ message: error.message });
        }
    },
    logout: async (request, response) => {
        try {
            // clear the cookie
            response.clearCookie('token');

            // send a response
            response.status(200).json({ message: 'Logout successful' });
        } catch (error) {
            response.status(500).json({ message: error.message });
        }
    },
    me: async (request, response) => {
        try {
            const userId = request.userId;

            // find the user with the id
            const user = await User.findById(userId).select('-password -__v');

            // send a response
            response.status(200).json({ user });
        } catch (error) {
            response.status(500).json({ message: error.message });
        }
    }
}

module.exports = auth;