const sidebars = {
  tutorialSidebar: [
    "experience",
    "education",
    {
      type: "category",
      label: "Projects",
      link: {
        type: "doc",
        id: "projects/projects",
      },
      items: [
        "projects/intranet",
        "projects/futevento",
        "projects/shopping",
        "projects/entrance-exit",
        "projects/famsecurity",
        "projects/todo",
      ],
    },
  ],
};

export default sidebars;
