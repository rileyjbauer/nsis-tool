**IGNITE Nutrition-Sensitive Intervention Selection Tool**
The Nutrition-Sensitive Intervention Selection (NSIS) Tool is an interactive webapp that provides potential nutrition interventions tailored to where one is working in the food system.

**IGNITE Overview**

The Impacting Gender & Nutrition through Innovative Technical Exchange in Agriculture (IGNITE) mechanism is a five-year investment funded by the Bill & Melinda Gates Foundation and implemented by Tanager, Laterite, and 60 Decibels to strengthen African institutions’ ability to integrate nutrition and gender into their way of doing business and their agriculture interventions.

IGNITE also identifies models that demonstrate ways of effectively and efficiently increasing both equitable consumption of safe, affordable, nutritious diets year-round and increased women’s empowerment in agriculture, and cultivates networks of local service providers to reach greater nutrition impact and gender equality in agriculture through ongoing technical assistance.

# App Structure

The NSIS Tool works primarily through a series of templates that take in some data, and are composed to create the final UI. The data is grouped and structured as follows:
```
Sectors > SectorAreas > Activities > Nutrition Interventions and Gender Integrations
```

The location and format of this data is described below in [Editing the Data](#Editing%20the%20Data).

## Editing the Data

The data that makes up the NSIS Tool is located primarily with in the `/src/data` directory where it is split into three different files:
* [`interventions.json`](#interventions.json)
* [`gender-integrations.json`](gender-integrations.json)
* [`SectorMaps.tsx`](SectorMaps.tsx)

How to edit each of these files is explained next and followed by examples. **Note:** The placement of commas is important when editing these files. Each explanation also indicates where to place and avoid placing commas.

### interventions.json

`interventions.json` is structured like so:

```
{
  "interventions": [
    {
      "id": number,
      "title": string,
      "rationale": string,
      "operationalizing": string,
      "stepsForOperationalizing": string[],
      "relatedInterventionIds": string[],
      "foodEnvironmentDomainsAffected": string[]
    },
    ...
  ]
}
```

Breaking that down we get:

`interventions` - an array of intervention objects each of which are comprised of the following. **Note:** each intervention should be followed by a comma **except** whichever is the very last in the file.

An intervention "object" is comprised of all of the following:

`id` - a unique, integer value > 0, followed by a comma. No two interventions should have the same id number.

Example:
```
{
  "id": 59,
  ...
}
```

`title` - The simple text name a person would use to refer to the intervention, placed between a set of "", followed by a comma. **Note:** Make sure the quotation mark character is ", not “ or ”

Example:
```
{
  "title": "Promote the installation and use of handwashing stations",
  ...
}
```

`rationale` - The main idea of the intervention, placed between a set of "", followed by a comma. **Note:** Make sure the quotation mark character is ", not “ or ”

Example:
```
{
  "rationale": "Foodborne illnesses have negatives effects on human health, productivity, and consumer trust in food retailers. Research suggests...",
  ...
}
```

`operationalizing` - Description of how the intervention should be carried out, placed between a set of "", followed by a comma. **Note:** Make sure the quotation mark character is ", not “ or ”

Example:
```
{
  "operationalizing": "Depending on the scope of the project, the implementer can either financially support the installation of handwashing stations and/or support local actors and market managing bodies to invest stations themselves. To increase investment in the market...",
  ...
}
```

`stepsForOperationalizing` - (Optional) A more detailed break-down of steps to implement the intervention. Can be left as [], or given a list of steps in "" placed within the [], and separated by commas **except** for the last step which cannot be followed by a comma. **Note:** Make sure the quotation mark character is ", not “ or ”

Examples: (**Note:** the text "Step _:" is for illustrative purposes only and is not required; the app will automatically place the text from `stepsForOperationalizing` in a numbered list.)

**Valid** - no steps
```
{
  "stepsForOperationalizing": [],
}
```

**Valid** - 1 step
```
{
  "stepsForOperationalizing": [
    "Step 1: ..."
  ],
}
```

**Valid** - Multiple steps, separated by commas, with no comma after the final step.
```
{
  "stepsForOperationalizing": [
    "Step 1: ...",
    "Step 2: ...",
    "Step 3: ...",
    "Step 4: ..."
  ],
}
```

The following examples are **NOT** valid inputs.

**NOT Valid** - no trailing comma
```
{
  "stepsForOperationalizing": []
}
```

**NOT Valid** - trailing comma after the last step
```
{
  "stepsForOperationalizing": [
    "Step 1: ...",
  ],
}
```

**NOT Valid** - trailing comma after the last step
```
{
  "stepsForOperationalizing": [
    "Step 1: ...",
    "Step 2: ...",
  ],
}
```

`relatedInterventionIds` - (Optional) A comma-separated list of `ids` related to this intervention. Can be left as [], or given a list of ids (numbers) referencing the related interventions. The ids do not have to be in ascending order, but it might make it easier to keep track of them.

Examples:

**Valid** - no related interventions
```
{
  "relatedInterventionIds": [],
}
```

**Valid** - a single related intervention
```
{
  "relatedInterventionIds": [
    123
  ],
}
```

**Valid** - Multiple related interventions, separated by commas, with no comma after the final id.
```
{
  "relatedInterventionIds": [
    123,
    124,
    789,
    25
  ],
}
```

The following examples are **NOT** valid inputs.

**NOT Valid** - no trailing comma
```
{
  "relatedInterventionIds": []
}
```

**NOT Valid** - trailing comma after the last step
```
{
  "relatedInterventionIds": [
    123,
  ],
}
```

**NOT Valid** - trailing comma after the last step
```
{
  "relatedInterventionIds": [
    123,
    456,
  ],
}
```

`foodEnvironmentDomainsAffected` - A list of one or more parts of the food environment affected by this intervention. Place each domain within "" inside the [], and separated by commas **except** for the last step which cannot be followed by a comma. **Note:** the closing bracket "]" is *not* followed by a comma. **Note:** Make sure the quotation mark character is ", not “ or ”

Examples:

**Valid** - 1 domain
```
{
  "foodEnvironmentDomainsAffected": [
    "Accessibility"
  ]
}
```

**Valid** - Multiple steps, separated by commas, with no comma after the final step.
```
{
  "foodEnvironmentDomainsAffected": [
    "Accessibility",
    "Availability"
  ]
}
```

The following examples are **NOT** valid inputs.

**NOT Valid** - no domains listed
```
{
  "foodEnvironmentDomainsAffected": []
}
```

**NOT Valid** - trailing comma after the last domain
```
{
  "foodEnvironmentDomainsAffected": [
    "Accessibility",
  ]
}
```

**NOT Valid** - trailing comma after the last step
```
{
  "foodEnvironmentDomainsAffected": [
    "Accessibility",
    "Availability",
  ]
}
```

**NOT Valid** - trailing comma closing bracket
```
{
  "foodEnvironmentDomainsAffected": [
    "Accessibility"
  ],
}
```


#### Put that altogether and we get a valid intervention:

```
{
  "id": 79,
  "title": "Support extension/officers to promote the local production of nutrient-rich foods by training producers on good agricultural practices and messaging on the benefit of producing the target nutrient-rich foods",
  "rationale": "Producers and consumers rely on local production for a portion of their food needs. Increasing the production of nutritious foods, through increased desirability of the commodities, can lead to increased availability and accessibility of more diverse, nutritious diets, thereby supporting improved nutrition. Many countries have a system of agriculture extension agents supported by governments or public institutions that provide technical support and advice to producers. These agent networks offer an opportunity to disseminate best-practices for the production of context-appropriate nutrient-rich crops, and messages on improving household and community diets through strategic use of those crops and income from their sale.",
  "operationalizing": "Implementers should work with the government agencies or institutions responsible for extension agents’ capacity development and training. Implementers should advocate for the integration of training on nutritious crop cultivation and the importance of nutritious diets for producer households. Implementers may also have the chance to advise on the content of these trainings and aspects that can be made more nutrition-sensitive, in which case implementers can follow the guidelines below. Alongside contextually-appropriate messages, trainings should also cover effective message delivery strategies and tools that extensionists may use to increase the uptake and persuasiveness of their messages. Working with Producer Organizations may be more efficient than reaching producing household individually. Support extension service models to ensure agents have capacity and knowledge to assist POs as well as vulnerable producers who may not be ready to participate in such organizations.",
  "stepsForOperationalizing": [
    "Consider the barriers and motivators regarding the production and consumption of the context-relevant nutritious commodities in the program regions and select the ones most salient and applicable for extension agents to address in their outreach to producers",
    "Craft the key messages that extension agents can use to sensitize producers to increase their production of a nutritious food and increase its consumption",
    "Conduct trainer-of-trainer (ToT) sessions to ensure extension agents are well-versed on the relevance on integrating messages into their outreach to producers, the messages, and best practices for sensitizing producers"
  ],
  "relatedInterventionIds": [
    2,
    4,
    80,
    81
  ],
  "foodEnvironmentDomainsAffected": [
    "Availability",
    "Accessibility"
  ]
},
```

### gender-integrations.json

`gender-integrations.json` is structured like so:

```
{
  "genderIntegrations": [
    {
      "id": number,
      "integration": string,
      "keyConsiderations": string[],
      "transformative": string
    },
    ...
  ]
}
```

Breaking that down we get:

`genderIntegrations` - an array of gender integration objects each of which are comprised of the following. **Note:** each intervention should be followed by a comma **except** whichever is the very last in the file.

A gender integration "object" is comprised of all of the following:

`id` - a unique, integer value > 0. No two integrations should have the same id number. Followed by a comma.

Example:
```
{
  "id": 24,
  ...
}
```

`integration` - The main idea of the gender integration, placed between a set of "", followed by a comma. **Note:** make sure the quotation mark character is ", not “ or ”

Example:
```
{
  "integration": "Ensuring women have equitable access to inputs/ technology will support closing gender gaps in productivity and boost overall agricultural and nutrition outcomes.",
  ...
}
```

`keyConsiderations` - A list of important and/or relavent considerations or pieces of context. Can be left as [], or given a list of text surrounded by "" placed within the [], and separated by commas **except** for the last consideration which cannot be followed by a comma. **Note:** Make sure the quotation mark character is ", not “ or ”

Examples:

**Valid** - no considerations
```
{
  "keyConsiderations": [],
}
```

**Valid** - 1 consideration, no comma after the consideration
```
{
  "keyConsiderations": [
    "Women are key purchasers of food..."
  ],
}
```

**Valid** - Multiple considerations, separated by commas, with no comma after the final consideration.
```
{
  "keyConsiderations": [
    "Women are key purchasers of food...",
    "Depending on the local context...",
    "Women face constraints to accessing markets..."
  ],
}
```

The following examples are **NOT** valid inputs.

**NOT Valid** - no trailing comma
```
{
  "keyConsiderations": []
}
```

**NOT Valid** - trailing comma after the last consideration
```
{
  "keyConsiderations": [
    "Women are key purchasers of food...",
  ],
}
```

**NOT Valid** - trailing comma after the last consideration
```
{
  "keyConsiderations": [
    "Women are key purchasers of food...",
    "Depending on the local context...",
  ],
}
```

`transformative` - The effects and benefits that gender integration can ideally generate, placed between a set of "". **Note:** the transformative is *not* followed by a comma. **Note:** Make sure the quotation mark character is ", not “ or ”

Example:
```
{
  "transformative": "In addition to expanding access to a new consumer base and increasing consumer loyalty by ensuring that both men and women can access commodities and products..."
}
```

### SectorMaps.tsx

`SectorMaps.tsx` is somewhat different from the `.json` data files. It supplies most of the rest of the data displayed throughout the app such as that found on the various interactive menu pages, and it determines how that data is connected.

The file is divided into a series of similar data constructs for each *Sector* (at the time of writing these are: *Production, Food Trade and Marketing, Food Processing, Food Retailing, Consumer Demand, *and* Enabling Environment*). Each sector is broken down into *Activities* which themselves contain the actual nutrition intervention and gender integrations. At the end of the file is the main map that ties them all together.

Before we dive into `SectorMaps.tsx`, it helps to have a general idea of the way the app works. Recall from [App Structure](#App%20Structure) that the data that comprises the app is strcutured as follows:
```
Sectors > SectorAreas > Activities > Nutrition Interventions and Gender Integrations
```
When a person is navigating through the app, they will follow this same progression:

1. `MainNav.tsx` uses `SectorMaps.tsx` to create a navigation card with a name and image for each *Sector* using its `title` and `imgSrc`.
2. `Sector.tsx` uses `SectorMaps.tsx` to create a navigation button for each of the selected *Sector's* `sectorAreas` using their `pageTitle`s.
3. `SectorAreaPageTemplate.tsx` uses `SectorMaps.tsx` to create a button for each of this *SectorArea's* `activities`' `activityTitle`.
4. When one of *Activity* buttons clicked, the main content box on the page is filled in with the *Nutrition Interventions* (from `interventionIds`) and *Gender Integrations* (from `genderIntegrationIds`) falling under that activity.

With that progression in mind, below is a subset of the data related to *Production* which we will explore in detail below:

```
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

Hopefully at least some of the relations between the data here can be seen, but we will now dive into how this all works:

First, we add a *Sector* to `SECTORS`:
```
export const SECTORS = {
  PRODUCTION: 'production',
  ...
}
```

Next, we define the `SectorAreas` related to this *Sector* in `PRODUCTION_AREAS`:

```
export const PRODUCTION_AREAS: SectorAreas = {
  AGRO_INPUT_SUPPLY: 'agro_input_supply',
  VALUE_CHAIN_SELECTION: 'value_chain_selection',
}
```

Each `SectorArea` is defined by a NAME_IN_CAPS_SEPARATED_BY_UNDERSCORES, with a value of the same name but lowercase.

The *SectorArea* is then used to add an entry to the `PRODUCTION_PAGE_MAP` where we list each *Activity* related to this *SectorArea*:
```
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
```
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

```
export const MASTER_SECTOR_MAP: { [key: string]: SectorPage } = {
  [SECTORS.PRODUCTION]: PRODUCTION_PAGE,
  ...
};
```

With all of these pieces assembled, the app will build all of the UI from the main *"Where in the Food System is your project working?"* page all the way to the specific *Nutrition Interventions* and *Gender Integrations*.