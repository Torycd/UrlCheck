// import React from 'react'
import PropTypes from "prop-types";
import { FaLink, FaClock } from "react-icons/fa";

const MainAnalysis = ({ analysis, time }) => {

  if (!analysis || !analysis.attributes) {
    return <p>No analysis data available</p>;
  }
  
  const test = analysis.attributes["last_analysis_stats"].harmless > analysis.attributes["last_analysis_stats"].malicious

  return (
    <div className="space-y-5">
      <div className="space-y-3">
        <h2 className="text-3xl font-bold tracking-wide">
          URL ANALYSIS REPORT
        </h2>
        <p className="opacity-70">The Report is for Reference, please make your own judgement</p>
      </div>
      <div className="space-y-5">
        <div className="flex gap-10 ">
          <div className="bg-gray-200 rounded-md w-12 flex justify-center items-center">
            <span>
              <FaLink />
            </span>
          </div>
          <div>
            <h2 className="font-bold">URL</h2>
            <p className="opacity-70">{analysis.attributes.url}</p>
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
        <h2 className="text-3xl font-bold tracking-wide">
          SAFETY STATUS
        </h2>
        <p className="opacity-70">{test ? "URL is safe": "URL is not safe"} </p>
      </div>
    </div>
  );
};

export default MainAnalysis;

MainAnalysis.propTypes = {
  analysis: PropTypes.object,
  time: PropTypes.string
};
