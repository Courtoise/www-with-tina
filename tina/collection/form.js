export function formFields() {
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
      {
        type: "object",
        name: "about",
        label: "Section a propos",
        fields: [
          {
            type: "boolean",
            name: "enable",
            label: "Activer",
          },
          {
            type: "string",
            name: "title",
            label: "Titre",
          },
          {
            type: "rich-text",
            name: "content",
            label: "Contenu",

          },
          {
            type: "boolean",
            name: "image_enable",
            label: "Activer Image",
          },
          {
            type: "image",
            name: "image",
            label: "Image",
          },
          {
            type: "string",
            name: "label",
            label: "Texte du Bouton",
          },
          {
            type: "string",
            name: "link",
            label: "Lien Du Bouton",
          },
        ],
      },
    ];
  }