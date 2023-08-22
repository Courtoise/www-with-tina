import { defineConfig } from "tinacms";
import { aboutFields } from "./collection/about";
import { mediaFields } from "./collection/media";
import { accueilFields } from "./collection/home";
import { authorFields } from "./collection/author";
import { contactFields } from "./collection/contact";
import { featureFields } from "./collection/service";
import { legalFields } from "./collection/legal";
import { projetsFields } from "./collection/project";
import { post_indexFields } from "./collection/post";
import { postFields } from "./collection/posts";
import { recrutementFields } from "./collection/recrutment";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  branch:
    process.env.TINA_BRANCH || // custom branch env override
    process.env.VERCEL_GIT_COMMIT_REF || // Vercel branch env
    process.env.HEAD, // Netlify branch env,
  clientId: process.env.TINA_CLIENT_ID, // Get this from tina.io
  token: process.env.TINA_TOKEN, // Get this from tina.io
  client: { skip: true },
  build: {
    outputFolder: "admin",
    publicFolder: "static",
  },
  media: {
    tina: {
      mediaRoot: "images",
      publicFolder: "static",
    },
  },
  schema: {
    collections: [
      // Page Accueil
      {
        label: "Accueil",
        name: "accueil",
        path: "content/french",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "content/french/_index",
        },

        fields: [...accueilFields()],
      },
      //Page Asso
      {
        format: "md",
        label: "Association",
        name: "association",
        path: "content/french",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "**/*/about",
        },
        fields: [...aboutFields()],
      },
      //Page Service
      {
        format: "md",
        label: "Services",
        name: "services",
        path: "content/french",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "**/*/service",
        },
        fields: [...featureFields()],
      },
      //Page Post
      // {
      //   format: "md",
      //   label: "Post",
      //   name: "post__fr_",
      //   path: "content/french/blog",
      //   ui: {
      //     allowedActions: {
      //       create: false,
      //       delete: false,
      //     },
      //   },
      //   match: {
      //     include: "_index",
      //   },
      //   fields: [
      //     ...post_indexFields(),
      //   ],
      // },
      {
        format: "md",
        label: "Posts",
        name: "posts",
        path: "content/french/blog",
        match: {
          exclude: "**/_index",
        },
        fields: [
          ...postFields(),
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
        ],
      },
      //Page Auteur
      {
        format: "md",
        label: "Auteur",
        name: "auteur__fr_",
        path: "content/french/author",
        match: {
          include: "**/*",
        },
        fields: [...authorFields()],
      },
      //Page Projet
      {
        format: "md",
        label: "Projet",
        name: "projet",
        path: "content/french/project",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "**/*/_index",
        },
        fields: [...projetsFields()],
      },
      //Page Recrutement
      {
        format: "md",
        label: "Recrutement",
        name: "recrutement",
        path: "content/french",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "**/*/pricing",
        },
        fields: [...recrutementFields()],
      },
      //Page Media
      {
        format: "md",
        label: "Presse",
        name: "presse",
        path: "content/french",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "**/*/presse",
        },
        fields: [...mediaFields()],
      },
      //Page Contact
      {
        format: "md",
        label: "Contact",
        name: "contact",
        path: "content/french",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "**/*/contact",
        },
        fields: [...contactFields()],
      },
      //Page Mention legale
      {
        format: "md",
        label: "Mention Legale",
        name: "mention_legale",
        path: "content/french",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "**/*/legales",
        },
        fields: [
          ...legalFields(),
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
        ],
      },
      //Config
      {
        format: "toml",
        label: "Configuration",
        name: "configuration",
        path: "config/_default",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "**/*/config",
        },
        fields: [
          {
            name: "baseURL",
            label: "URL du site",
            type: "string",
          },
          {
            name: "title",
            label: "Titre du site",
            type: "string",
          },
        ],
      },
      {
        format: "toml",
        label: "Paramètres",
        name: "param_tres",
        path: "config/_default",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "**/*/params",
        },
        fields: [
          {
            name: "author",
            label: "Autheur",
            type: "string",
          },
          {
            name: "copyright",
            label: "Copyright",
            type: "string",
          },
          {
            name: "description",
            label: "Description SEO",
            type: "string",
          },
          {
            name: "keywords",
            label: "keywords SEO",
            type: "string",
          },
          {
            name: "email",
            label: "Email",
            type: "string",
          },
          {
            name: "phone",
            label: "Telephone",
            type: "string",
          },

          {
            name: "location",
            label: "Adresse",
            type: "string",
          },
          {
            name: "favicon",
            label: "Favicon",
            type: "image",
          },
          {
            name: "image",
            label: "image",
            type: "image",
          },
          {
            name: "logo",
            label: "Logo",
            type: "image",
          },
          {
            name: "logoDefaultHeight",
            label: "Hauteur du logo en px",
            type: "string",
          },
          {
            name: "logoNav",
            label: "logoNav",
            type: "image",
          },
          {
            name: "logo_text",
            label: "logo_text",
            type: "string",
          },
          {
            name: "logo_width",
            label: "Longueur du logo en px",
            type: "string",
          },
          {
            name: "navbar_fixed",
            label: "Nav Bar Fixe ",
            type: "boolean",
          },
          {
            name: "gmap",
            label: "Google Map",
            type: "object",
            fields: [
              {
                name: "enable",
                label: "Activer",
                type: "boolean",
              },
              {
                name: "gmap_api",
                label: "gmap_api Key",
                type: "string",
              },
              {
                name: "map_latitude",
                label: "Latitude",
                type: "string",
              },
              {
                name: "map_longitude",
                label: "Longitude",
                type: "string",
              },
              {
                name: "map_marker",
                label: "Map repère ",
                type: "image",
              },
            ],
          },
          {
            name: "osm",
            label: "Open Street Map",
            type: "object",
            fields: [
              {
                name: "enable",
                label: "Activer",
                type: "boolean",
              },
              {
                name: "map",
                label: "Map Url ",
                type: "string",
              },
            ],
          },
          {
            name: "matomo",
            label: "Matomo Statistique",
            type: "object",
            fields: [
              {
                name: "enable",
                label: "Activer",
                type: "boolean",
              },
              {
                name: "id",
                label: "id",
                type: "string",
              },
              {
                name: "url",
                label: "url",
                type: "string",
              },
            ],
          },
          {
            name: "footerlogo",
            label: "Footer Logo",
            type: "object",
            list: true,
            ui: {
              // This allows the customization of the list item UI
              // Data can be accessed by item?.<Name of field>
              itemProps: (item) => {
                return { label: `${item?.title} ` };
              },
            },
            fields: [
              {
                name: "icon",
                label: "Icon",
                type: "image",
              },
              {
                name: "title",
                label: "Titre",
                type: "string",
              },
              {
                name: "weight",
                label: "Positionnement",
                type: "number",
              },
            ],
          },
          {
            name: "social",
            label: "Reseaux Sociaux",
            description: "https://fontawesome.com pour les icons",
            type: "object",
            list: true,
            ui: {
              // This allows the customization of the list item UI
              // Data can be accessed by item?.<Name of field>
              itemProps: (item) => {
                return { label: `${item?.title} ` };
              },
            },
            fields: [
              {
                name: "icon",
                label: "Icon",
                type: "string",
              },
              {
                name: "title",
                label: "Titre",
                type: "string",
              },
              {
                name: "link",
                label: "Lien",
                type: "string",
              },
            ],
          },
        ],
      },
      {
        format: "toml",
        label: "Menu",
        name: "menu__fr_",
        path: "config/_default",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "**/*/menus.fr",
        },
        fields: [
          {
            name: "main",
            label: "Menu",
            type: "object",
            list: true,
            ui: {
              // This allows the customization of the list item UI
              // Data can be accessed by item?.<Name of field>
              itemProps: (item) => {
                if (item?.parent) {
                  return { label: `${item?.parent} > ${item?.name} ` };
                }
                return { label: `${item?.name} ` };
              },
            },
            fields: [
              {
                name: "name",
                label: "Nom",
                type: "string",
              },
              {
                name: "url",
                label: "url",
                type: "string",
              },
              {
                name: "weight",
                label: "Positionnement",
                type: "number",
              },
              {
                name: "hasChildren",
                label: "Menu Deroulant",
                type: "boolean",
              },
              {
                name: "parent",
                label: "Parent du Menu Deroulant",
                type: "string",
                description:
                  " À mettre que si le lien est un bouton de menu déroulant",
              },
            ],
          },
          {
            name: "footer",
            label: "Footer Menu",
            type: "object",
            list: true,
            fields: [
              {
                name: "name",
                label: "Nom",
                type: "string",
              },
              {
                name: "url",
                label: "url",
                type: "string",
              },
              {
                name: "weight",
                label: "Positionnement",
                type: "number",
              },
            ],
          },
        ],
      },
    ],
  },
});
