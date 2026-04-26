export default {
  props: {
    reports: Array,
    loading: Boolean
  },
  setup() {
    const getRiskBadgeClass = (score) => {
      if (score >= 66) return 'risk-high';
      if (score >= 33) return 'risk-medium';
      return 'risk-low';
    };

    const getRiskLabel = (score) => {
      if (score >= 66) return 'High';
      if (score >= 33) return 'Medium';
      return 'Low';
    };

    return {
      getRiskBadgeClass,
      getRiskLabel
    };
  }
};
