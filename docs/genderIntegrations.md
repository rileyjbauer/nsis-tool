#  Understanding and Editing genderIntegrations.json

`gender-integrations.json` is the one of the main sources of data which the NSIS Tool is built around. It is a [.json](https://www.json.org/json-en.html) file, so its format might be familiar to you, but if not, we will do our best here to explain in clear terms how it structured and how one would go about editing it.

The file itself is structured like so:

```json
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

### `genderIntegrations`
\- an array of gender integration objects each of which are made up of all of the fields described below.

> **Note:** each integration should be followed by a comma **except** whichever is the very last in the file.

#### `id`
\- a unique, integer value > 0, followed by a comma No two integrations should have the same id number.

Example:
```json
{
  "id": 24,
  ...
}
```

#### `integration`
\- the main idea of the gender integration, placed between a set of "", followed by a comma.

> **Note:** make sure the quotation mark character is ", not “ or ”

Example:
```json
{
  "integration": "Ensuring women have equitable access to inputs/ technology will support closing gender gaps in productivity and boost overall agricultural and nutrition outcomes.",
  ...
}
```

#### `keyConsiderations`
\- a list of important and/or relavent considerations or pieces of context. Can be left as [], or given a list of text surrounded by "" placed within the [], and separated by commas **except** for the last consideration which cannot be followed by a comma.

> **Note:** Make sure the quotation mark character is ", not “ or ”

Examples:

**Valid** - no considerations
```json
{
  "keyConsiderations": [],
}
```

**Valid** - 1 consideration, no comma after the consideration
```json
{
  "keyConsiderations": [
    "Women are key purchasers of food..."
  ],
}
```

**Valid** - Multiple considerations, separated by commas, with no comma after the final consideration.
```json
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
```json
{
  "keyConsiderations": []
}
```

**NOT Valid** - trailing comma after the last consideration
```json
{
  "keyConsiderations": [
    "Women are key purchasers of food...",
  ],
}
```

**NOT Valid** - trailing comma after the last consideration
```json
{
  "keyConsiderations": [
    "Women are key purchasers of food...",
    "Depending on the local context...",
  ],
}
```

#### `transformative`
\- The effects and benefits that gender integration can ideally generate, placed between a set of "".

> **Note:** the transformative is *not* followed by a comma.

> **Note:** Make sure the quotation mark character is ", not “ or ”

Example:
```json
{
  "transformative": "In addition to expanding access to a new consumer base and increasing consumer loyalty by ensuring that both men and women can access commodities and products..."
}
```

#### Put that altogether and we get a valid gender integration object:

```json
{
  "id": 28,
  "integration": "Smart and effective policymaking ensures that policies promoting nutrition address the needs and priorities of all persons, regardless of their gender. This means that community mobilization toward government improvements to the food system should take into account both men's and women's interests and needs and considers the implications of any planned action for these groups.",
  "keyConsiderations": [
    "Government policies and procedures are often designed without consideration of the unique and differing needs of women and men",
    "Nutrition, agriculture, and food systems policies should consider and acknowledge such gender-specific issues as women's role as care providers as well as unequal access to services, information, finance, and resources without reinforcing patterns of discrimination or maintaining gender gaps",
    "When organizing and mobilizing community action to communicate to government officials about policy and system improvements, make sure women are included in the process. Consult women about their needs and consider how the proposed changes will impact men and women differently.",
    "Pay attention to whether responsibility for mobilizing around issues of nutrition and community well-being are falling disproportionately on one group or whether a group is being left out - is the work primarily being left to women? Are men being excluded? Or is the reverse true?"
  ],
  "transformative": "Consideration of gender is essential to effective nutrition, agriculture, and food systems policymaking and action. Policy interventions that promote nutrition should also analyze gender norms to determine how they shape and influence gender roles in nutrition, agriculture and food systems. Understanding these gender norms will allow communities to advocate for more effective nutrition-sensitive and food systems policies that are more equitable for people of all genders and have the potential to contribute to closing gender gaps. Before embarking in advocacy processes, consider starting with a gender analysis - the study of differences between men and women in terms of their conditions, needs, participation rates, access to resources, development, control of assets, and decision-making roles. Use data from gender analysis not only in the process of designing an advocacy plan, but also to hold government agencies accountable. Periodically analyze and reflect on the gender dimensions of how the policy or action is being implemented. Ask, how will gender norms, roles, and power imbalance affect results? How have the changes affected both women and men?"
},
```