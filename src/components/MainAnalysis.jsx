// import React from 'react'
import PropTypes from "prop-types";
import { FaLink, FaClock } from "react-icons/fa";

const MainAnalysis = ({ analysis, time }) => {
  if (!analysis || !analysis.attributes) {
    return <p>No analysis data available</p>;
  }

  const test =
    analysis.attributes["last_analysis_stats"].harmless >
    analysis.attributes["last_analysis_stats"].malicious;
  const selectedEngines = [
    "Blueliv",
    "Kaspersky",
    "PhishingDataBase",
    "MalwareURL",
    "Acronis",
  ];

  const filteredResults = Object.entries(
    analysis.attributes["last_analysis_results"]
  )
    .filter(([key]) => selectedEngines.includes(key))
    .map(([key, det]) => (
      <div key={key} className="border-b border-gray-200 py-2">
        <p>
          <strong>Engine Name:</strong> {det.engine_name}
        </p>
        <p>
          <strong>Category:</strong> {det.category}
        </p>
        <p>
          <strong>Method:</strong> {det.method}
        </p>
        <p>
          <strong>Result:</strong> {det.result}
        </p>
      </div>
    ));
  return (
    <div>
      <div className="grid grid-cols-2">
        <div>
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-wide">
              URL ANALYSIS REPORT
            </h2>
            <p className="opacity-70">
              The Report is for Reference, please make your own judgement
            </p>
          </div>
          <div className="space-y-5 border-4 p-2 rounded-lg">
            <div className="flex gap-10 ">
              <div className="bg-gray-200 rounded-md w-12 flex justify-center items-center">
                <span>
                  <FaLink />
                </span>
              </div>
              <div>
                <h2 className="font-bold">URL</h2>
                <p className="opacity-70">
                  <a href={analysis.attributes.url} target="_blank">
                    {analysis.attributes.url}
                  </a>
                </p>
              </div>
            </div>
            <div className="flex gap-10">
              <div className="bg-gray-200 rounded-md w-12 flex justify-center items-center">
                <span>
                  <FaClock />
                </span>
              </div>
              <div>
                <h2 className="font-bold">TIME</h2>
                <p className="opacity-70">{time}</p>
              </div>
            </div>
          </div>
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-wide">SAFETY STATUS</h2>
            <p className="opacity-70">
              {test ? "URL is safe" : "URL is not safe"}{" "}
            </p>
          </div>
        </div>
        <div></div>
      </div>
      <br />
      <div>
        {filteredResults.length > 0 ? (
          filteredResults
        ) : (
          <p>No selected engine results available.</p>
        )}
      </div>
    </div>
  );
};

export default MainAnalysis;

MainAnalysis.propTypes = {
  analysis: PropTypes.object,
  time: PropTypes.string,
};
