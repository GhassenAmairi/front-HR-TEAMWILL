import "@quasar/extras/material-icons/material-icons.css";
import {
  Quasar,
  QLayout,
  QSpinnerHourglass,
  QInput,
  QItemSection,
  QIcon,
  QField,
  QSelect,
  QBanner,
  QToggle,
  QItemLabel,
  QTable,
  
} from "quasar";

import "quasar/dist/quasar.css";
import lang from "quasar/lang/en-US";
import "@quasar/extras/fontawesome-v5/fontawesome-v5.css";
import "@quasar/extras/eva-icons/eva-icons.css";
import { QuasarPluginOptions } from "quasar";
import { Loading, Notify } from "quasar";
import iconSet from "quasar/icon-set/material-icons"; // example icon set
export default {
  config: {
    notify: {
      progress: true,
      position: "top-right",
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
  components: {
    QLayout,
    QSpinnerHourglass,
    QInput,
    QItemSection,
    QIcon,
    QField,
    QSelect,
    QBanner,
    QToggle,
    QItemLabel,
    QTable
  },
  iconSet: iconSet,
  lang: lang,
} as Partial<QuasarPluginOptions>;
