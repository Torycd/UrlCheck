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
    <div className="bg-gray-100 p-5 rounded-lg border-4">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold">{analysis.attributes.title}</h2>
        <div className="grid grid-cols-2 gap-3">
          <div className="border-4" style={{ width: "100%", height: 200 }}>
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
          <div className="border-4">
            <div className="h-full flex flex-col items-center justify-center space-y-3">
              <h2 className="font-bold text-4xl">Votes</h2>
              <div className="grid grid-cols-2 italic font-bold text-center gap-5">
                <p>harmless</p>
                <p>Malicious</p>
              </div>
              <div className="grid grid-cols-2 text-4xl text-center gap-5">
                <p className="text-[#0000FF] font-bold">
                  {analysis.attributes["total_votes"].harmless}
                </p>
                <p className="text-[#FF0000] font-bold">
                  {analysis.attributes["total_votes"].malicious}
                </p>
              </div>
            </div>
            {/* <p>
              <strong>Type:</strong> {analysis.attributes.type}
            </p> */}
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
