import React from "react";
import Image from "next/image";

import Styles from "./Composition.module.scss";

type Props = {
  images: [] | { src: string; alt: string }[];
};

export default class Composition extends React.Component<Props, {}> {
  componentDidMount() {
    fetch("/api/content/hero-comp-imgs")
      .then((res) => res.json())
      .then((data) => this.setState({ images: data }))
      .catch((e) => console.log(e));
  }

  render() {
    const { images } = this.props;
    return (
      <div className={Styles.composition}>
        {images.map((img, ind) => (
          <div
            key={ind}
            className={`${Styles.composition__photo} ${
              Styles["composition__photo-" + (ind + 1)]
            }`}
          >
            <Image
              src={img.src}
              alt={img.alt}
              height="300"
              width="300"
              layout="responsive"
            />
          </div>
        ))}
      </div>
    );
  }
}
