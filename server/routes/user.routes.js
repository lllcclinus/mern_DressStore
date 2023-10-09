import express from 'express'
	import userCtrl from '../controllers/user.controller.js' 
	const router = express.Router()
	router.route('/api/products') 
	.get(userCtrl.list)
	.post(userCtrl.create)
	router.route('/api/products/:userId') 
	.get(userCtrl.read)
	.put(userCtrl.update) 
	.delete(userCtrl.remove)
router.param('userId', userCtrl.userByID)
router.route('/api/products').post(userCtrl.create) 
router.route('/api/products').get(userCtrl.list)
router.param('userId', userCtrl.userByID)
router.route('/api/products/:userId').get(userCtrl.read)
router.route('/api/products/:userId').put(userCtrl.update)
router.route('/api/products/:userId').delete(userCtrl.remove)




    
    
	export default router
