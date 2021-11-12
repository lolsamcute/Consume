<template>
  <FlatCard>
    <q-card-section>
      <CardHead title-class="text-body" title="Top Members">
        <router-link class="text-primary text-weight-bold app-text--no-decoration" to="/">See all</router-link>
      </CardHead>
    </q-card-section>
    <q-card-section>
      <q-list>
        <q-item v-for="(item, i) in members" :key="i" clickable v-ripple class="text-grey-2">
          <q-item-section class="col-1" avatar>
            {{ i + 1 }}
          </q-item-section>

          <q-item-section>
            Emike Lucy
          </q-item-section>

          <q-item-section side>
            900
          </q-item-section>
        </q-item>
      </q-list>
    </q-card-section>
  </FlatCard>
</template>

<script>

export default {
  name: 'top-members',
  data() {
    return {
      members: [
        { name: 'Emike Lucy', amount: 1029 },
        { name: 'Ayotunde Lanwo', amount: 1029 },
        { name: 'Emike Lucy', amount: 1029 },
        { name: 'Emike Lucy', amount: 1029 },
      ],
    };
  },
};
</script>
