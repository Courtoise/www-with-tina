export function mediaFields() {
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
            ui: {
                component: "textarea",
            },
        },

        {
            type: "image",
            name: "bg_image",
            label: "Image de Background",
        },
        {
            type: "object",
            name: "presse",
            label: "Presse",
            fields: [
                {
                    type: "boolean",
                    name: "enable",
                    label: "Activer",
                },
                {
                    type: "string",
                    name: "header",
                    label: "Titre",
                },
                {
                    type: "object",
                    name: "cards",
                    label: "Article de Presse",
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
                            type: "datetime",
                            name: "date",
                            label: "Date",
                          },
                          {
                            type: "string",
                            name: "title",
                            label: "Titre",
                          },
                          {
                            type: "string",
                            name: "class",
                            label: "Type",
                            options: [{
                                value: "interview",
                                label: "Interview"
                              }, {
                                value: "journal",
                                label: "Journal"
                              }]
                          },
                          {
                            type: "string",
                            name: "link",
                            label: "Lien de L'article",
                          },
                          {
                            type: "image",
                            name: "image",
                            label: "Image",
                          },
                    ],
                },
        ],
        },
    ];
}