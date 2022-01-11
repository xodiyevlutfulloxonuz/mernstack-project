const {Router}= require('express')
const router=Router()
const {getAllUsers,addStore,getStoreById,updateStore,removeStore}=require('../controllers/storeController')

router.get('/',  getAllUsers)
router.get('/:id',getStoreById)
router.post('/add', addStore)
router.put('/:id',updateStore)
router.delete('/:id',removeStore)


module.exports=router

