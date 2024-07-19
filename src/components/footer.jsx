const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-teal-500 text-white py-12 mt-24">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
        
        {/* Let's talk about section */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Let's talk about</h3>
          <p className="mb-6">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
          </p>
          <div className="flex space-x-6">
            <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://www.facebook.com/yourprofile" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>

        {/* Links section */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="#skills" className="hover:text-teal-400">Skills</a>
            </li>
            <li>
              <a href="#experience" className="hover:text-teal-400">Experience</a>
            </li>
            <li>
              <a href="#projects" className="hover:text-teal-400">Projects</a>
            </li>
            <li>
              <a href="#volunteering" className="hover:text-teal-400">Volunteering</a>
            </li>
            <li>
              <a href="#education" className="hover:text-teal-400">Education</a>
            </li>
            <li>
              <a href="#achievement" className="hover:text-teal-400">Achievement</a>
            </li>
          </ul>
        </div>

        {/* Services section */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Services</h3>
          <ul className="space-y-2">
            <li>
              <a href="#webdesign" className="hover:text-teal-400">Web Design</a>
            </li>
            <li>
              <a href="#webdevelopment" className="hover:text-teal-400">Web Development</a>
            </li>
            <li>
              <a href="#businessstrategy" className="hover:text-teal-400">Business Strategy</a>
            </li>
            <li>
              <a href="#dataanalysis" className="hover:text-teal-400">Data Analysis</a>
            </li>
            <li>
              <a href="#graphicdesign" className="hover:text-teal-400">Graphic Design</a>
            </li>
          </ul>
        </div>

        {/* Have a Question? section */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Have a Questions?</h3>
          <ul className="space-y-2">
            <li>
              <i className="fas fa-map-marker-alt"></i> 203 Fake St. Mountain View, San Francisco, California, USA
            </li>
            <li>
              <i className="fas fa-phone"></i> +2 392 3929 210
            </li>
            <li>
              <i className="fas fa-envelope"></i> info@yourdomain.com
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
