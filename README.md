# OEE Grafana Plugin

![GitHub](https://img.shields.io/github/license/Exsensio-Ltd/OEEGrafanaVisualizer)

The plugin built with React.js for Grafana Panel and provides representation of the results of OEE (Overall Equipment Effectiveness) for specific device in bar chart and additionnaly lines for `Availability`, `Performance`, `Quality`.

The plugin has a few options that influence to the data that represented in the bar chart: Product, Station, Production period, Calculation type.

OEE values are divided by the production time (the time that equipment is expected to produce). A bar show a value of OEE for the selected production time that can be from 1 to 8 hours. Every bar is divided to the colored areas (red, yellow and green) that visualise the status of the OEE result. Each color is indicate the result: red is a bad (from 0 to 50), yellow is a satisfactory (from 50 to 75) and green is a good result (from 75).

## Contents

-   [Install](#install)
-   [Use plugin with the Docker](#use-plugin-with-the-docker)
-   [License](#license)

## Install

1. Install dependencies
`yarn install`
2. Build plugin in production mode
`yarn build`
3. Place the build to the Grafana plugin folder
4. On the Grafana dashboard add a panel
5. Under the panel visualisation select the `OEE`
6. In the **Display** section set the `Data Source URL`. The URL of the [OEEMicroservice](https://github.com/Exsensio-Ltd/OEEMicroservice). By default the plugin will use `https://localhost:44360`

## Use plugin with the Docker

`docker run -d -p 3000:3000 -v "$(pwd)"/grafana-plugins:/var/lib/grafana/plugins --name=grafana grafana/grafana:7.0.0`

## License

[Apache2.0](LICENSE) © Exsensio Ltd
