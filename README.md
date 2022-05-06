**IGNITE Nutrition-Sensitive Intervention Selection Tool**
The Nutrition-Sensitive Intervention Selection (NSIS) Tool is an interactive webapp that provides suggested nutrition integrations for over 50 common food and market systems activities.

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
* [`SectorMaps.ts`](SectorMaps.ts)

How to edit each of these files is explained next and followed by examples.

> **Note:** The placement of commas is important when editing these files. Each explanation also indicates where to place and avoid placing commas.