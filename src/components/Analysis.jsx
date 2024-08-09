import PropTypes from "prop-types";
import { PieChart, Pie, Cell, ResponsiveContainer, Label } from "recharts";

const Analysis = ({ analysis }) => {
  const COLORS = ["#FF0000", "#0000FF"]; // Red for malicious, Green for harmless

  if (!analysis || !analysis.attributes) {
    return <p>No analysis data available</p>;
  }

  // Data for the PieChart
  const data = [
    { name: "Malicious", value: analysis.attributes["total_votes"].malicious },
    { name: "Harmless", value: analysis.attributes["total_votes"].harmless },
  ];

  // Calculate the percentage of harmless votes
  const totalVotes =
    analysis.attributes["total_votes"].malicious +
    analysis.attributes["total_votes"].harmless;
  const harmlessPercentage = (
    (analysis.attributes["total_votes"].harmless / totalVotes) *
    100
  ).toFixed(0);

  return (
    <div>
      <div style={{ width: "100%", height: 200 }}>
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              fill="#8884d8"
              paddingAngle={5}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
              <Label
                value={`${harmlessPercentage}%`}
                position="center"
                fill="#0000FF" // Color for the harmless label
                fontSize={24}
                fontWeight="bold"
              />
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Display additional analysis information */}
      <p>Title: {analysis.attributes.title}</p>
      <p>Reputation: {analysis.attributes.reputation}</p>
      <p>URL: {analysis.attributes.url}</p>
      <p>Times Submitted: {analysis.attributes["times_submitted"]}</p>
      <p>Type: {analysis.attributes.type}</p>
      <p>Harmless: {analysis.attributes["total_votes"].harmless}</p>
      <p>Malicious: {analysis.attributes["total_votes"].malicious}</p>
    </div>
  );
};

export default Analysis;

Analysis.propTypes = {
  analysis: PropTypes.object,
};
