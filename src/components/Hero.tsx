import HeroImage from "../assets/home.jpg";
const Hero = () => {
    return (
        <div className="bg-black text-white text-center py-16">
            <img
                src={HeroImage}
                alt=""
                className="mx-auto mb-8 w-48 h-48 rounded-full object-cover transform transition-transform duration-300 hover:scale-105"
            />
            <h1 className="text-4xl font-bold">
                I'm {""}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                    TaiTocDo
                </span>
                , Front-End Developer
            </h1>
            <p className="mt-4 text-lg text-gray-400 px-4 md:px-32">
                {" "}
                I specialize in building modern and responsive website applications your
                requirements
            </p>
            <div className="mt-8 space-x-4">
                <button
                    className="bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline transform transition-transform 
              duration-300 hover:scale-105 px-4 py-2 rounded-full"
                >
                    Contact With Me
                </button>
                <button
                    className="bg-gradient-to-r from-yellow-400 to-purple-500 text-white hidden md:inline transform transition-transform 
              duration-300 hover:scale-105 px-4 py-2 rounded-full  "
                >
                    Resume
                </button>
            </div>
        </div>
    );
};

export default Hero;
