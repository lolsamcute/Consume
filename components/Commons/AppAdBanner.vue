<template>
  <FlatCard style="height: 177px" :bordered="true" class="q-pa-lg app-rounded--8">
    <q-card-section>
      Lorem ipsum dolor sit amet
    </q-card-section>
    <q-card-section class="row">
      <div class="column">
        <div class="text-weight-bold">Try Proxima</div>
        <div class="text-grey-1">Boost your brand engagement and enjoy the benefits of both Consum.us and Proxima</div>
      </div>
      <q-space />
      <div>
        <AppBtn label="Try Proxima" />
      </div>
    </q-card-section>
  </FlatCard>
</template>

<script>
export default {
  name: 'app-ad-banner',
};
</script>
