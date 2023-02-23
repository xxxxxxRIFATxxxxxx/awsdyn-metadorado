import Link from "next/link";
import { useState } from "react";
import ReactPlayer from "react-player";
import LoadingScreen from "../Common/LoadingScreen";
import Header from "../Layout/Header";

const HeroSection = () => {
    const [showLoader, setShowLoader] = useState(true);

    return (
        <div className="hero-section player-wrapper" id="hero-section">
            <div className={`${showLoader ? "block" : "hidden"}`}>
                <LoadingScreen />
            </div>

            {/* For Web */}
            <ReactPlayer
                className="hidden lg:block player-wrapper"
                url="https://spectacular-cucurucho-f4568c.netlify.app/images/hero-section-video.mp4"
                playing
                muted
                loop
                width="100%"
                height="100%"
                preload="none"
                config={{
                    file: {
                        attributes: {
                            poster: "https://moonlit-snickerdoodle-f90af8.netlify.app/images/hero-section-icon.png",
                        },
                    },
                }}
                onReady={() => setShowLoader(false)}
            />

            {/* For Tablet */}
            <ReactPlayer
                className="hidden md:block lg:hidden player-wrapper"
                url="https://spectacular-cucurucho-f4568c.netlify.app/images/hero-section-video-tablet.mp4"
                playing
                muted
                loop
                width="100%"
                height="100%"
                preload="none"
                config={{
                    file: {
                        attributes: {
                            poster: "https://moonlit-snickerdoodle-f90af8.netlify.app/images/hero-section-icon.png",
                        },
                    },
                }}
                onReady={() => setShowLoader(false)}
            />

            {/* For Mobile */}
            <ReactPlayer
                className="block md:hidden player-wrapper"
                url="https://spectacular-cucurucho-f4568c.netlify.app/images/hero-section-video-mobile.mp4"
                playing
                muted
                loop
                width="100%"
                height="100%"
                preload="none"
                config={{
                    file: {
                        attributes: {
                            poster: "https://moonlit-snickerdoodle-f90af8.netlify.app/images/hero-section-icon.png",
                        },
                    },
                }}
                onReady={() => setShowLoader(false)}
            />

            <div className="absolute top-0 w-full px-5 md:px-10 z-20">
                <Header />
            </div>

            <div className="absolute m-auto bottom-0 left-0 right-0 top-[10vh] md:top-[23vh] lg:top-[66vh]">
                <div>
                    <h1 className="text-2xl md:text-5xl lg:heading-1 font-EvilEmpire text-white text-green-shadow text-center mb-3">
                        <p className="mb-0 lg:mb-3">REFORMING</p>
                        <p>THE GAMING INDUSTRY</p>
                    </h1>

                    <div className="flex items-center justify-center">
                        <Link href={"/#play-and-earn-section"}>
                            <img
                                className="w-[80px] md:w-full"
                                src="https://moonlit-snickerdoodle-f90af8.netlify.app/images/play-btn.svg"
                                alt="image"
                            />
                        </Link>

                        <div className="p-2"></div>

                        <Link href={"/buy"}>
                            <img
                                className="w-[80px] md:w-full"
                                src="https://moonlit-snickerdoodle-f90af8.netlify.app/images/stake-now-btn.svg"
                                alt="image"
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
