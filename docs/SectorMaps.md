#  Understanding and Editing SectorMaps.ts

## Overview

`SectorMaps.ts` is in a sense, the specification that defines how all the data within the NSIS Tool is accessed and linked.

`SectorMaps.ts` is somewhat different from the `.json` nutrition intervention and gender integration data files. It supplies most of the rest of the data displayed throughout the app such as the text on the various interactive menu pages, and it determines how that data is connected.

## How the data are organized

Before we dive into `SectorMaps.ts`, it helps to have a general idea of the way the data that comprises the app is structured. From more general to more specific, it goes:
```
Sectors > SectorAreas > Activities > Nutrition Interventions / Gender Integrations
```
When a person is navigating through the app, they will follow this same progression:

1. `MainNav.tsx` uses `SectorMaps.ts` to create a navigation card with a name and image for each *Sector* using its `title` and `imgSrc`.
2. `Sector.tsx` uses `SectorMaps.ts` to create a navigation button for each of the selected *Sector's* `sectorAreas` using their `pageTitle`s.
3. `SectorAreaPageTemplate.tsx` uses `SectorMaps.ts` to create a button for each of this *SectorArea's* `activities`' `activityTitle`.
4. When one of *Activity* buttons clicked, the main content box on the page is filled in with the *Nutrition Interventions* (from `interventionIds`) and *Gender Integrations* (from `genderIntegrationIds`) falling under that activity.

With that progression in mind, the file itself is divided into a series of similar data constructs for each *Sector* (at the time of writing these are: *Production, Food Trade and Marketing, Food Processing, Food Retailing, Consumer Demand,* and *Enabling Environment*). Each *Sector* contains a set of *SectorAreas* each of which themselves contain a list of *Activities* which then link to the actual *Nutrition Intervention* and *Gender Integrations*. At the end of the file is the main map that ties them all together.

## Understanding the file itself

### A complete Sector definition

As mentioned, `SectorMaps.ts` is really just a collection of *Sectors*, so to understand it better, we will explore one *Sector* in its entirety. Below is a subset of the data related to the "Production" *Sector*. We will explain each piece in detail further on.

```typescript
export const PRODUCTION_AREAS: SectorAreas = {
  AGRO_INPUT_SUPPLY: 'agro_input_supply',
  VALUE_CHAIN_SELECTION: 'value_chain_selection',
}

export const PRODUCTION_PAGE_MAP: SectorMap = {
  [PRODUCTION_AREAS.AGRO_INPUT_SUPPLY]: {
    activities: [
      {
        activityTitle: 'Increasing Equitable Access to Inputs/Services',
        interventionIds: [2, 3, 4],
        genderIntegrationIds: [2],
      },
      {
        activityTitle: 'Capacity Development of Input/Service Delivery Actors',
        interventionIds: [5, 6, 7],
        genderIntegrationIds: [3],
      },
    ],
    pageTitle: 'Agro-Input Supply and Service Delivery',
  },
  [PRODUCTION_AREAS.VALUE_CHAIN_SELECTION]: {
    activities: [
      {
        activityTitle: 'Value Chain Selection',
        interventionIds: [1],
        genderIntegrationIds: [1],
      },
    ],
    pageTitle: 'Value Chain Selection',
    navBackwardPath: 'production',
  }
}

export const PRODUCTION_PAGE: SectorPage = {
  map: PRODUCTION_PAGE_MAP,
  header: 'Select the box below that reflects the focus of your work in agriculture/livestock production:',
  title: 'Production',
  sectorAreas: PRODUCTION_AREAS,
  imgSrc: ProductionImg,
}

export const SECTORS = {
  PRODUCTION: 'production',
  ...
}

export const MASTER_SECTOR_MAP: { [key: string]: SectorPage } = {
  [SECTORS.PRODUCTION]: PRODUCTION_PAGE,
  ...
};
```

Hopefully at least some of the relations between the data here can be seen, but we will now dive into how this all works.

### Building a Sector piece by piece

First, we add a *Sector* to `SECTORS`:
```typescript
export const SECTORS = {
  PRODUCTION: 'production',
  ...
}
```

Next, we define the *SectorAreas* related to this *Sector* in `PRODUCTION_AREAS`:

```typescript
export const PRODUCTION_AREAS: SectorAreas = {
  AGRO_INPUT_SUPPLY: 'agro_input_supply',
  VALUE_CHAIN_SELECTION: 'value_chain_selection',
}
```

Each *SectorArea* is defined by a NAME_IN_CAPS_SEPARATED_BY_UNDERSCORES, with a value of the same name but lowercase.

The *SectorArea* is then used to add an entry to the `PRODUCTION_PAGE_MAP` where we list each *Activity* related to this *SectorArea*:
```typescript
export const PRODUCTION_PAGE_MAP: SectorMap = {
  [PRODUCTION_AREAS.AGRO_INPUT_SUPPLY]: {
    activities: [
      {
        activityTitle: 'Increasing Equitable Access to Inputs/Services',
        interventionIds: [2, 3, 4],
        genderIntegrationIds: [2],
      },
      {
        activityTitle: 'Capacity Development of Input/Service Delivery Actors',
        interventionIds: [5, 6, 7],
        genderIntegrationIds: [3],
      },
    ],
    pageTitle: 'Agro-Input Supply and Service Delivery',
  },
  ...
}
```

Each *Activity* consists of the following:

`activityTitle` - the name of the *Activity* which will be used both on the button to select that *Activity* and as a title over the content related to it.

`interventionIds` - the IDs of all *Nutrition Interventions* that fall under this *Activity*

`genderIntegrationIds` - the IDs of all *Gender Integrations* that fall under this *Activity*

The *SectorArea* also is given a `pageTitle` which is used for both the button on the *Sector's* page and as the title on the *SectorArea's* page.

Next, we define the `PRODUCTION_PAGE` as follows:
```typescript
export const PRODUCTION_PAGE: SectorPage = {
  map: PRODUCTION_PAGE_MAP,
  header: 'Select the box below that reflects the focus of your work in agriculture/livestock production:',
  title: 'Production',
  sectorAreas: PRODUCTION_AREAS,
  imgSrc: ProductionImg,
}
```

where each of the fields are defined as:

`map` - the *SectorMap*: `PRODUCTION_PAGE_MAP` that we discussed above

`header` - the text that will display above the buttons on the page where the user selects a *SectorArea* for this *Sector*

`title` - the name of the *Sector* used on the navigation card when the user is selecting a *Sector* on the main navigation page and the title on the *SectorArea* selection page.

`sectorAreas` - the *SectorAreas*: `PRODUCTION_AREAS` that we discussed above.

`imgSrc` - the icon to display along with the `title` on the navigation card on the main navigation page.

Finally, we have the `MASTER_SECTOR_MAP`:

```typescript
export const MASTER_SECTOR_MAP: { [key: string]: SectorPage } = {
  [SECTORS.PRODUCTION]: PRODUCTION_PAGE,
  ...
};
```

With all of these pieces assembled, the app will build all of the UI from the main *"Where in the Food System is your project working?"* page all the way to the specific *Nutrition Interventions* and *Gender Integrations*.