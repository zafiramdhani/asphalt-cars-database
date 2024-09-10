import Car from "../models/car.model.js";
import mongoose from "mongoose";

export const getCars = async (req, res) => {
  try {
    const cars = await Car.find({});
    res.status(200).json({
      status: 200,
      success: true,
      message: "Request successful",
      data: cars
    })
  } catch (error) {
    res.status(500).json({
      status: 500,
      success: false,
      message: "Server error"
    })
  }
}

export const getCar = async (req, res) => {
  const {id} = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({
      status: 404,
      success: false,
      message: "Invalid ID"
    })
  }

  try {
    const car = await Car.findById(id);
    res.status(200).json({
      status: 200,
      success: true,
      message: "Car found",
      data: car
    })
  } catch (error) {
    res.status(500).json({
      status: 500,
      success: false,
      message: "Server error"
    })
  }
}

export const addCar = async (req, res) => {
  const car = req.body;

  if (!car.name || !car.brand || !car.top_speed || !car.acceleration || !car.handling || !car.nitro || !car.image) {
    return res.status(400).json({
      status: 400,
      success: false,
      message: "All fields must be filled!"
    });
  }

  const newCar = new Car(car);

  try {
    await newCar.save();
    res.status(201).json({ 
      status: 201,
      success: true,
      message: "Request successful",
      data: newCar
    });
  } catch (error) {
    console.log(`Failed to add new car: ${error.message}`);
    res.status(500).json({ 
      status: 500,
      success: false,
      message: "Server error"
    });
  }
}

export const updateCar = async (req, res) => {
  const {id} = req.params;
  const car = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({
      status: 404,
      success: false,
      message: "Invalid ID"
    })
  }

  try {
    const updatedCar = await Car.findByIdAndUpdate(id, car, { new: true });
    res.status(200).json({
      status: 200,
      success: true,
      message: "Car updated successfully",
      data: updatedCar
    })
  } catch (error) {
    res.status(500).json({
      status: 500,
      success: false,
      message: "Server error"
    })
  }
}

export const deleteCar = async (req, res) => {
  const {id} = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({
      status: 404,
      success: false,
      message: "Invalid ID"
    })
  }

  try {
    await Car.findByIdAndDelete(id);
    res.status(200).json({
      status: 200,
      success: true,
      message: "Car deleted successfully"
    });
  } catch (error) {
    res.status(500).json({
      status: 500,
      success: false,
      message: "Server error"
    });
  }
}