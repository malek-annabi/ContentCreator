// Filename: api-routes.js
// Initialize express router
let router = require('express').Router();
// Set default API response
router.get('/', function (req, res) {
    res.json({
        status: 'API Its Working',
        message: 'Welcome to RESTHub crafted with love!'
    });
});
// Import contact controller
var adminController = require('./adminController');
router.route('/admins')
    .get(adminController.index)
    .post(adminController.new);
router.route('/admins/:admin_id')
    .get(adminController.view)
    .patch(adminController.update)
    .put(adminController.update)
    .delete(adminController.delete);
// Export API routes
module.exports = router;