import Giscus from "@giscus/react";

const GiscusComments = () => {
  return (
    <Giscus
      repo="endan-criso/knightsTime"
      repoId="R_kgDOJjLhQ"
      category="Blog Comments"
      categoryId="DIC_kwDOJjLhQs4CVu-"
      mapping="pathname"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="top"
      theme="preferred_color_scheme"
      lang="en"
      loading="lazy"
    />
  );
};

export default GiscusComments;