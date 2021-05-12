import { stylesFactory } from "@grafana/ui";
import { css } from 'emotion';

export const getStyles = stylesFactory(() => {
  return {
    filterRow: css`
      margin-bottom: 10px;
    `,
    filterLabel: css`
      display: block;
      margin-bottom: 5px;
    `,
    filterSelect: css`
      width: 100%;
    `
  };
});
