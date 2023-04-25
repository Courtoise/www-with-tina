export function legalFields() {
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
        type: "string",
        name: "subtitle",
        label: "Sous Titre",
      },
      {
        type: "datetime",
        name: "lastmod",
        label: "Derniere Modification",
      },
      {
        type: "image",
        name: "bg_image",
        label: "Image de Background",
      },
      {
        type: "boolean",
        name: "bg_norepeat",
        label: "Image de Background répétées",
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