export default function Hero() {
  return (
    <div
      className="bg-cover bg-center h-[600px] "
      style={{ backgroundImage: "url('./Ariana.jpeg')" }}
    >
      <div className="bg-black bg-opacity-50 h-full flex flex-col justify-center items-center text-center text-white">
        <h1 className="text-4xl font-bold mb-4">Now Playing: Wicked</h1>
        <p className="text-lg ">
          Elphaba, a misunderstood young woman because of her green skin, and
          Glinda, a popular girl, become friends at Shiz University in the Land
          of Oz. After an encounter with the Wonderful Wizard of Oz, their
          friendship reaches a crossroads.{" "}
        </p>
        <button className="mt-4 px-6 py-2 bg-indigo-700 rounded hover:bg-purple-800">
          Watch Trailer
        </button>
      </div>
    </div>
  );
}
