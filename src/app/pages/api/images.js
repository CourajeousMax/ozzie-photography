import cloudinary from "../../config/cloudinary";

export default async function handler(req, res) {
  try {
    const { resources } = await cloudinary.search
      .expression("folder:samples") // Adjust this to your folder or other search criteria
      .sort_by("public_id", "desc")
      .max_results(10)
      .execute();

    const images = resources.map((resource) => ({
      url: resource.secure_url,
      alt: resource.public_id,
    }));

    res.status(200).json({ images });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch images" });
  }
}
