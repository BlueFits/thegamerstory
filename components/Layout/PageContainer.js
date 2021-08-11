import Head from 'next/head';

const PageContainer = ({ children }) => {
    return (
        <>
            <Head>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,700;1,100&display=swap" rel="stylesheet" />
            </Head>
            <main>{children}</main>
        </>
    );
};

export default PageContainer;