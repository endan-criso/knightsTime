import Giscus from "@giscus/react";

const GiscusComments = () => {
  return (
    <Giscus
      repo="yourusername/yourrepo"
      repoId="REPO_ID"
      category="Blog Comments"
      categoryId="CATEGORY_ID"
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