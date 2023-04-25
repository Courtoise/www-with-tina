export function authorFields() {
    return [
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
      {
        type: "string",
        name: "email",
        label: "Email",
      },
      {
        type: "object",
        name: "social",
        label: "Reseaux Social",
        list: true,
        ui: {
          // This allows the customization of the list item UI
          // Data can be accessed by item?.<Name of field>
          itemProps: (item) => {
            return { label: `${item?.link} `}
          },
        },
        fields: [
          {
            type: "string",
            name: "icon",
            label: "Icon",
          },
          {
            type: "string",
            name: "link",
            label: "Lien",
          },
        ],
      },
    ];
  }