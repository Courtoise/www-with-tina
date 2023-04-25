export function aboutFields() {
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
        label: "Image de background",
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
        name: "association",
        label: "Section association",
        fields: [
          {
            type: "boolean",
            name: "enable",
            label: "Activer",
          },
          {
            type: "image",
            name: "image",
            label: "image",
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
        ],
      },
      {
        type: "object",
        name: "atelier",
        label: "Section atelier",
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
            type: "image",
            name: "image",
            label: "Image",
          },
        ],
      },
      {
        type: "object",
        name: "chiffre",
        label: "Section Chiffre",
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
            type: "object",
            name: "funfacts",
            label: "funfacts",
            list: true,
            ui: {
              // This allows the customization of the list item UI
              // Data can be accessed by item?.<Name of field>
              itemProps: (item) => {
                return { label: `${item?.name} `}
              },
            },
            fields: [
              {
                type: "image",
                name: "icon",
                label: "Icon ",
              },
              {
                type: "string",
                name: "count",
                label: "Chiffre",
              },
              {
                type: "string",
                name: "name",
                label: "Nom",
              },
              {
                type: "string",
                name: "content",
                label: "Contenu",
              },
            ],
          },
        ],
      },
    ];
  }