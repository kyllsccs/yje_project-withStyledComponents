import { createGlobalStyle, ThemeProvider } from "styled-components";
import Layout from "../components/Layout";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0 0rem;
    padding: 0;
    box-sizing: border-box;
  }
`;

const theme = {
    colors: {
        primary: "#0070f3",
    },
};

export default function App({ Component, pageProps }) {
    return (
        <>
            <Layout>
                <GlobalStyle />
                <ThemeProvider theme={theme}>
                    <Component {...pageProps} />
                </ThemeProvider>
            </Layout>
        </>
    );
}
