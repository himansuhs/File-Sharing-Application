import File from "../models/file.js";

export const imageUpload = async (req, res) => {
  const fileObj = {
    path: req.file.path,
    name: req.file.originalname,
  };
  try {
    const file = await File.create(fileObj);

    res.status(200).json({ path: `http://localhost:5500/file/${file._id}` });
  } catch (error) {
    console.error(error.message);
  }
};
export const downloadImage = async (request, response) => {
  try {
    const file = await File.findById(request.params.fileId);

    file.downloadCount++;

    await file.save();

    response.download(file.path, file.name);
  } catch (error) {
    console.error(error.message);
    response.status(500).json({ msg: error.message });
  }
};
