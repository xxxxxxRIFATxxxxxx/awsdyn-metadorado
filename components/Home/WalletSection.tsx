import Link from "next/link";

const WalletSection = () => {
    return (
        <div className="wallet-section" id="wallet-section">
            <div className="custom-container">
                <h2 className="heading-2 font-EvilEmpire text-center text-white pb-8">
                    ALL WALLET <span className="green-text">OPTIONS</span>
                </h2>

                <p className="text text-gray-300 text-justify md:text-center pb-12 w-full lg:w-[50%] mx-auto">
                    A token wallet is a digital wallet that can be used to
                    store, send, and receive various types of tokens, such as
                    cryptocurrencies and other digital assets.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-16">
                    <Link href="/buy">
                        <div>
                            <img
                                className="w-1/3 mx-auto pb-1"
                                src="/images/shiba-icon.svg"
                                alt="image"
                            />

                            <img
                                className="w-3/4 mx-auto pb-6"
                                src="/images/fire.svg"
                                alt="image"
                            />

                            <div>
                                <h3 className="heading-3 text-center text-white font-EvilEmpire pb-2">
                                    Meta mask
                                </h3>

                                <p className="text text-center pb-5">
                                    Complete for the TOP <br /> places holder
                                </p>

                                <img
                                    className="w-3/5 mx-auto"
                                    src="/images/buy-btn.svg"
                                    alt="image"
                                />
                            </div>
                        </div>
                    </Link>

                    <Link href="/buy">
                        <div>
                            <img
                                className="w-1/3 mx-auto pb-1"
                                src="/images/binance-icon.svg"
                                alt="image"
                            />

                            <img
                                className="w-3/4 mx-auto pb-6"
                                src="/images/fire.svg"
                                alt="image"
                            />

                            <div>
                                <h3 className="heading-3 text-center text-white font-EvilEmpire pb-2">
                                    BINANCE
                                </h3>

                                <p className="text text-center pb-5">
                                    Complete for the TOP <br /> places holder
                                </p>

                                <img
                                    className="w-3/5 mx-auto"
                                    src="/images/buy-btn.svg"
                                    alt="image"
                                />
                            </div>
                        </div>
                    </Link>

                    <Link href="/buy">
                        <div>
                            <img
                                className="w-1/3 mx-auto pb-1 rounded-full"
                                src="/images/formatic-logo.png"
                                alt="image"
                            />

                            <img
                                className="w-3/4 mx-auto pb-6"
                                src="/images/fire.svg"
                                alt="image"
                            />

                            <div>
                                <h3 className="heading-3 text-center text-white font-EvilEmpire pb-2">
                                    FORMATIC
                                </h3>

                                <p className="text text-center pb-5">
                                    Complete for the TOP <br /> places holder
                                </p>

                                <img
                                    className="w-3/5 mx-auto"
                                    src="/images/buy-btn.svg"
                                    alt="image"
                                />
                            </div>
                        </div>
                    </Link>

                    <Link href="/buy">
                        <div>
                            <img
                                className="w-1/3 mx-auto pb-1 rounded-full"
                                src="/images/autherum-logo.png"
                                alt="image"
                            />

                            <img
                                className="w-3/4 mx-auto pb-6"
                                src="/images/fire.svg"
                                alt="image"
                            />

                            <div>
                                <h3 className="heading-3 text-center text-white font-EvilEmpire pb-2">
                                    AUTHERUM
                                </h3>

                                <p className="text text-center pb-5">
                                    Complete for the TOP <br /> places holder
                                </p>

                                <img
                                    className="w-3/5 mx-auto"
                                    src="/images/buy-btn.svg"
                                    alt="image"
                                />
                            </div>
                        </div>
                    </Link>

                    <Link href="/buy">
                        <div>
                            <img
                                className="w-1/3 mx-auto pb-1 rounded-full"
                                src="/images/coinbase-logo.svg"
                                alt="image"
                            />

                            <img
                                className="w-3/4 mx-auto pb-6"
                                src="/images/fire.svg"
                                alt="image"
                            />

                            <div>
                                <h3 className="heading-3 text-center text-white font-EvilEmpire pb-2">
                                    COINBASE
                                </h3>

                                <p className="text text-center pb-5">
                                    Complete for the TOP <br /> places holder
                                </p>

                                <img
                                    className="w-3/5 mx-auto"
                                    src="/images/buy-btn.svg"
                                    alt="image"
                                />
                            </div>
                        </div>
                    </Link>

                    <Link href="/buy">
                        <div>
                            <img
                                className="w-1/3 mx-auto pb-1 rounded-full"
                                src="/images/portis logo.png"
                                alt="image"
                            />

                            <img
                                className="w-3/4 mx-auto pb-6"
                                src="/images/fire.svg"
                                alt="image"
                            />

                            <div>
                                <h3 className="heading-3 text-center text-white font-EvilEmpire pb-2">
                                    PORTIS
                                </h3>

                                <p className="text text-center pb-5">
                                    Complete for the TOP <br /> places holder
                                </p>

                                <img
                                    className="w-3/5 mx-auto"
                                    src="/images/buy-btn.svg"
                                    alt="image"
                                />
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default WalletSection;
