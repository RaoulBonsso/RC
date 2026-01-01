import 'boxicons/css/boxicons.min.css';

const Header = () => {
  // Simple function to toggle the mobile menu

  const toggleMobileMenu = () =>{
    const mobileMenu = document.getElementById('mobileMenu');

    if(mobileMenu.classList.contains('hidden')){
      mobileMenu.classList.remove('hidden');
    }else{
      mobileMenu.classList.add('hidden')
    }
  }
  return (
    <header className="flex justify-between item-center py-4 px-4 lg:px-20">
      <h1 data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500" className="test-3xl md:text-4xl lg:text-5xl m-0 font-semibold">Emma 💖 </h1>

      {/*Desktop Navigation*/}

      <nav className="hidden md:flex item-center gap-12">
        <a
        data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1000"
          className="text-base tacking-wider transition-colors hover:text-grey-300 z-50 "
          href="#"
        >
           Reve
        </a>
        <a
        data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500"
          className="text-base tacking-wider transition-colors hover:text-grey-300 z-50 "
          href="#"
        >
           Objectif
        </a>
        <a
        data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="2000"
          className="text-base tacking-wider transition-colors hover:text-grey-300 z-50 "
          href="#"
        >
          Souhait
        </a>
        <a
        data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="2500"
          className="text-base tacking-wider transition-colors hover:text-grey-300 z-50 "
          href="#"
        >
          Envie
        </a>
      </nav>
      <button className="hidden md:block  py-3 px-8 rounded-full border-none font-medium  hover/bg-white cursor-pointer z-50 tracking-wider transition-all duration-300 hover:bg-[#1a1a1a] bg-gray-300 text-black hover:text-white">
        SIGN IN
      </button>
      {/* mobile Button -Visible only on Mobile */}
      <button on onClick={toggleMobileMenu} className='md:hidden text-3xl p-2 z-50'>
        <i class='bx  bx-menu'  ></i> 
      </button>
      {/* Mobile Menu - Hidden by default */}

      <div id='mobileMenu' className=' hidden fixed top-16 bottom-0 right-0 left-0 p-5 md:hidden z-40 bg-black bg-opacity-70 backdrop-blur- md'>
        <nav className='flex flex-col gap-6 items-center'>
          <a
          className="text-base tacking-wider transition-colors hover:text-grey-300 z-50 "
          href="#"
        >
          Reve
        </a>
        <a
          className="text-base tacking-wider transition-colors hover:text-grey-300 z-50 "
          href="#"
        >
          Objectif
        </a>
        <a
          className="text-base tacking-wider transition-colors hover:text-grey-300 z-50 "
          href="#"
        >
          Souhait
        </a>
        <a
          className="text-base tacking-wider transition-colors hover:text-grey-300 z-50 "
          href="#"
        >
          Envie
        </a>
        </nav>

      </div>
    </header>
  );
};

export default Header;
