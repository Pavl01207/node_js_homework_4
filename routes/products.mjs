import ProductsController from "../controllers/products.mjs"
import { Router } from "express"
const router = Router()

router.get("/", ProductsController.mainProducts)
router.get("/create", ProductsController.createForm)
router.get("/:id", ProductsController.productDetail)
router.post("/", ProductsController.createProduct)
export default router
