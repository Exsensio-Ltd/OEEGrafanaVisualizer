import React, { useEffect, useState } from 'react';
import { PanelProps } from '@grafana/data';
import { Options } from 'types';
import { css, cx } from 'emotion';
import { getStyles } from 'styles';
import BarChart from 'components/BarChart/BarChar';
import Loader from 'components/Loader/Loader';
import { CalculationType, DataValue, Parameters, ResponseMessage } from 'models';
import ProductSelector from 'components/ProductSelector/ProductSelector';
import { Button } from '@grafana/ui';
import Api from 'api/api';

export const SimplePanel: React.FC<PanelProps<Options>> = ({ options, data, width, height }) => {
  const [parameters, setParameters] = useState<Parameters>({ product: '', station: '', calculationType: CalculationType.Simple, reportingPeriod: 1 });
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [dataSet, setDataSet] = useState<DataValue[]>([]);

  const styles = getStyles();

  const clickHandle = () => setParameters({ ...parameters });

  const updateParameters = (newParams: Parameters) => setParameters({ ...parameters, ...newParams });

  useEffect(() => {
    if (parameters.station === '') {
      return;
    }
    setDataSet([]);
    getChartData();
  }, [parameters]);

  const getChartData = () => {
    if (!parameters) return;

    setIsLoading(true);
    new Api(options.dataSourceUrl).getDataSet(parameters.station, parameters.reportingPeriod, parameters.calculationType)
      .then((res: ResponseMessage) => {
        setDataSet(res.content);
        setHasError(false);
      })
      .catch(() => {
        setDataSet([]);
        setHasError(true);
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <div
      className={cx(
        styles.oeeWrapper,
        css`
          width: ${width}px;
          height: ${height}px;
        `
      )}
    >
      <div className={styles.oeeContainer}>
        {isLoading && <Loader />}
        <div className={styles.oeeContainerFilters}>
          <ProductSelector
            dataSourceUrl={options.dataSourceUrl}
            parameters={parameters}
            parametersChanged={updateParameters}
          />
        </div>
        <div className={styles.oeeContainerRefresh}>
          {hasError && <div className={styles.error}>Unhandled Error</div>}
          <Button variant="secondary" onClick={clickHandle}>Refresh</Button>
        </div>
        <div className={styles.oeeContainerBarChart}>
          <BarChart
            dataSet={dataSet}
            parameters={parameters}
            width={width - 220}
            height={height}
          />
        </div>
      </div>
    </div>
  );
};
