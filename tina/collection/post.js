export function post_indexFields() {
    return [
      {
        type: "string",
        name: "title",
        label: "Titre",
      },
      {
        type: "string",
        name: "description",
        label: "Description",
      },
      {
        type: "image",
        name: "bg_image",
        label: "Image de Background",
      },
      {
        type: "boolean",
        name: "bg_norepeat",
        label: "Image de background répétées",
      },
      {
        type: "string",
        name: "bg_color",
        label: "Couleur de Background",
        ui: {
          component: "color",
        },
      },
    ];
  }
  