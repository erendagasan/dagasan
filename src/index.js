import React from "react";
import ReactDOM from "react-dom";

import "./index.css";

import TradingViewWidget, { Themes } from "react-tradingview-widget";

let widgetW = window.innerWidth + "px";
let widgetH = window.innerHeight + "px";

const App = () => (

  <TradingViewWidget
    symbol="NASDAQ:AAPL"
    theme={Themes.LIGHT}
    hide_side_toolbar={false}
    width={widgetW}
    height={widgetH}
    locale="tr"
    show_popup_button={true}
    details={true}
    hotlist={true}
    calendar={true}
  />
);

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
