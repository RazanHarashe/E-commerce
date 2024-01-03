import cartModel from "../../../DB/model/cart.model.js";

export const createCart = async (req, res) => {
  const { productId, quantity } = req.body;
  const cart = await cartModel.findOne({ userId: req.user._id });

  if (!cart) {
    const newCart = await cartModel.create({
      userId: req.user._id,
      products: { productId, quantity },
    });
    return res.status(201).json({ message: "sucess", newCart });
  }
  let matchedProduct = false;
  for (let i = 0; i < cart.products.length; i++) {
    if (cart.products[i].prodctId == productId) {
      cart.products[i].quantity = quantity;
      matchedProduct = true;
      break;
    }
    if (!matchedProduct) {
      cart.products.push({ productId, quantity });
    }
  }
  await cart.save();
  return res.status(201).json({ message: "success", cart });
};

export const removeItem = async (req, res) => {
  const { productId } = req.body;
  await cartModel.updateOne(
    { userId: req.user._id },
    {
      $pull: {
        products: { productId },
      },
    }
  );
  return res.status(200).json({ message: "sucess" });
};

export const clearCart = async (req, res) => {
  const clearCart = await cartModel.updateOne(
    { userId: req.user._id },
    { products: [] },
    { new: true }
  );
  return res.status(200).json({ message: "clear sucessfully", clearCart });
};

export const getCart = async (req, res) => {
  const cart = await cartModel.findOne({ userId: req.user._id });
  return res.status(200).json({ message: "sucess", cart });
};
