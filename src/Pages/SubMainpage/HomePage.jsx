

const HomePage = () => {

  const handleSubmit = async(event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    
    try {
      const response = await fetch(`https://www.virustotal.com/api/v3/urls/${url}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
      const data = await response.json()
      console.log(data)
    } catch (error){
      console.error("Error:", error);
    }
    
  }
  return (
    <div className="text-black mx-20 text-xl">
      <div className="grid grid-cols-2 gap-8 pt-10">
        <div className="p-2">
          <h2 className="text-3xl font-bold mb-5">VirusScope</h2>
          <form type="submit" className="flex flex-col space-y-3">
            <label>Submit a URL to VirusScope to check for malware</label>
            
            <input
              type="text"
              className="bg-gray-300 px-4 py-3 rounded-md"
              placeholder="https://example.com"
            />
            <button onSubmit={handleSubmit} className="bg-blue-400 rounded-md h-full px-6 py-2 text-white">Submit</button>
          </form>
        </div>
        <div className="p-2">
          <h2 className="font-semibold text-3xl">No data yet</h2>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
