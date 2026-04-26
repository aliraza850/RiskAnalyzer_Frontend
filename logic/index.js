import { ref } from 'vue';

export default {
  setup() {
    definePageMeta({
      layout: false
    });

    const showAuthModal = ref(false);

    return {
      showAuthModal
    };
  }
};
