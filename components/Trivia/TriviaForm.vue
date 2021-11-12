<template>
  <div class="trivia-form">
    <p class="q-mb-xl trivia-form__secondary-text">Set up your trivia questions and answers</p>
    <FlatCard :bordered="true" class="q-pa-xl app-rounded--8">
      <q-card-section class="q-mb-sm row q-col-gutter-lg">
        <div class="col-6">
          <label class="trivia-form__label-name">Trivia Name</label>
          <q-input placeholder="Enter name of your trivia campaign" outlined class="trivia-form__light-placeholder-input q-mt-sm"></q-input>
        </div>
        <div class="col-6">
          <label class="trivia-form__label-name">Trivia Image</label>
          <q-file outlined class="q-mt-sm" ref="upload">
            <template v-slot:prepend>
              <div class="trivia-form__upload-input" @click="uploadOnClick">
                <p class="q-mb-none q-mr-sm trivia-form__upload-text">Click to upload</p>
                <q-icon name="img:static/upload.png" class="q-mr-sm" style="color: #A1A3A3;" size="1rem" />
              </div>
            </template>
          </q-file>
        </div>
      </q-card-section>
      <div v-for="(question, index) in questions" :key="index" class="trivia-form__question-container">
        <q-card-section>
          <div>
            <div class="row justify-between" style="cursor: pointer;">
              <label class="q-mb-sm trivia-form__label-name">Question {{ index + 1 }}</label>
              <div class="trivia-form__upload-question-text" v-if="!question.canBeDeleted">
                <q-icon name="img:static/upload-blue.svg" size=".7rem" />
                <span class="text-primary">Upload Question</span>
              </div>
              <span v-else class="trivia-form__delete-text" @click="handleDeletionOfAdditionalQuestion(index)">Delete</span>
            </div>
            <q-input v-model="question.question" placeholder="Enter question" type="textarea" outlined class="trivia-form__light-placeholder-input trivia-form__text-area"></q-input>
          </div>
        </q-card-section>
        <q-card-section class="q-mb-sm">
          <label class="trivia-form__label-name">Options</label>
          <div class="row q-col-gutter-lg">
            <div class="col-6">
              <q-input v-model="question.option1" placeholder="Enter option 1" outlined class="trivia-form__light-placeholder-input q-mt-sm"></q-input>
            </div>
            <div class="col-6">
              <q-input v-model="question.option2" placeholder="Enter option 2" outlined class="trivia-form__light-placeholder-input q-mt-sm"></q-input>
            </div>
            <div class="col-6">
              <q-input v-model="question.option3" placeholder="Enter option 3" outlined class="trivia-form__light-placeholder-input q-mt-sm"></q-input>
            </div>
            <div class="col-6">
              <q-input v-model="question.option4" placeholder="Enter option 4" outlined class="trivia-form__light-placeholder-input q-mt-sm"></q-input>
            </div>
          </div>
        </q-card-section>
        <q-card-section class="row q-col-gutter-lg">
          <div class="col-6">
            <label class="trivia-form__label-name">Answer</label>
            <q-select :value="question.answer" label="Select answer" outlined class="trivia-form__light-placeholder-input q-mt-sm"/>
          </div>
          <div class="col-6">
          </div>
        </q-card-section>
      </div>
      <q-card-section class="row q-col-gutter-lg">
          <div class="col-6">
            <label>Start Time</label>
            <q-select :value="startTime" label="0:00" outlined class="q-mt-sm"/>
          </div>
          <div class="col-6">
            <label>End Time</label>
            <q-select :value="endTime" label="0:00" outlined class="q-mt-sm"/>
          </div>
      </q-card-section>
    </FlatCard>
  </div>
</template>

<script>

export default {
  name: 'Customization-board',
  props: {
    questions: {
      type: Array,
      required: true,
    },
    startTime: {
      type: String,
      default: '',
    },
    endTime: {
      type: String,
      default: '',
    },
  },
  methods: {
    uploadOnClick() {
      this.$refs.upload.$el.click();
    },
    handleDeletionOfAdditionalQuestion(indexOfQuestionToBeDeleted) {
      this.$emit('delete-question', indexOfQuestionToBeDeleted);
    },
  },
};
</script>

<style lang="scss" scoped>
  .trivia-form {
    width: 90%;
    margin: 0 auto;
    &__secondary-text {
      color: $grey-6;
      font-size: 1.25rem;
      font-family: 'Product Sans Light';
    }
    &__logo {
      font-size: 1.25rem;
      text-align: center;
      line-height: 1rem;
    }
    &__upload-text {
      color: $grey-6;
      font-style: italic;
      font-family: 'Product Sans Light';
    }
    &__light-placeholder-input {
      ::v-deep .q-placeholder {
        color: $grey-1;
      }
    }
    &__upload-input {
      font-size: 1rem;
      display: flex;
      align-items: center;
      cursor: pointer;
    }
    &__upload-question-text {
      text-decoration: underline;
      color: $primary;
    }
    &__delete-text {
      color: $negative;
      font-weight: 500;
    }
  }
  .start-customization {
    &__btn {
      border-radius: 1.9rem;
      display: block;
      margin-right: auto;
      margin-left: auto;
      width: 100%;
      height: 3.3rem
    }
  }
  ::v-deep .q-field__control {
    background: $light-purple-2;
  }
</style>
