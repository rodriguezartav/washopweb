import ImageSplit from "./ImageSplit";
import InvertedSplit from "./InvertedSplit";
import Imageless from "./Imageless";
import Textless from "./Textless";
import Titleless from "./Titleless";

import { Center22, Col3, SideSide, Split, TwoTwo } from "components/sections";

import React from "react";

export default function ImageSplitContainer(props) {
  if (!props.slide.title) return <SideSide {...props.slide} />;
  else if (!props.slide.text) return <Col3 {...props.slide} />;
  if (!props.slide.image || !props.slide.image.url)
    return <Center22 {...props.slide} />;
  else if (Math.random() >= 0.5) return <Split {...props.slide} />;
  else return <Split {...props.slide} />;
}
