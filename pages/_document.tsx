import { createGetInitialProps } from "@mantine/next";
import Document, {
  Head, Html, Main, NextScript,
} from "next/document";

const getInitialProps = createGetInitialProps();

export default class _Document extends Document {
  static getInitialProps = getInitialProps;

  render() {
    return (
      <Html lang="cs">
        <Head />
        <body style={{ overflowX: "hidden" }}>
          <GoogleTagsNoScript />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

function GoogleTagsNoScript() {
  return (
    <noscript>
      <iframe
        src="https://www.googletagmanager.com/ns.html?id=GTM-NXPWLNM"
        height="0"
        width="0"
        style={{ display: "none", visibility: "hidden" }}
      />
    </noscript>
  );
}
