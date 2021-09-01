<template>
  <h1 class="display-1 text-center mb-3">
    Merc-Notes
  </h1>

  <div class="container">
    <note-card
      v-for="(c, idx) in notes"
      :key="c._id"
      :body="c.note"
      :date="c.date"
      :id="c._id"
      @delete-note="deleteNote(c._id, idx)"
    />

    <note-form @create-note="createNote" />
  </div>
</template>

<script>
import NoteCard from './components/NoteCard.vue'
import NoteForm from './components/NoteForm.vue'
import axios from 'axios'
export default {
  components: { NoteCard, NoteForm },
  name: 'App',
  data() {
    return {
      notes: [],
    }
  },
  async mounted() {
    this.refreshNotes()
  },
  methods: {
    async refreshNotes() {
      const { data } = await axios.get('notes')
      this.notes = data.reverse()
    },
    async createNote(note) {
      const newNote = {
        note,
      }
      const { data } = await axios.post('/notes', newNote)
      this.notes.unshift(data)
    },

    async deleteNote(id, idx) {
      console.log(idx)
      const { data } = await axios.delete(`/notes/${id}`)
      this.notes.splice(idx, 1)
    },
  },
}
</script>

<style>
body {
  background-color: #dfdfdf;
}
</style>
