// api/proxy.js
import { Buffer } from "buffer";
import axios from "axios";

export default async function handler(req, res) {
  const { url } = req.query;

  try {
    const encodedUrl = Buffer.from(url).toString("base64").replace(/=/g, "");
    const response = await axios.get(
      `https://www.virustotal.com/api/v3/urls/${encodedUrl}`,
      {
        header: {
          "x-apikey": import.meta.env.VITE_API_KEY,
        },
      }
    );
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Error fetching data" });
  }
}

// import { useState } from "react";
// import Analysis from "../../components/Analysis";
// import MainAnalysis from "../../components/MainAnalysis";
// import axios from "axios";

// const HomePage = () => {
//   const [dataAvailability, setDataAvailability] = useState(false);
//   const [analysis, setAnalysis] = useState({}); // Initial state is an empty object
//   const [timeSearched, setTimeSearched] = useState("");
//   const [error, setError] = useState(null); // Add error state

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     const formData = new FormData(event.target);
//     const url = formData.get("url");

//     try {
//       // Call your serverless function
//       const response = await axios.get(`/api/proxy`, {
//         params: { url }
//       });

//       setDataAvailability(true);
//       setAnalysis(response.data.data); // 'data.data' contains the needed information
//       setTimeSearched(new Date().toISOString());
//       event.target.reset();
//     } catch (error) {
//       console.error("Error:", error);
//       setError("Failed to fetch data, please try again.");
//     }
//   };