export function postFields() {
    return [
      {
        type: "boolean",
        name: "draft",
        label: "Draft",
      },
      {
        type: "string",
        name: "title",
        label: "Titre",
      },
      {
        type: "datetime",
        name: "date",
        label: "Date",
        ui: {
          component: 'date',
          dateFormat: 'DD-MM-YYYY',
          parse: (value) => value && value.format('DD-MM-YYYY'),
        },
      },
      {
        type: "image",
        name: "bg_image",
        label: "Image de background",
      },
      {
        type: "image",
        name: "image",
        label: "Image",
      },
      {
        type: "string",
        name: "author",
        label: "Autheur",
      },
      {
        type: "string",
        name: "description",
        label: "description",
        ui:{
          component:"textarea",
        },
      },
      {
        type: "string",
        name: "categories",
        label: "Categories",
        list: true,
      },
      {
        type: "string",
        name: "tags",
        label: "Tags",
        list: true,
        ui: {
          component: 'tags',
        }
      },
      {
        type: "string",
        name: "type",
        label: "type",
        default: "post",
      },
    ];
  }