import Link from "next/link";
import { useState } from "react";

const Header = () => {
    const [showNav, setShowNav] = useState(false);
    const [active, setActive] = useState("HOME");

    const handleActive = (name: string) => {
        setActive(name);
    };

    const handleShowNav = () => {
        setShowNav((prevState) => {
            return !prevState;
        });
    };

    return (
        <>
            {/* For Web */}
            <div className="header-section py-3 px-10 hidden lg:block">
                <div className="flex items-center justify-between">
                    <div>
                        <Link href="/">
                            <h3 className="heading-3 font-EvilEmpire text-white">
                                METADORADO
                            </h3>
                        </Link>
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="mr-8">
                            <Link
                                href="/"
                                className={`text-2xl font-EvilEmpire text-center text-white ${
                                    active === "HOME" &&
                                    "underline underline-offset-4 decoration-4"
                                }`}
                                onClick={() => handleActive("HOME")}
                            >
                                HOME
                            </Link>
                        </div>

                        <div className="mr-8">
                            <Link
                                href="/#welcome-section"
                                className={`text-2xl font-EvilEmpire text-center text-white ${
                                    active === "ABOUT" &&
                                    "underline underline-offset-4 decoration-4"
                                }`}
                                onClick={() => handleActive("ABOUT")}
                            >
                                ABOUT
                            </Link>
                        </div>

                        <div className="mr-8">
                            <Link
                                href="/#why-choose-us-section"
                                className={`text-2xl font-EvilEmpire text-center text-white ${
                                    active === "FEATURES" &&
                                    "underline underline-offset-4 decoration-4"
                                }`}
                                onClick={() => handleActive("FEATURES")}
                            >
                                FEATURES
                            </Link>
                        </div>

                        <div className="mr-8">
                            <Link
                                href="/#road-map-section"
                                className={`text-2xl font-EvilEmpire text-center text-white ${
                                    active === "ROADMAP" &&
                                    "underline underline-offset-4 decoration-4"
                                }`}
                                onClick={() => handleActive("ROADMAP")}
                            >
                                ROADMAP
                            </Link>
                        </div>

                        <div className="mr-8">
                            <Link
                                href="/buy"
                                className={`text-2xl font-EvilEmpire text-center text-white ${
                                    active === "STAKE" &&
                                    "underline underline-offset-4 decoration-4"
                                }`}
                                onClick={() => handleActive("STAKE")}
                            >
                                STAKE
                            </Link>
                        </div>

                        <div className="mr-8">
                            <Link
                                href="/#play-and-earn-section"
                                className={`text-2xl font-EvilEmpire text-center text-white ${
                                    active === "PLAY" &&
                                    "underline underline-offset-4 decoration-4"
                                }`}
                                onClick={() => handleActive("PLAY")}
                            >
                                PLAY
                            </Link>
                        </div>

                        <div>
                            <Link
                                href="/#wallet-section"
                                className={`text-2xl font-EvilEmpire text-center text-yellow-300 ${
                                    active === "Wallet Connect" && ""
                                }`}
                                onClick={() => handleActive("Wallet Connect")}
                            >
                                Wallet Connect
                            </Link>
                        </div>
                    </div>

                    <div>
                        <Link href={"/buy"}>
                            <img
                                className="w-full"
                                src="/images/buy-btn.svg"
                                alt="image"
                            />
                        </Link>
                    </div>
                </div>
            </div>

            {/* For Tab And Mobile */}
            <div className="block lg:hidden">
                <nav className="bg-white py-2.5 w-full border-b border-gray-200">
                    <div className="flex flex-wrap items-center justify-between mx-auto">
                        <Link href="/">
                            <h3 className="text-4xl font-EvilEmpire green-text">
                                METADORADO
                            </h3>
                        </Link>

                        <div className="flex lg:order-2">
                            <button
                                data-collapse-toggle="navbar-sticky"
                                type="button"
                                className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                                aria-controls="navbar-sticky"
                                aria-expanded="false"
                                onClick={handleShowNav}
                            >
                                <span className="sr-only">Open main menu</span>
                                <svg
                                    className="w-6 h-6"
                                    aria-hidden="true"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                        clip-rule="evenodd"
                                    ></path>
                                </svg>
                            </button>
                        </div>
                        <div
                            className={`items-center justify-between w-full lg:flex lg:w-auto lg:order-1 ${
                                showNav ? "flex" : "hidden"
                            }`}
                            id="navbar-sticky"
                        >
                            <ul className="flex flex-col w-full p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 lg:flex-row lg:space-x-8 lg:mt-0 lg:text-sm lg:font-medium lg:border-0 lg:bg-white">
                                <li>
                                    <Link
                                        href="/"
                                        className={`block py-2 pl-3 pr-4 text-white rounded ${
                                            active === "HOME" && "bg-[#27e124]"
                                        }`}
                                    >
                                        Home
                                    </Link>
                                </li>

                                <li>
                                    <Link
                                        href="/#welcome-section"
                                        className={`block py-2 pl-3 pr-4 text-gray-700 rounded ${
                                            active === "ABOUT" && "bg-[#27e124]"
                                        }`}
                                    >
                                        About
                                    </Link>
                                </li>

                                <li>
                                    <Link
                                        href="/#why-choose-us-section"
                                        className={`block py-2 pl-3 pr-4 text-gray-700 rounded ${
                                            active === "FEATURES" &&
                                            "bg-[#27e124]"
                                        }`}
                                    >
                                        Features
                                    </Link>
                                </li>

                                <li>
                                    <Link
                                        href="/#road-map-section"
                                        className={`block py-2 pl-3 pr-4 text-gray-700 rounded ${
                                            active === "ROADMAP" &&
                                            "bg-[#27e124]"
                                        }`}
                                    >
                                        Roadmap
                                    </Link>
                                </li>

                                <li>
                                    <Link
                                        href="/buy"
                                        className={`block py-2 pl-3 pr-4 text-gray-700 rounded ${
                                            active === "STAKE" && "bg-[#27e124]"
                                        }`}
                                    >
                                        Stake
                                    </Link>
                                </li>

                                <li>
                                    <Link
                                        href="/#play-and-earn-section"
                                        className={`block py-2 pl-3 pr-4 text-gray-700 rounded ${
                                            active === "PLAY" && "bg-[#27e124]"
                                        }`}
                                    >
                                        Play
                                    </Link>
                                </li>

                                <li>
                                    <Link
                                        href="/#wallet-section"
                                        className={`block py-2 pl-3 pr-4 text-yellow-300 rounded ${
                                            active === "Wallet Connect" &&
                                            "bg-[#27e124]"
                                        }`}
                                    >
                                        Wallet Connect
                                    </Link>
                                </li>

                                <li>
                                    <Link
                                        href="/buy"
                                        className={`block py-2 pl-3 pr-4 text-gray-700 rounded ${
                                            active === "BUY" && "bg-[#27e124]"
                                        }`}
                                    >
                                        Buy
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    );
};

export default Header;
