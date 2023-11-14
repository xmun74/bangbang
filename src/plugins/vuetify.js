import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: "#fc3f00",
        secondary: "#e58d05",
        accent: "#e5ceae",
        error: "#b71c1c",
      },
    },
  },
});
