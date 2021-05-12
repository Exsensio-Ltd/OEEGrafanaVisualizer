import { CalculationType } from 'models';

class Api {
  dataSourceUrl: string;
  headers: any = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, OPTIONS',
    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
  };

  constructor(dataSourceUrl: string) {
    this.dataSourceUrl = dataSourceUrl;
  }

  getStations = async () => {
    const response = await fetch(`${this.dataSourceUrl}/api/oee/stations`, { headers: this.headers });
    if (!response.ok) {
      throw response;
    }
    return await response.json();
  }

  getDataSet = async (station: string, reportingPeriod: number, type: CalculationType) => {
    const response = await fetch(`${this.dataSourceUrl}/api/oee/calculate?station=${station}&reportingPeriod=${reportingPeriod}&type=${type}`, { headers: this.headers });
    if (!response.ok) {
      throw response;
    }
    return await response.json();
  }
};

export default Api;
