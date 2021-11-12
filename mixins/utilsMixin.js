export const utilsMixin = {
  methods: {
    isValidDigit(val) {
      const reg = /^\d+$/;
      return val.match(reg);
    },
  },
};
