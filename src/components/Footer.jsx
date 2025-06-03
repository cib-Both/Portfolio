import { FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 py-8">
      <div className="container mx-auto px-4 flex flex-col items-center">
        <div className="flex space-x-4 mb-4">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-500 dark:hover:text-gray-200 transition-colors"
          >
            <FaGithub className="w-5 h-5" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-500 dark:hover:text-gray-200 transition-colors"
          >
            <FaLinkedin className="w-5 h-5" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-500 dark:hover:text-gray-200 transition-colors"
          >
            <FaFacebook className="w-5 h-5" />
          </a>
        </div>
        <p className="text-sm text-center">
          © {new Date().getFullYear()} Chem Indraboth. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
