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
    <div className="bg-gray-100 p-5 rounded-lg">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold">{analysis.attributes.title}</h2>
        <div className="grid grid-cols-2 gap-3">
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
                    fontSize={44}
                    fontWeight="bold"
                  />
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div>
            <p>
              <strong>Reputation:</strong> {analysis.attributes.reputation}
            </p>
            <p>
              <strong>URL:</strong>{" "}
              <a
                href={analysis.attributes.url}
                className="text-blue-600 underline"
              >
                {analysis.attributes.url}
              </a>
            </p>
            <p>
              <strong>Times Submitted:</strong>{" "}
              {analysis.attributes["times_submitted"]}
            </p>
            <p>
              <strong>Type:</strong> {analysis.attributes.type}
            </p>
            <p>
              <strong>Harmless:</strong>{" "}
              {analysis.attributes["total_votes"].harmless}
            </p>
            <p>
              <strong>Malicious:</strong>{" "}
              {analysis.attributes["total_votes"].malicious}
            </p>
          </div>
        </div>
      </div>

      {/* Display additional analysis information */}
    </div>
  );
};

export default Analysis;

Analysis.propTypes = {
  analysis: PropTypes.object,
};
