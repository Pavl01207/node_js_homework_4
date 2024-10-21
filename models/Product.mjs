import dataFileManager from "../utils/DataFileManager.mjs"
class Product {
  static loadProductsList() {
    try {
      return dataFileManager.loadData()
    } catch (error) {
      throw new Error("Не вдалось завантажити продукт!")
    }
  }
  static addNewProduct(productObject) {
    try {
      dataFileManager.addItem({ id: new Date().getTime(), ...productObject })
    } catch (error) {
      throw new Error("Не вдалось додати продукт!")
    }
  }
  static getProductById(id) {
    try {
      return dataFileManager.getItemById(id)
    } catch (error) {
      throw new Error("Не вдалось знайти продукт!")
    }
  }
  static updateProduct(id, productData) {
    try {
      dataFileManager.updateItemById(id, productData)
    } catch (error) {
      throw new Error("Не вдалось оновити продукт!")
    }
  }
  static deleteProductById(id) {
    try {
      dataFileManager.deleteItemById(id)
    } catch (error) {
      throw new Error("Не вдалось видалити продукт!")
    }
  }
}
export default Product
