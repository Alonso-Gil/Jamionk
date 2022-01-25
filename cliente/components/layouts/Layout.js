import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import Head from 'next/head';
import { Global, css } from '@emotion/react';
import { createTheme, ThemeProvider } from "@mui/material/styles";

const Layout = ({children}) => {

    // Editar estilos globales de Material UI
    const theme = createTheme({
        palette: {
          primary: {
            main: '#0d0d0d'
          },
          secondary: {
            main: '#872024'
          }
        }
      });

    return ( 
        <ThemeProvider theme={theme}>
            <>
                {/* Editar los estilos globales del CSS */}
                <Global 
                    styles={css`
                        a {
                            text-decoration: none;
                            color: #FFF;
                        }
                    `}
                />

                <NavBar />

                <Head>
                    <title>Jamoink</title>
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" integrity="sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w==" crossorigin="anonymous" referrerpolicy="no-referrer" />
                </Head>

                <main>
                    {children}
                </main>

                <Footer />

            </>
        </ThemeProvider>
     );
}
 
export default Layout;