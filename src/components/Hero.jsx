import "boxicons/css/boxicons.min.css";
import Spline from "@splinetool/react-spline";

const Hero = () => {
  return (
    <main className="flex flex-col lg:flex-row items-center justify-between min-h-[calc(90vh-6rem)]">
      <div
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
        className="max-w-xl ml-[5%] z-10 mt-10 lg:mt-0"
      >
        {/* Tag box with gradient border */}
        <div className="relative w-[95%] sm:w-48 h-10 bg-gradient-to-r from-[#656565] to-[#e99b63] shadow-[0_0_15px_rgba(255,255,255,0.4)] rounded-full">
          <div className="absolute inset-[3px] bg-black rounded-full flex items-center justify-center gap-1">
            <i className='bx bx-heart'></i> Déclaration
          </div>
        </div>

        {/* Main Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-wider my-8">
          LA PLUS BELLE 
          <br />
          DES FEMMES
        </h1>

        {/* Description */}
        <p className="text-base sm:text-lg lg:text-2xl text-gray-600 tracking-wider max-w-[25rem] lg:max-w-[30rem]">
         Chloé,

Au cas où tu ne l'aurais pas compris, c'est toi, oui, toi qui occupes toutes mes pensées. Je suis, malgré moi, tombé amoureux de toi. Je sais que tu as souffert, et j'aurais aimé être là pour toi avant que ce mec ne te fasse tant de mal.

Je comprends que je ne pourrai jamais vraiment partager mon cœur, et je sais que je ne serai peut-être jamais à la hauteur. Tu mérites tellement mieux, et même si tu ne l'as pas dit, je le ressens. Je ne suis pas si parfait, si beau, ni si riche. Mais je suis amoureux de la plus magnifique des femmes, celle avec qui je rêve de construire ma vie, d'avoir des enfants, et de passer mes soirées à parler et à te montrer à quel point je t'aime.

Ce n'est pas simplement une lettre d'amour, c'est mon cœur que je mets à nu pour toi. Mon seul désir est de faire ton bonheur, car tu le mérites amplement. Je comprends que je dois accepter que nous ne soyons que des collègues, comme tu l'as dit tout à l'heure. Mais je veux que tu saches que je serai toujours là pour toi si tu en as besoin.

Je pense qu'il est temps pour moi d'arrêter d'espérer être avec toi, comme tu me l'as dit. Cependant, je ne veux pas te perdre pour autant, donc j'accepterai tout ce que tu décideras pour nous.

Ce site que j'ai créé, c'est pour toi, de A à Z. Je l'ai mis en ligne juste pour te montrer à quel point je suis fier de dire à tous que je t'aime, même si ce n'est pas réciproque. Le site est conçu dans tes couleurs préférées, en orange, car je sais que c'est ta couleur. Si tu le souhaites, tu pourras même le personnaliser à ta guise.

Je sais que l'hébergement me coûte cher, mais pour toi, je décrocherais la lune, Chloé. Je t'aime profondément.

        </p>

        {/* Buttons */}
        <div className="flex gap-4 mt-12">
          <a
            className="border border-[#2a2a2a] py-2 sm:py-3 px-4 sm:px-5 rounded-full sm:text-lg text-sm font-semibold tracking-wider transition-all duration-300 hover:bg-[#1a1a1a]"
            href="#"
          >
            Documentation <i className='bx bx-happy-heart-eyes'></i> 
          </a>
          <a
            className="border border-[#2a2a2a] py-2 sm:py-3 px-8 sm:px-10 rounded-full sm:text-lg text-sm font-semibold tracking-wider transition-all duration-300 hover:bg-[#1a1a1a] bg-gray-300 text-black hover:text-white"
            href="#"
          >
            Commencer <i className='bx bx-heart-circle'></i>  
          </a>
        </div>
      </div>

      {/* 3D Robot */}
      <div className="relative w-full lg:w-1/2 h-1/2 lg:h-full flex justify-center items-center">
        <Spline
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="300"
          data-aos-offset="0"
          data-aos-duration="3000"
          className="h-full w-full"
          scene="https://prod.spline.design/VhZEvtwW6YS0-p6K/scene.splinecode"
        />
      </div>
    </main>
  );
};

export default Hero;