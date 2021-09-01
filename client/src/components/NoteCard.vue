<template>
  <div class="card border-info mb-4">
    <div class="card-header">
      <div class="d-flex justify-content-between">
        {{ date }}

        <i
          v-if="!deleteConfirm"
          @click="deleteConfirmToggle"
          class="fas fa-times"
        ></i>
        <div v-else>
          <button class="btn btn-primary me-1" @click="deleteNote">
            Confirm
          </button>
          <button class="btn btn-secondary" @click="deleteConfirmToggle">
            Cancel
          </button>
        </div>
      </div>
    </div>
    <div class="card-body">
      <p>{{ body }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      deleteConfirm: false,
    }
  },
  props: {
    body: String,
    date: String,
    id: String,
  },
  emits: ['delete-note'],
  methods: {
    deleteNote() {
      this.$emit('delete-note')
    },
    deleteConfirmToggle() {
      this.deleteConfirm = !this.deleteConfirm
    },
  },
}
</script>

<style scoped>
i {
  font-size: 30px;
  color: #c93737;
}

i:hover {
  cursor: pointer;
}
</style>
