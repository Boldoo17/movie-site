export default function Hero() {
  const backgroundImageUrl = "./Ariana.jpeg";
  const rating = 6.9;

  return (
    <div
      className="relative h-screen bg-cover bg-center"
      style={{ backgroundImage: `url('${backgroundImageUrl}')` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center px-6 lg:px-16">
        <div className="text-white max-w-lg">
          <h1 className="text-2xl sm:text-2xl font-bold mb-4 leading-tight">
            Now Playing:
          </h1>
          <span className="text-green-400 text-4xl sm:text-5xl font-bold mb-4 leading-tight">
            Wicked
          </span>

          <p className="text-base sm:text-lg lg:text-1xl mb-6 leading-relaxed">
            Elphaba, a misunderstood young woman because of her green skin, and
            Glinda, a popular girl, become friends at Shiz University in the
            Land of Oz. After an encounter with the Wonderful Wizard of Oz,
            their friendship reaches a crossroads.
          </p>

          <div className="flex items-center mb-6 text-lg">
            <span className="flex items-center text-yellow-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.434 4.402a1 1 0 00.95.69h4.642c.969 0 1.371 1.24.588 1.81l-3.757 2.73a1 1 0 00-.364 1.118l1.434 4.402c.3.921-.755 1.688-1.54 1.118l-3.757-2.73a1 1 0 00-1.175 0l-3.757 2.73c-.784.57-1.839-.197-1.54-1.118l1.434-4.402a1 1 0 00-.364-1.118L2.027 9.83c-.783-.57-.381-1.81.588-1.81h4.642a1 1 0 00.95-.69l1.434-4.402z" />
              </svg>
              <span className="ml-2">{rating}</span>
            </span>
            <span className="ml-4 text-sm text-gray-300"></span>
          </div>

          <button className="px-8 py-3 bg-indigo-700 rounded-lg hover:bg-green-800 transition-all duration-300 shadow-lg">
            Watch Trailer
          </button>
        </div>
      </div>
    </div>
  );
}
