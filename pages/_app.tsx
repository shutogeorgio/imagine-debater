import * as React from "react";
import NextApp from "next/app";
import '../public/lib/css/style.css'

interface Props {
  pageProps: any;
}

class App extends NextApp<Props> {
  render() {
    const { pageProps, Component } = this.props;
    return (
      <Component {...pageProps} />
    );
  }
}
export default App;
