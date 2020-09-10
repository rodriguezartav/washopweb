import Head from "next/head";
import { useRouter } from "next/router";

import { Media, Angle, Form, Screenshot, Split, Center } from "./hero";

import {
  SideSide,
  Col3,
  Split as SectionSplit,
  TwoTwo,
  Center22,
} from "./sections";

import { Quote, Large, Center as TestimonialCenter } from "./testimonials";

import {
  Brand,
  Card as CardTestimonial,
  Split as SplitTestimonial,
  SplitInverse,
} from "./stats";

import Content from "./content/Content";

import react from "react";

const map = {
  Pagehero: {
    Media: Media,
    Angle: Angle,
    Form: Form,
    Screenshot: Screenshot,
    Split: Split,
    Center: Center,
  },
  Pagesection: {
    SideSide: SideSide,
    TwoTwo: TwoTwo,
    Col3: Col3,
    Split: SectionSplit,
    Center22: Center22,
  },
  Pagetestimonial: {
    Quote: Quote,
    Large: Large,
    Center: TestimonialCenter,
    SideSide: SideSide,
  },
  Pagestat: {
    Brand,
    Split: SplitTestimonial,
    Card: CardTestimonial,
    SplitInverse,
  },
  Pagecontent: {
    Normal: Content,
  },
};

export default function Wrapper({ item, parent, ...rest }) {
  const Component = map[item.__typename][item.type];

  const [visibleModules, setVisibleModules] = React.useState({});

  let modules = {};

  const onShowModule = (moduleName) => {
    setVisibleModules({ ...visibleModules, [moduleName]: true });
  };

  const onHideModule = (moduleName) => {
    setVisibleModules({ ...visibleModules, [moduleName]: false });
  };

  if (!Component) return null;

  return (
    <react.Fragment>
      {Object.keys(modules).map((key) => {
        const Module = modules[key];

        if (visibleModules[key])
          return (
            <Module.component
              {...Module.props}
              onClose={() => {
                onHideModule(key);
              }}
            />
          );
        return null;
      })}
      <Component
        parent={parent}
        onShowModule={onShowModule}
        modules={modules}
        {...item}
        {...item.props}
        {...rest}
        bullets={item.bulletsCollection ? item.bulletsCollection.items : null}
        image={item.image ? item.image.url : null}
        video={item.video ? item.video.url : null}
      />
    </react.Fragment>
  );
}
