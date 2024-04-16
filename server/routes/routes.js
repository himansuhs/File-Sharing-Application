import express from "express";
import { imageUpload, downloadImage } from "../controller/image-controller.js";
import upload from "../utils/upload.js";
let route = express.Router();
route.post("/upload", upload.single("file"), imageUpload);
route.get("/file/:fileId", downloadImage);
export default route;
