export function projetsFields() {
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
        name: "projets",
        label: "Section projets",
        fields: [
          {
            type: "boolean",
            name: "enable",
            label: "Activer",
          },
          {
            type: "object",
            name: "projet_item",
            label: "Les Projets",
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
                type: "string",
                name: "name",
                label: "Nom",
              },
              {
                type: "datetime",
                name: "date",
                label: "Date",
              },
              {
                type: "string",
                name: "content",
                label: "Description",
                ui: {
                  component: "textarea",
                },
              },
            ],
          },
        ],
      },
    ];
  }