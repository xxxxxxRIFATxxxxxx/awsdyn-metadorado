import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html>
            <Head>
                {/* Favicon */}
                <link rel="icon" href="/images/logo.svg" />

                {/* Font Awesome */}
                <script
                    src="https://kit.fontawesome.com/96239c21a7.js"
                    crossOrigin="anonymous"
                ></script>
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
