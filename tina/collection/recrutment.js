export function recrutementFields() {
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
        label: "Image",
      },
      {
        type: "object",
        name: "recruit",
        label: "Recrutement",
        fields: [
          {
            type: "boolean",
            name: "enable",
            label: "Activer",
          },
          {
            type: "object",
            name: "modal",
            label: "Annonce",
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
                type: "string",
                name: "title",
                label: "Titre",
              },
              {
                type: "string",
                name: "button",
                label: "Titre Boutton",
              },
              {
                type: "string",
                name: "class",
                label: "class",
              },
              {
                type: "rich-text",
                name: "text",
                label: "Description",

              },
            ],
          },
        ],
      },
    ];
  }