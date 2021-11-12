<template>
  <div class="socialMediaDrive  q-mt-md">
    <PageIntroLeading text="Reward your customers for engaging on your social media channels. Select to begin." />
    <div class="row q-mt-lg">
      <div class="col-md-12 col-lg-12 col-xl-12 col-sm-12 col-xs-12">
        <FlatCard class="app-rounded--12">
          <q-card-section>
            <div class="q-mt-md q-ml-md">Select:</div>
          </q-card-section>

          <q-card-section class="row">
            <div class="col-md-5 col-lg-5 col-xl-5 col-sm-12 col-xs-12">
              <q-list>
                <q-item @click="$router.push({ name: 'media-option', params: { id: option.id } })" class="q-mb-lg app-rounded--5" v-for="(option, i) in socialOptions" :key="i" clickable v-ripple>
                  <q-item-section avatar>
                    <q-icon size="40px" :name="`img:${option.icon}`" />
                  </q-item-section>
                  <q-item-section class="text-grey-1">{{ option.label }}</q-item-section>
                  <q-item-section side>
                    <q-icon name="chevron_right" class="text-weight-light" />
                  </q-item-section>
                </q-item>
              </q-list>
            </div>
          </q-card-section>
        </FlatCard>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'social-media-drive',
  computed: {
    ...mapGetters('rules', [
      'socialOptions',
    ]),
  },
};
</script>
