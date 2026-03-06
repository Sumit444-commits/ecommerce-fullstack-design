import express from "express"
import { fetchingServices, service, getServiceById } from "../controllers/product-controller.js"
import authMiddleware from "../middleware/auth-middleware.js"

const router = express.Router()

router.route("/product/add").post(authMiddleware,service)
router.route("/product/get/:id").get(getServiceById);

router.route("/products").get(fetchingServices)

export default router