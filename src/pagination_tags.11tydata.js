module.exports = {
  pagination: {
    data: "collections.projects",
    size: 1,
    alias: "tag",
    before(data, cfg) {
      return cfg.collections.projects.tags;
    }
  },
  permalink: "p/tag/{{ tag | slugify }}/"
};
