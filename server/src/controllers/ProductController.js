import Product from "../models/products.js";
class ProductController {
  static async getAllProducts(req, res) {
    try {
      const products = await Product.findAll();
      res.status(200).json(products);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch products" });
    }
  }

  static async getProductById(req, res) {
    try {
      const product = await Product.findByPk(req.params.id);
      if (product) {
        res.status(200).json(product);
      } else {
        res.status(404).json({ error: "Product not found" });
      }
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch product" });
    }
  }

  // Create a new product
  // static async createProduct(req, res) {
  //   try {
  //     const newProduct = await Product.create(req.body); // Create a new product with the provided data
  //     res.status(201).json(newProduct); // Respond with the newly created product
  //   } catch (error) {
  //     res.status(500).json({ error: "Failed to create product" });
  //   }
  // }
  //   static async createProduct(req, res) {
  //   try {
  //     const { name, size, price, image, description } = req.body;

  //     // Validate required fields (adjust as needed)
  //     if (!name || !price) {
  //       return res.status(400).json({ error: "Name and price are required" });
  //     }

  //     // Create a new product with the provided data
  //     const newProduct = await Product.create({
  //       // If your model columns are named differently, adjust here
  //       name,
  //       size,          // "X-Small, Small, Medium, Large"
  //       price,         // "24,28, 38, 48"
  //       image,
  //       description,   // optional
  //     });

  //     res.status(201).json(newProduct);
  //   } catch (error) {
  //     console.error(error);
  //     res.status(500).json({ error: "Failed to create product" });
  //   }
  // }
  static async createProduct(req, res) {
    try {
      const { name, size, price, image } = req.body;

      if (!name || !price) {
        return res.status(400).json({ error: "Name and price are required" });
      }

      const newProduct = await Product.create({
        name,
        size,
        price,
        image,
        description,
      });

      res.status(201).json(newProduct);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Failed to create product" });
    }
  }

  static async updateProductById(req, res) {
    try {
      const [updated] = await Product.update(req.body, {
        where: { id: req.params.id },
      });
      if (updated) {
        const updatedProduct = await Product.findByPk(req.params.id);
        res.status(200).json(updatedProduct);
      } else {
        res.status(404).json({ error: "Product not found" });
      }
    } catch (error) {
      res.status(500).json({ error: "Failed to update product" });
    }
  }

  static async deleteProductById(req, res) {
    try {
      const deleted = await Product.destroy({
        where: { id: req.params.id },
      });
      if (deleted) {
        res.status(204).send();
      } else {
        res.status(404).json({ error: "Product not found" });
      }
    } catch (error) {
      res.status(500).json({ error: "Failed to delete product" });
    }
  }
}

export default ProductController;
