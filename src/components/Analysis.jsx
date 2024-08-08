import PropTypes from 'prop-types';

const Analysis = ({ analysis }) => {
    if (!analysis || !analysis.attributes) {
      return <p>No analysis data available</p>;
    }
  
    return (
      <div>
        <p>Tittle: {analysis.attributes.title}</p>
        <p>Reputation: {analysis.attributes.reputation}</p>
        <p>url: {analysis.attributes.url}</p>
        <p>Times Submitted: {analysis.attributes["times_submitted"]}</p>
        {/* <p>{analysis.attributes["times_submitted"]}</p> */}
        <p>{analysis.attributes.type}</p>
        <p>harmless: {analysis.attributes["total_votes"].harmless}</p>
        <p>malicous: {analysis.attributes["total_votes"].malicious}</p>
        {/* Display other data as needed */}
      </div>
    );
  };
  
  export default Analysis;

  Analysis.propTypes = {
    analysis: PropTypes.object,
  }
  