import connectDB from "../../DB/connection.js";
import categoriesRouter from "./categories/categories.router.js";
import productsRouter from "./products/products.router.js";
import subcategoryRouter from "./subcategory/subcategory.router.js";
import authRouter from "./auth/auth.router.js";
import couponRouter from "./coupon/coupon.router.js";
import cartRouter from "./cart/cart.router.js";
import orderRouter from "./order/order.router.js";
import userRouter from "./user/user.router.js";
import cors from "cors";
import { glopalErrorHandler } from "../services/errorHandling.js";
const initApp = async (app, express) => {
  //     //connect with frontend
  //   app.use(async (req, res, next) => {
  //     let whitelist = ["http://www.razan.com"];
  //     if (!whitelist.includes(req.header("origin"))) {
  //       return next(new Error(`invalid`, { cause: 403 }));
  //     } else {
  //       next();
  //     }
  //   });
  app.use(cors());
  app.use(express.json());
  connectDB();
  app.get("/", (req, res) => {
    return res.status(200).json({ message: "welcome" });
  });
  app.use("/userPdf", express.static("./"));
  app.use("/auth", authRouter);
  app.use("/categories", categoriesRouter);
  app.use("/products", productsRouter);
  app.use("/subcategory", subcategoryRouter);
  app.use("/coupon", couponRouter);
  app.use("/cart", cartRouter);
  app.use("/order", orderRouter);
  app.use("/user", userRouter);

  app.get("*", (req, res) => {
    return res.status(500).json({ message: "page not found" });
  });

  app.use(glopalErrorHandler);
};

export default initApp;
