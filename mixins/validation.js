const validation = {
  methods: {
    validateEachField(refs) {
      refs.forEach((ref) => {
        this.$refs[ref].validate();
      });
    },
    thereIsAtLeastOneError(refs) {
      const thereIsAtLeastOneError = refs.some((ref) => this.$refs[ref].hasError);
      return thereIsAtLeastOneError;
    },
  },
};

export default validation;
