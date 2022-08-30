module.exports = {
  pagination: {
    data: "collections.projects",
    size: 1,
    alias: "project",
    before(data, cfg) {
      return cfg.collections.projects.all;
    }
  },
  permalink: "p/{{ project.data.title | slugify }}/"
};
