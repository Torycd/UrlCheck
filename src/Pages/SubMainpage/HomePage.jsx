// import React from 'react'

const HomePage = () => {
  return (
    <div className="text-black mx-20 text-xl">
      <div className="grid grid-cols-2 pt-10">
        <div>
          <h2 className="text-3xl font-bold mb-5">VirusScope</h2>
          <form type="submit" className="flex flex-col space-y-3">
            <label>Submit a URL to VirusScope to check for malware</label>
            <input
              type="text"
              className="bg-gray-300 px-4 py-3 rounded-md"
              placeholder="https://example.com"
            />
          </form>
        </div>
        <div>
          <h2 className="font-semibold text-3xl">No data yet</h2>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
