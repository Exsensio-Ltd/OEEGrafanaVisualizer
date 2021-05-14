import { PanelPlugin } from '@grafana/data';
import { Options } from './types';
import { SimplePanel } from './SimplePanel';

export const plugin = new PanelPlugin<Options>(SimplePanel).setPanelOptions(builder => {
  return builder
    .addTextInput({
      path: 'dataSourceUrl',
      name: 'Data Source URL',
      defaultValue: 'http://localhost:51803'
    });
});
