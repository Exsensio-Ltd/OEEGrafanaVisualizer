import React, { useEffect, useState } from 'react';
import Selector from 'components/Selector/Selector';
import { CalculationType, Parameters, Product, ResponseMessage } from 'models';
import Api from 'api/api';
import { CalculationTypes, Periods } from 'modelsData';
import { getStyles } from './ProductSelectorStyles';

interface Props {
  dataSourceUrl: string;
  parameters: Parameters;
  parametersChanged: (parameters: Parameters) => void;
}

const ProductSelector: React.FC<Props> = ({ dataSourceUrl, parameters, parametersChanged }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const styles = getStyles();

  useEffect(() => {
    new Api(dataSourceUrl).getStations()
      .then((res: ResponseMessage) => {
        setProducts(res.content);

        if (res.content.length && res.content[0].stations.length) {
          const newParams = {
            product: res.content[0].id,
            station: res.content[0].stations[0].id,
          } as Parameters;
          parametersChanged(newParams);
        }
      }).catch(() => { });
  }, []);

  const updateProductParameters = (product: string) => {
    const station = products.find(p => p.id === product)?.stations[0].id;
    parametersChanged({ product, station } as Parameters);
  };

  const updateStationParameters = (station: string) => {
    parametersChanged({ station } as Parameters);
  };

  const updateCalculationsParameters = (type: string) => {
    const calculationType = parseInt(type, 10) as CalculationType;
    parametersChanged({ calculationType } as Parameters);
  };

  const updateReportingPeriodParameters = (period: string) => {
    const reportingPeriod = parseInt(period, 10);
    parametersChanged({ reportingPeriod } as Parameters);
  };

  const getProducts = () => products.map(p => ({ text: p.name, value: p.id }));
  const getStations = () => products.find(p => p.id === parameters?.product)?.stations.map(s => ({ text: s.name, value: s.id })) ?? [];

  return (
    <div>
      <Selector label="Product Name" options={getProducts()} callback={product => updateProductParameters(product)} />
      <Selector label="Station Name" options={getStations()} callback={station => updateStationParameters(station)} />
      <div className={styles.filters}>
        <Selector label="Period" options={Periods} callback={period => updateReportingPeriodParameters(period)} width="75px" />
        <Selector label="Calculation" options={CalculationTypes} callback={type => updateCalculationsParameters(type)} width="115px" />
      </div>
    </div>
  );
}

export default ProductSelector;
