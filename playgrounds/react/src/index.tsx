import React from "react";
import ReactDom from "react-dom";
import RedSky from "./images/image.jpg";
import { Color, Text, Image, Margin, Select } from "@ds.e/react";
import "@ds.e/scss/lib/Utilities.css";
import "@ds.e/scss/lib/Margin.css";
import "@ds.e/scss/lib/Select.css";

const options = [
  {
    label: "Strict Black",
    value: "strict-black",
  },
  { label: "Heavenly Green", value: "heavenly-green" },
  { label: "Sweet Pink", value: "pink" },
];

const App = () => {
  return (
    <div style={{ padding: "20px" }}>
      <Color hexcode="#000" />
      <br />
      <Image src={RedSky} />
      <Margin>
        <Text size="sm">Hello world</Text>
      </Margin>
      <Select options={options} />
    </div>
  );
};

ReactDom.render(<App />, document.getElementById("root"));
