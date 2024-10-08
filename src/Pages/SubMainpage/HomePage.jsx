import { useState } from "react";
import Analysis from "../../components/Analysis";
import MainAnalysis from "../../components/MainAnalysis";

const HomePage = () => {
  const [dataAvailability, setDataAvailability] = useState(false);
  const [analysis, setAnalysis] = useState({}); // Initial state is an empty object
  const [timeSearched, setTimeSearched] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    // to get the input of the user and covert to url
    const formData = new FormData(event.target);
    const url = formData.get("url");
    const encodedUrl = btoa(url).replace(/=/g, "");
    const apiKey = import.meta.env.VITE_API_KEY;
 
    console.log("API Key:", apiKey);
    if (!apiKey) {
      console.error("API key is missing");
      alert("API key is not set. Please check your environment variables.");
      return;
    }

    try {
      const response = await fetch(
        `https://www.virustotal.com/api/v3/urls/${encodedUrl}`,
        {
          method: "GET",
          
          headers: {
            accept: "application/json",
            "x-apikey": apiKey,
          },
        }
      );

      if (!response.ok) {
        throw new Error(`Error: ${response.status} - ${response.statusText}`);
      }

      const data = await response.json();
      if (data) {
        setDataAvailability(true);
        setAnalysis(data.data); // data.data' contains the needed information
        setTimeSearched(new Date().toISOString());
      }
      console.log(data);
      event.target.reset();
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="text-black mx-20 text-xl">
      <div className="grid grid-cols-2 gap-8 pt-10 mb-10">
        <div className="p-2">
          <h2 className="text-3xl font-bold mb-5">VirusScope</h2>
          <form onSubmit={handleSubmit} className="flex flex-col space-y-3">
            <label>Submit a URL to VirusScope to check for malware</label>

            <input
              type="text"
              name="url"
              className="bg-gray-300 px-4 py-3 rounded-md"
              placeholder="https://example.com"
            />
            <div>
              <button
                type="submit"
                className="bg-blue-400 rounded-md h-full px-6 py-2 text-white"
              >
                Scan
              </button>
            </div>
          </form>
          <p className="opacity-50">
            Note: URLs will be accessible and maybe shared with our Partner
          </p>
        </div>
        <div className="p-2">
          {dataAvailability ? (
            <Analysis analysis={analysis} />
          ) : (
            <h2 className="font-semibold text-3xl">No data yet</h2>
          )}
        </div>
      </div>
      {dataAvailability ? (
        <MainAnalysis time={timeSearched} analysis={analysis} />
      ) : (
        ""
      )}
    </div>
  );
};

export default HomePage;
