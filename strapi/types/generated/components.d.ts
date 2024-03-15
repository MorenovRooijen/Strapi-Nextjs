import type { Schema, Attribute } from '@strapi/strapi';

export interface WebsiteAfbeeldingMetTekst extends Schema.Component {
  collectionName: 'components_website_afbeelding_met_teksts';
  info: {
    displayName: 'Afbeelding met tekst';
    icon: 'rotate';
  };
  attributes: {
    Afbeelding: Attribute.Media;
    Titel: Attribute.String;
    Tekst: Attribute.Text;
    Positie: Attribute.Enumeration<['Links', 'Rechts']>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'website.afbeelding-met-tekst': WebsiteAfbeeldingMetTekst;
    }
  }
}
