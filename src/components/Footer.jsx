const Footer = () => {
  return (
    <footer className="bg-gray-100 w-full fixed bottom-0 shadow-sm">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center h-14 space-x-4 text-gray-700 text-sm">
          <span>
            Made by <strong>Karthick</strong>
          </span>

          <a
            href="https://github.com/karthickprabakaran"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black underline"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/karthick-prabakaran/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black underline"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
