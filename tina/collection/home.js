export function accueilFields() {
    return [
      {
        type: "object",
        name: "banner",
        label: "Section Baniere",
        fields: [
          {
            type: "boolean",
            name: "enable",
            label: "Activer Section Baniere",
          },
          {
            type: "image",
            name: "bg_image",
            label: "Image de Background",
          },
          {
            type: "boolean",
            name: "bg_overlay",
            label: "Activer Overlay de Background",
          },
          {
            type: "boolean",
            name: "quote",
            label: "Activer Affichage citation",
          },
          {
            type: "image",
            name: "logo_quote",
            label: "Logo pour la citation",
            description: "Afficher si <Activer Affichage citation> est activé",
          },
          {
            type: "string",
            name: "quote_1",
            label: "Citation Ligne 1",
            description: "Afficher si <Activer Affichage citation> est activé",

          },
          {
            type: "string",
            name: "quote_2",
            label: "Citation ligne 2",
            description: "Afficher si <Activer Affichage citation> est activé",

          },
          {
            type: "string",
            name: "quote_3",
            label: "Citation ligne 3",
            description: "Afficher si <Activer Affichage citation> est activé",

          },
          {
            type: "string",
            name: "title",
            label: "Titre",
            description: "Afficher si <Activer Affichage citation> est desactivé",

          },
          {
            type: "string",
            name: "content",
            label: "Content",
            description: "Afficher si <Activer Affichage citation> est desactivé",
            ui: {
              component: "textarea",
            },
          },
          {
            type: "object",
            name: "button",
            label: "button",
            fields: [
              {
                type: "boolean",
                name: "enable",
                label: "enable",
              },
              {
                type: "string",
                name: "label",
                label: "label",
              },
              {
                type: "string",
                name: "link",
                label: "link",
              },
            ],
          },
        ],
      },
      {
        type: "object",
        name: "about",
        label: "A Propos",
        fields: [
          {
            type: "boolean",
            name: "enable",
            label: "Activer Section A propos",
          },
          {
            type: "boolean",
            name: "background_image",
            label: "Affichage image de background",
          },
          {
            type: "image",
            name: "bg_image",
            label: "image de background",
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
            type: "rich-text",
            name: "content",
            label: "Contenu",

          },
          {
            type: "boolean",
            name: "image_enable",
            label: "Affichage image",
            ui: {
              validate: (value, data) => {
                const valueImage = value
                //  We have access to value of description by using data?.<Name of field>
                const valueVideo = data?.about?.video_enable
                if (valueImage && valueVideo) {
                  return 'Tu ne peux activer que l\'Image ou que la Vidéo '
                }
              },
            }
          },
          {
            type: "image",
            name: "image",
            label: "Image",
          },
          {
            type: "boolean",
            name: "video_enable",
            label: "Affichage Video",
          },
          {
            type: "string",
            name: "video",
            label: "id de Video",
          },
        ],
      },
      {
        type: "object",
        name: "sponsor",
        label: "Sponsor",
        fields: [
          {
            type: "boolean",
            name: "enable",
            label: "Activer Section Sponsor",
          },
          {
            type: "boolean",
            name: "background_image",
            label: "Affichage image de background",
          },
          {
            type: "image",
            name: "bg_image",
            label: "Image de background",
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
            type: "image",
            name: "image",
            label: "Image",
          },
        ],
      },
      {
        type: "object",
        name: "event",
        label: "Evenement",
        fields: [
          {
            type: "boolean",
            name: "enable",
            label: "Activer Section Evenement",
          },
          {
            type: "string",
            name: "titre",
            label: "Titre",
          },
          {
            type: "object",
            name: "evenements",
            label: "Evenements",
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
                type: "datetime",
                name: "date",
                label: "Date",
              },
              {
                type: "string",
                name: "nom",
                label: "Nom",
              },
              {
                type: "string",
                name: "titre",
                label: "Titre",
              },
              {
                type: "string",
                name: "texte",
                label: "Description",
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
  };