<template>
  <div class="card px-3 py-3">
    <form v-on:submit.prevent="submitForm">
      <div class="mb-3">
        <label for="newNote" class="form-label"><b>New Note</b></label>
        <input
          v-model.trim="note"
          type="text"
          class="form-control"
          id="newNote"
          aria-describedby="newNoteHelper"
        />
        <div id="newNoteHelper" class="form-text">
          Enter a new note here
        </div>
      </div>

      <button class="btn btn-primary">
        Submit
      </button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      note: '',
    }
  },
  emits: ['create-note'],
  methods: {
    submitForm(e) {
      if (this.note !== '') {
        this.$emit('create-note', this.note)
      } else return false

      this.note = ''
    },
  },
}
</script>

<style></style>
