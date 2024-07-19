import '@quasar/extras/material-icons/material-icons.css';

import 'quasar/dist/quasar.css';

import '@quasar/extras/fontawesome-v5/fontawesome-v5.css';
import '@quasar/extras/eva-icons/eva-icons.css';
import { QuasarPluginOptions } from 'quasar';
import { Loading, Notify } from 'quasar';
import iconSet from 'quasar/icon-set/fontawesome-v5.js';
export default {
  config: {
    notify: {
      progress: true,
      position: 'top-right',
      timeout: 500,
    },
    loading: {
      /* look at QuasarConfOptions from the API card */
    },
  },
  plugins: {
    Notify,
    Loading,
  },
  iconSet: iconSet,
} as Partial<QuasarPluginOptions>;
