<template>
  <div class="spendingRules">
    <div class="row q-col-gutter-xl q-mt-lg">
      <div v-for="(option, i) in spendingRules" :key="i" class="col-md-4 col-lg-4 col-xl-4 col-sm-12 col-xs-12">
        <div @click="$router.push({ name: option.to })">
          <InfoCard
            valueClass="text-h6"
            labelClass="text-body2 q-pl-xl q-pr-xl text-grey-1"
            v-bind="option"
            class="q-mx-auto cursor-pointer ruleTypes"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import InfoCard from 'components/Commons/InfoCard';

export default {
  name: 'spending-rules',
  components: {
    InfoCard,
  },
  computed: {
    ...mapGetters('rules', [
      'spendingRules',
    ]),
  },
};
</script>
