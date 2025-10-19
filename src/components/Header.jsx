import 'boxicons/css/boxicons.min.css';

const Header = () => {
  // Fonction simple pour basculer le menu mobile
  const toggleMobileMenu = () => {
    const mobileMenu = document.getElementById('mobileMenu');
    mobileMenu.classList.toggle('hidden');
  };

  return (
    <header className="flex justify-between items-center py-4 px-4 lg:px-20">
      <h1
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
        className="text-3xl md:text-4xl lg:text-5xl m-0 font-semibold"
      >
        R&C
      </h1>

      {/* Navigation Desktop */}
      <nav className="hidden md:flex items-center gap-12">
        {['Reve', 'Objectif', 'Souhait', 'Envie'].map((item, index) => (
          <a
            key={item}
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration={`${1000 + index * 500}`}
            className="text-base tracking-wider transition-colors hover:text-grey-300 z-50"
            href="#"
          >
            {item}
          </a>
        ))}
      </nav>

      <button className="hidden md:block py-3 px-8 rounded-full border-none font-medium cursor-pointer z-50 tracking-wider transition-all duration-300 bg-gray-300 text-black hover:bg-[#1a1a1a] hover:text-white">
        Nous
      </button>

      {/* Bouton Mobile - Visible uniquement sur Mobile */}
      <button onClick={toggleMobileMenu} className="md:hidden text-3xl p-2 z-50">
        <i className='bx bx-menu'></i>
      </button>

      {/* Menu Mobile - Caché par défaut */}
      <div id='mobileMenu' className='hidden fixed top-16 bottom-0 right-0 left-0 p-5 md:hidden z-40 bg-black bg-opacity-70 backdrop-blur-md'>
        <nav className='flex flex-col gap-6 items-center'>
          {['Reve', 'Objectif', 'Souhait', 'Envie'].map((item) => (
            <a
              key={item}
              className="text-base tracking-wider transition-colors hover:text-grey-300 z-50"
              href="#"
            >
              {item}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;