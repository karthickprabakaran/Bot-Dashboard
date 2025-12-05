const Footer = () => {
  return (
    <header className="bg-grey shadow-sm position absolute bottom-1px">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center  ">
            <span className="text-orange-600 font-bold text-lg">
              Delhivery <br /> Dashboard
            </span>
          </div>

          <nav className="flex space-x-6">
            <div className="relative">
              <button className="text-gray-700 hover:text-gray-900 focus:outline-none">
                Dashboard
              </button>
            </div>

            <div className="relative">
              <button className="text-gray-700 hover:text-gray-900 focus:outline-none">
                Tasks
              </button>
            </div>
            <div className="relative hover:bg-primary">
              <button className="text-gray-700 hover:text-gray-900 focus:outline-none">
                Task Queue
              </button>
            </div>
          </nav>

          <div className="flex items-center space-x-2">
            <img
              src="https://via.placeholder.com/32"
              alt="User Avatar"
              className="w-8 h-8 rounded-full"
            />
            <span className="text-gray-700">Karthick </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Footer;
