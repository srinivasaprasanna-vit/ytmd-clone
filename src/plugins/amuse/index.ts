import { createPlugin } from '@/utils';
import backend from './backend';
import { t } from '@/i18n';

export interface MusicWidgetConfig {
  enabled: boolean;
}

export const defaultConfig: MusicWidgetConfig = {
  enabled: false,
};

export default createPlugin({
  name: () => t('plugins.amuse.name'),
  description: () => t('plugins.amuse.description'),
  addedVersion: '3.7.X',
  restartNeeded: true,
  config: defaultConfig,
  backend,
});
