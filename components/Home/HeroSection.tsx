import Link from "next/link";
import Header from "../Layout/Header";

const HeroSection = () => {
    return (
        <div className="hero-section" id="hero-section">
            {/* For Web */}
            <div className="hidden lg:block">
                <div className="relative">
                    <div className="absolute w-[90%] z-10 right-0 left-0 top-5 m-auto">
                        <Header />
                    </div>

                    <div className="video-box lg:rounded-0">
                        <video width="100%" autoPlay loop muted>
                            <source
                                src="/images/hero-section-video.mp4"
                                type="video/mp4"
                            />
                            Your browser does not support the video tag.
                        </video>
                    </div>

                    <div className="title-box">
                        <h1 className="heading-1 font-EvilEmpire text-white text-green-shadow text-center mb-3">
                            <p className="mb-3">REFORMING</p>
                            <p>THE GAMING INDUSTRY</p>
                        </h1>

                        <div className="flex items-center justify-center">
                            <Link href={"/#play-and-earn-section"}>
                                <img
                                    className="w-full"
                                    src="/images/play-btn.svg"
                                    alt="image"
                                />
                            </Link>

                            <div className="p-2"></div>

                            <Link href={"/buy"}>
                                <img
                                    className="w-full"
                                    src="/images/stake-now-btn.svg"
                                    alt="image"
                                />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* For Tab And Mobile */}
            <div className="block lg:hidden">
                <div className="bg-white">
                    <div className="custom-container-x">
                        <Header />
                    </div>
                </div>

                <div className="custom-container">
                    <div className="flex items-center justify-center">
                        <div>
                            <h1 className="heading-1 font-EvilEmpire text-white text-green-shadow text-center mb-3">
                                REFORMING <br /> THE GAMING INDUSTRY
                            </h1>

                            <div className="flex items-center justify-center">
                                <Link href={"/#play-and-earn-section"}>
                                    <img
                                        className="w-full"
                                        src="/images/play-btn.svg"
                                        alt="image"
                                    />
                                </Link>

                                <div className="p-2"></div>

                                <Link href={"/buy"}>
                                    <img
                                        className="w-full"
                                        src="/images/stake-now-btn.svg"
                                        alt="image"
                                    />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
