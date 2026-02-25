import Giscus from "@giscus/react";
import type React from "react";


interface GiscusCommentsProps {
  dark: boolean;
}

const GiscusComments: React.FC<GiscusCommentsProps> = ({ dark }) => {
  return (
    <Giscus
      key={dark ? "dark" : "light"}
      repo="endan-criso/knightsTime"
      repoId="R_kgDOJjLhQ"
      category="Blog Comments"
      categoryId="DIC_kwDOJjLhQs4CVu-"
      mapping="pathname"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="top"
      theme={dark ? "transparent_dark" : "light"}
      lang="en"
      loading="lazy"
    />
  );
};

export default GiscusComments;