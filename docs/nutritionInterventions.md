#  Understanding and Editing interventions.json

`interventions.json` is the one of the main sources of data which the NSIS Tool is built around. It is a [.json](https://www.json.org/json-en.html) file, so its format might be familiar to you, but if not, we will do our best here to explain in clear terms how it structured and how one would go about editing it.

The file itself is structured like so:

```json
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

### `interventions`
\- an array of intervention objects each of which are made up of all of the fields described below.

> **Note:** each intervention should be followed by a comma **except** whichever is the very last in the file.

#### `id`
\- a unique, integer value > 0, followed by a comma. No two interventions should have the same id number.

Example:
```json
{
  "id": 59,
  ...
}
```

#### `title`
\- the simple text summary a person would use to refer to the intervention, placed between a set of "", followed by a comma.

>**Note:** Make sure the quotation mark character is ", not “ or ”

Example:
```json
{
  "title": "Promote the installation and use of handwashing stations",
  ...
}
```

#### `rationale`
\- the main idea of the intervention, placed between a set of "", followed by a comma.

>**Note:** Make sure the quotation mark character is ", not “ or ”

Example:
```json
{
  "rationale": "Foodborne illnesses have negatives effects on human health, productivity, and consumer trust in food retailers. Research suggests...",
  ...
}
```

#### `operationalizing`
\- a description of how the intervention should be carried out, placed between a set of "", followed by a comma.

>**Note:** Make sure the quotation mark character is ", not “ or ”

Example:
```json
{
  "operationalizing": "Depending on the scope of the project, the implementer can either financially support the installation of handwashing stations and/or support local actors and market managing bodies to invest stations themselves. To increase investment in the market...",
  ...
}
```

#### `stepsForOperationalizing`
\- (Optional) A more detailed break-down of steps to implement the intervention. Can be left as [], or given a list of steps in "" placed within the [], and separated by commas **except** for the last step which cannot be followed by a comma.

> **Note:** Make sure the quotation mark character is ", not “ or ”

Examples:

>**Note:** the text "Step _:" is for illustrative purposes only and is not required; the app will automatically place the text from `stepsForOperationalizing` in a numbered list.

**Valid** - no steps
```json
{
  "stepsForOperationalizing": [],
}
```

**Valid** - 1 step
```json
{
  "stepsForOperationalizing": [
    "Step 1: ..."
  ],
}
```

**Valid** - Multiple steps, separated by commas, with no comma after the final step.
```json
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
```json
{
  "stepsForOperationalizing": []
}
```

**NOT Valid** - trailing comma after the last step
```json
{
  "stepsForOperationalizing": [
    "Step 1: ...",
  ],
}
```

**NOT Valid** - trailing comma after the last step
```json
{
  "stepsForOperationalizing": [
    "Step 1: ...",
    "Step 2: ...",
  ],
}
```

#### `relatedInterventionIds`
\- (Optional) A comma-separated list of `ids` related to this intervention. Can be left as [], or given a list of ids (numbers) referencing the related interventions. The ids do not have to be in ascending order, but it might make it easier to keep track of them.

Examples:

**Valid** - no related interventions
```json
{
  "relatedInterventionIds": [],
}
```

**Valid** - a single related intervention
```json
{
  "relatedInterventionIds": [
    123
  ],
}
```

**Valid** - Multiple related interventions, separated by commas, with no comma after the final id.
```json
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
```json
{
  "relatedInterventionIds": []
}
```

**NOT Valid** - trailing comma after the last step
```json
{
  "relatedInterventionIds": [
    123,
  ],
}
```

**NOT Valid** - trailing comma after the last step
```json
{
  "relatedInterventionIds": [
    123,
    456,
  ],
}
```

#### `foodEnvironmentDomainsAffected`
\- A list of one or more parts of the food environment affected by this intervention. Place each domain within "" inside the [], and separated by commas **except** for the last step which cannot be followed by a comma.

> **Note:** the closing bracket "]" is *not* followed by a comma.

> **Note:** Make sure the quotation mark character is ", not “ or ”

Examples:

**Valid** - 1 domain
```json
{
  "foodEnvironmentDomainsAffected": [
    "Accessibility"
  ]
}
```

**Valid** - Multiple steps, separated by commas, with no comma after the final step.
```json
{
  "foodEnvironmentDomainsAffected": [
    "Accessibility",
    "Availability"
  ]
}
```

The following examples are **NOT** valid inputs.

**NOT Valid** - no domains listed
```json
{
  "foodEnvironmentDomainsAffected": []
}
```

**NOT Valid** - trailing comma after the last domain
```json
{
  "foodEnvironmentDomainsAffected": [
    "Accessibility",
  ]
}
```

**NOT Valid** - trailing comma after the last step
```json
{
  "foodEnvironmentDomainsAffected": [
    "Accessibility",
    "Availability",
  ]
}
```

**NOT Valid** - trailing comma after the closing bracket
```json
{
  "foodEnvironmentDomainsAffected": [
    "Accessibility"
  ],
}
```


#### Put that altogether and we get a valid nutrition intervention object:

```json
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