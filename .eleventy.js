module.exports = function (eleventyConfig) {
  eleventyConfig.addCollection("projects", function (collectionAPI) {
    const PROJECTS = collectionAPI.getFilteredByGlob("./src/projects/*.md");
    return {
      all: PROJECTS,
      tags: getTagList(PROJECTS),
    };
  });

  eleventyConfig.addFilter("filterTagList", filterTagList);
  eleventyConfig.addFilter("inspect", require("node:util").inspect);

  return {
    dir: {
      input: "src",
      output: "www",
    }
  };
};

function getTagList(collection) {
  const tagSet = new Set();
  collection.forEach((item) => {
    item.data.tags?.forEach((tag) => tagSet.add(tag));
  });
  return filterTagList([...tagSet]);
}

function filterTagList(tags = []) {
  return tags.filter((tag) => !["utility-tag", "unwanted-tag"].includes(tag));
}
