import { useRoute } from '#imports';

export default {
  setup() {
    const route = useRoute();
    return { route };
  }
};
