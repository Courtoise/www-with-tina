export function featureFields() {
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
        ],
      },
      {
        type: "object",
        name: "loc",
        label: " Section Location",
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
            type: "string",
            name: "link_href",
            label: "Lien Href",
          },
          {
            type: "string",
            name: "link_download",
            label: "Lien de telechargement",
          },
          {
            type: "string",
            name: "link_text",
            label: "Lien Text",
          },
          {
            type: "boolean",
            name: "image_enable",
            label: "Activer caroussel ",
          },
          {
            type: "object",
            name: "slides",
            label: "Carousel",
            list: true,
            fields: [
              {
                type: "image",
                name: "slide",
                label: "Image",
              },
            ],
          },
        ],
      },
      {
        type: "object",
        name: "featured_service",
        label: "Section Service",
        fields: [
          {
            type: "boolean",
            name: "enable",
            label: "Activer",
          },
          {
            type: "object",
            name: "service_item",
            label: "service_item",
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
                type: "boolean",
                name: "picture",
                label: "Activer image",
              },
              {
                type: "string",
                name: "name",
                label: "Nom",
              },
              {
                type: "string",
                name: "icon",
                label: "Icon",
              },
              {
                type: "string",
                name: "color",
                label: "Couleur",
              },
              {
                type: "string",
                name: "content",
                label: "Contenu",
                ui: {
                  component: "textarea",
                },
              },
            ],
          },
        ],
      },
      {
        type: "object",
        name: "service",
        label: "Section Emmaus",
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
            type: "string",
            name: "description",
            label: "Description",
            ui: {
              component: "textarea",
            },
          },
          {
            type: "boolean",
            name: "image",
            label: "Activer image",
          },
          {
            type: "image",
            name: "imageurl",
            label: "Image",
          },
          {
            type: "string",
            name: "name",
            label: "Nom",
          },
          {
            type: "string",
            name: "lien",
            label: "Lien",
          },
        ],
      },
    ];
  }