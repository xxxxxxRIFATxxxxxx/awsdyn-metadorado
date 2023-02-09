import Link from "next/link";
import { useState } from "react";

const CarRaceSection = () => {
    const [activeCard, setActiveCard] = useState("EARN");

    const handleActiveCard = (name: string) => {
        setActiveCard(name);
    };

    return (
        <div className="car-race-section" id="car-race-section">
            <div className="custom-container">
                <h2 className="heading-2 font-EvilEmpire text-center text-white pb-8">
                    DISCOVER THE THRILL OF RACING <br /> IN THE{" "}
                    <span className="green-text">METAVERSE</span>
                </h2>

                <p className="text text-gray-300 text-justify md:text-center pb-12 w-full lg:w-[40%] mx-auto">
                    <span className="font-bold green-text">COLLECT</span> &{" "}
                    <span className="font-bold green-text">TRADE</span> stunning
                    CARS and accelerate your way to the{" "}
                    <br className="hidden lg:block" />
                    finish line to{" "}
                    <span className="font-bold green-text">
                        WIN BIG REWARDS
                    </span>{" "}
                    daily
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-16">
                    <Link href="/#collect">
                        <div
                            className={`card car-race-card-1 p-4 md:p-6 h-full lg:h-[80%] ${
                                activeCard === "COLLECT" && "active-card"
                            }`}
                            onClick={() => handleActiveCard("COLLECT")}
                        >
                            <img
                                className="w-full pb-5"
                                src="/images/car-race-img-1.svg"
                                alt="image"
                            />

                            <div>
                                <h3 className="heading-3 font-EvilEmpire text-center text-white pb-2">
                                    COLLECT
                                </h3>

                                <p className="text text-center text-gray-300">
                                    OWN your DIGITAL DREAM CAR
                                </p>
                            </div>
                        </div>
                    </Link>

                    <Link href="/#race">
                        <div
                            className={`card car-race-card-2 p-4 md:p-6 h-full lg:h-[80%] lg:mt-32 ${
                                activeCard === "RACE" && "active-card"
                            }`}
                            onClick={() => handleActiveCard("RACE")}
                        >
                            <img
                                className="w-full pb-5"
                                src="/images/car-race-img-2.svg"
                                alt="image"
                            />

                            <div>
                                <h3 className="heading-3 font-EvilEmpire text-center text-white pb-2">
                                    RACE
                                </h3>

                                <p className="text text-center text-gray-300">
                                    Complete for the TOP places in ACTION-Packed
                                    races
                                </p>
                            </div>
                        </div>
                    </Link>

                    <Link href="/#earn">
                        <div
                            className={`card car-race-card-3 p-4 md:p-6 h-full lg:h-[80%] ${
                                activeCard === "EARN" && "active-card"
                            }`}
                            onClick={() => handleActiveCard("EARN")}
                        >
                            <img
                                className="w-full pb-5"
                                src="/images/car-race-img-3.svg"
                                alt="image"
                            />

                            <div>
                                <h3 className="heading-3 font-EvilEmpire text-center text-white pb-2">
                                    EARN
                                </h3>

                                <p className="text text-center text-gray-300">
                                    Race Your Way To Victory & WINNTING REWARDS!
                                </p>
                            </div>
                        </div>
                    </Link>

                    <Link href="/#upgrade">
                        <div
                            className={`card car-race-card-4 p-4 md:p-6 h-full lg:h-[80%] lg:mt-32 ${
                                activeCard === "UPGRADE" && "active-card"
                            }`}
                            onClick={() => handleActiveCard("UPGRADE")}
                        >
                            <img
                                className="w-full pb-5"
                                src="/images/car-race-img-4.svg"
                                alt="image"
                            />

                            <div>
                                <h3 className="heading-3 font-EvilEmpire text-center text-white pb-2">
                                    UPGRADE
                                </h3>

                                <p className="text text-center text-gray-300">
                                    Level Up Your Car to BOOST ITS PERFORMANCE &
                                    VISUALS!
                                </p>
                            </div>
                        </div>
                    </Link>

                    <Link href="/#trade">
                        <div
                            className={`card car-race-card-5 p-4 md:p-6 h-full lg:h-[80%] ${
                                activeCard === "TRADE" && "active-card"
                            }`}
                            onClick={() => handleActiveCard("TRADE")}
                        >
                            <img
                                className="w-full pb-5"
                                src="/images/car-race-img-5.svg"
                                alt="image"
                            />

                            <div>
                                <h3 className="heading-3 font-EvilEmpire text-center text-white pb-2">
                                    TRADE
                                </h3>

                                <p className="text text-center text-gray-300">
                                    Exlpore Exciting Options To TRADE YOUR
                                    CARNFTS!
                                </p>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CarRaceSection;
