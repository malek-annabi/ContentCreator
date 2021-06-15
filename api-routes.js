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
// Import admin controller
var adminController = require('./Admin/adminController');
router.route('/admins').get(adminController.index);
router.route('/admins').post(adminController.new);
    
router.route('/admins/:admin_id').get(adminController.view);
router.route('/admins/:admin_id').patch(adminController.update);
router.route('/admins/:admin_id').put(adminController.update);
router.route('/admins/:admin_id').delete(adminController.delete);

var clipController = require('./Clip/clipController');
router.route('/clips').get(clipController.index);
router.route('/clips').post(clipController.new);
    
router.route('/clips/:clips_id').get(clipController.view);
router.route('/clps/:clips_id').patch(clipController.update);
router.route('/clips/:clips_id').put(clipController.update);
router.route('/clips/:clips_id').delete(clipController.delete);
// Export API routes
module.exports = router;