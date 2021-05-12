import { stylesFactory } from '@grafana/ui';
import { css } from 'emotion';

export const getStyles = stylesFactory(() => {
  return {
    filters: css`
      display: flex;
      justify-content: space-between;
    `
  };
});
