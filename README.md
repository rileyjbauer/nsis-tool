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

The data that makes up the NSIS Tool is located primarily with in the `/src/data` directory where it is split into three different files.
The following links take you to documentation explaining each of these three data files in detail.
* [interventions.json](https://github.com/rileyjbauer/nsis-tool/blob/master/docs/nutritionInterventions.md)
* [gender-integrations.json](https://github.com/rileyjbauer/nsis-tool/blob/master/docs/genderIntegrations.md)
* [SectorMaps.ts](https://github.com/rileyjbauer/nsis-tool/blob/master/docs/SectorMaps.md)

> **Note:** The placement of commas is important when editing these files. Each explanation also indicates where to place and avoid placing commas.

# Updating the App:

## Prerequisites:
- Install [npm](https://nodejs.org/en/download/)
- Install [git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
- Install some kind of [sftp](https://www.ssh.com/academy/ssh/sftp#sftp-client-for-windows-and-mac)

## Steps to Update
> **Note:** Unless otherwise stated, these are to be entered into a terminal/command line:

1. Open a terminal and navigate to the directory you want to work in, e.g.
`cd ~/projects/tanager-nsis-tool`

2. From the directory of your computer where you want to work with the code, run:
`git clone https://github.com/rileyjbauer/nsis-tool.git`

3. Install all Node dependencies with npm
`npm install`

4. Make any desired changes, referring to `Editing the Data` above. Local changes can be viewed by running `npm start` and navigating in a web browser to: `http://localhost:3000/tools/interactive_nsis_tool/`

5. When satisfied with your changes, build a minified production version of the app using: `npm run build`.
This result of this will be placed into `your_nsis_tool_root_directory/tools/interactive_nsis_tool`

6. Using some form of `SFTP`, connect to the staging (or production) site

7. Delete `tools/interactive_nsis_tool` from the server

8. Move the entire `your_nsis_tool_root_directory/tools/interactive_nsis_tool` from your computer to the `tools` directory on the server
