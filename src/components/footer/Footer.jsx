import '@fortawesome/fontawesome-free/css/all.min.css';


const Footer = () => {
  return (
    <footer className=" text-white py-4">
      <div className="container mx-auto flex justify-center space-x-6">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-facebook-square text-2xl hover:text-blue-500"></i>
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram text-2xl hover:text-pink-500"></i>
        </a>
        <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-whatsapp text-2xl hover:text-green-500"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
