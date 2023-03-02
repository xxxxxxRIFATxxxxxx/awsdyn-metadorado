import React from "react";
import ReactPlayer from "react-player";

const CertificateSection = () => {
    return (
        <div className="certificate-section">
            <div className="custom-container">
                <h2 className="heading-2 font-EvilEmpire text-center text-white pb-8">
                    CERTIFICATE
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-16">
                    <ReactPlayer
                        className="player-wrapper w-full certificate-video cursor-pointer"
                        url="https://spectacular-cucurucho-f4568c.netlify.app/images/certificate-blue.webm"
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
                    />

                    <ReactPlayer
                        className="player-wrapper w-full certificate-video cursor-pointer"
                        url="https://spectacular-cucurucho-f4568c.netlify.app/images/certificate-brown.webm"
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
                    />

                    <ReactPlayer
                        className="player-wrapper w-full certificate-video cursor-pointer"
                        url="https://spectacular-cucurucho-f4568c.netlify.app/images/certificate-red.webm"
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
                    />

                    <ReactPlayer
                        className="player-wrapper w-full certificate-video cursor-pointer"
                        url="https://spectacular-cucurucho-f4568c.netlify.app/images/certificate-gold.webm"
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
                    />

                    <ReactPlayer
                        className="player-wrapper w-full certificate-video cursor-pointer"
                        url="https://spectacular-cucurucho-f4568c.netlify.app/images/certificate-titanium.webm"
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
                    />
                </div>
            </div>
        </div>
    );
};

export default CertificateSection;
