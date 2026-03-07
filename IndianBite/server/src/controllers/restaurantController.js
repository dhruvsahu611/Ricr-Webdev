import Menu from "../models/menuSchema.js";
import { UploadMultipleToCloudinary } from "../utils/imageUploader.js";

export const RestaurantAddMenuItem = async (req, res, next) => {
  try {
    const {
      itemName,
      description,
      price,
      type,
      preparationTime,
      availability,
      servingSize,
      cuisine,
    } = req.body;

    const currentUser = req.user;
    console.log(req.files);

    if (
      !itemName ||
      !description ||
      !price ||
      !type ||
      !preparationTime ||
      !availability ||
      !servingSize ||
      !cuisine
    ) {
      const error = new Error("All fields are required");
      error.statusCode = 400;
      return next(error);
    }

    const images = await UploadMultipleToCloudinary(req.files);

    
    const newItems = await Menu.create({
      itemName,
      description,
      price,
      type,
      preparationTime,
      availability,
      servingSize,
      cuisine,
      images,
      restaurantID: currentUser._id,
    });

    res
      .status(201)
      .json({ message: "Menu Item Added Successfully", data: newItems });
  } catch (error) {
    next(error);
  }
};
