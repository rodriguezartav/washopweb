import React from "react";
import { useSlideState } from "data/SlideProvider";

import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

import { BLOCKS, MARKS } from "@contentful/rich-text-types";

const Bold = ({ children }) => <span className="bold">{children}</span>;

const Text = ({ children }) => <p className="  mb-5">{children}</p>;

const Heading = ({ children }) => (
  <div class="relative max-w-7xl mx-auto">
    <div class="text-center">
      <h2 class="text-3xl leading-9 tracking-tight font-extrabold text-gray-900 sm:text-4xl sm:leading-10">
        {children}
      </h2>
    </div>
  </div>
);

const options = {
  renderMark: {
    [MARKS.BOLD]: (text) => <Bold>{text}</Bold>,
  },
  renderNode: {
    [BLOCKS.HEADING_4]: (node, children) => <Heading>{children}</Heading>,

    [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
    [BLOCKS.QUOTE]: (node, children) => <blockquote>{children}</blockquote>,
  },
};

export default function Content(props) {
  const { isPresentation, isMobile } = useSlideState();

  if (!props.content) return null;
  if (isPresentation) return null;
  return (
    <div className="relative pt-12 mb-28 bg-white overflow-hidden">
      <div className="relative px-4 sm:px-6 lg:px-8">
        <div className="prose prose-lg  mx-auto">
          {documentToReactComponents(props.content.json, options)}
        </div>
      </div>
    </div>
  );
}
