import React from 'react';
import NavBar from './NavBar';
import Head from 'next/head';
import { Global, css } from '@emotion/react';
import { createTheme, ThemeProvider } from "@mui/material/styles";

const Layout = ({children}) => {

    // Editar estilos globales de Material UI
    const theme = createTheme({
        palette: {
          primary: {
            main: '#184c7c'
          },
          secondary: {
            main: '#ac8b18'
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
                            color: #000;
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
            </>
        </ThemeProvider>
     );
}
 
export default Layout;