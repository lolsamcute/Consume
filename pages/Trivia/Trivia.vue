<template>
  <div class="q-mt-xl q-pb-xl trivia" style="height: 100%">
    <div class="no-trivia__intro-container row justify-between q-mb-xl">
      <h1 class="no-trivia__intro-text">{{ message }}</h1>
      <div class="row">
        <AppBtn @clicked="addAnotherQuestion" color="indigo-1" text-color="primary" label="Add Question" class="no-trivia__btn"></AppBtn>
        <AppBtn @clicked="save" label="Save" class="no-trivia__btn no-trivia__btn--save "></AppBtn>
      </div>
    </div>
    <div v-if="!hasStartedTrivia" style="height: 100vh;">
      <div class="text-center q-mb-xl">
        <q-icon name="img:static/no-entity.png" class="no-trivia__logo"/>
      </div>
      <div class="text-center q-mb-xl">
        <h1 class="no-trivia__intro-text">You haven't created any trivia campaign</h1>
        <p class="no-trivia__secondary-text">Start creating your trivia campaign</p>
      </div>
      <AppBtn
        @clicked="handleStartOfTrivia"
        color="primary"
        label="Create Trivia"
        class="no-trivia__create-trivia-btn q-pl-lg q-pr-lg"
      >
      </AppBtn>
    </div>
    <div v-else>
      <TriviaForm
        :questions="questions"
        @delete-question="deleteQuestion"
      />
    </div>
    <AppDialog class="q-pa-xl" :isActive="dialogActive" @close="dialogActive = false" :message="dialogMessage" />
  </div>
</template>

<script>
import TriviaForm from '../../components/Trivia/TriviaForm.vue';

export default {
  name: 'page-intro-head',
  components: {
    TriviaForm,
  },
  data() {
    return {
      hasStartedTrivia: false,
      message: 'Trivia',
      dialogActive: false,
      dialogMessage: '',
      questions: [
        {
          question: '',
          option1: '',
          option2: '',
          option3: '',
          option4: '',
          answer: '',
          canBeDeleted: false,
        },
      ],
    };
  },
  methods: {
    handleStartOfTrivia() {
      this.hasStartedTrivia = true;
    },
    addAnotherQuestion() {
      this.questions.push({
        question: '',
        option1: '',
        option2: '',
        option3: '',
        option4: '',
        answer: '',
        canBeDeleted: true,
      });
    },
    deleteQuestion(indexOfQuestionToBeDeleted) {
      this.questions.splice(indexOfQuestionToBeDeleted, 1);
    },
    save() {
      this.dialogActive = true;
      this.dialogMessage = 'Trivia saved!';
    },
  },
};
</script>

<style lang="scss" scoped>
  .no-trivia {
     &__intro-container {
      width: 90%;
      margin-left: auto;
      margin-right: auto;
    }
    &__intro-text {
      font-size: 1.8rem;
      font-weight: bold;
      line-height: 1.2rem;
    }
    &__btn {
      width: 10rem;
      height: 3rem;
      display: block;
      &--save {
        margin-left: 1rem;
      }
    }
    &__logo {
      width: 7.5rem;
      height: 7.5rem;
    }
    &__secondary-text {
      color: $grey-1;
      font-size: 1.25rem;
      font-family: 'Product Sans Light';
    }
    &__create-trivia-btn {
      display: block;
      margin: 0 auto;
      font-weight: 400;
    }
  }
</style>
