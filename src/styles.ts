import { stylesFactory } from '@grafana/ui';
import { css } from 'emotion';

export const getStyles = stylesFactory(() => {
  return {
    oeeWrapper: css`
      position: relative;
    `,
    oeeContainer: css`
      display: grid;
      grid-template-columns: 210px auto;
      grid-template-rows: 205px auto;
      gap: 0 0;
      grid-template-areas: "filters barchart" "progressbar barchart";
    `,
    oeeContainerFilters: css`
      grid-area: filters;
      margin-right: 10px;
    `,
    oeeContainerRefresh: css`
      grid-area: progressbar;
      text-align: center;
    `,
    oeeContainerBarChart: css`
      grid-area: barchart;
      display: flex;
      flex-direction: column;
    `,
    error: css`
      font-size: 1em;
      background: red;
      border-radius: 4px;
      color: #000;
      font-weight: 400;
      margin-bottom: 20px;
    `
  };
});
