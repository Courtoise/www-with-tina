export function contactFields() {
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
        label: "Couleur de background",
        ui: {
          component: "color",
        },
      },
      {
        type: "object",
        name: "adresse",
        label: "Section Adresse",
        fields: [
          {
            type: "object",
            name: "list",
            label: "Liste d'adresse",
            list: true,
            ui: {
              // This allows the customization of the list item UI
              // Data can be accessed by item?.<Name of field>
              itemProps: (item) => {
                return { label: `${item?.titre} `}
              },
            },
            fields: [
              {
                type: "string",
                name: "titre",
                label: "Titre",
              },
              {
                type: "string",
                name: "location",
                label: "Adresse",
              },
              {
                type: "string",
                name: "email",
                label: "Email",
              },
              {
                type: "string",
                name: "telephone",
                label: "Telephone",
              },
            ],
          },
        ],
      },
      {
        type: "object",
        name: "horaire",
        label: "Section Horaire",
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
            name: "horaire_list",
            label: "List d'Horaire",
            list: true,
            ui: {
              // This allows the customization of the list item UI
              // Data can be accessed by item?.<Name of field>
              itemProps: (item) => {
                return { label: `${item?.title} `}
              },
            },
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
                name: "info_list",
                label: "List Informative",
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
                    type: "string",
                    name: "content",
                    label: "Horraire",
                  },
                ],
              },
            ],
          },
        ],
      },
    ];
  }