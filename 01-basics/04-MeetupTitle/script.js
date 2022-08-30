import { createApp } from './vendor/vue.esm-browser.js'

const API_URL = 'https://course-vue.javascript.ru/api'

function fetchMeetupById(meetupId) {
  return fetch(`${API_URL}/meetups/${meetupId}`).then((response) => {
    if (response.ok) {
      return response.json()
    } else {
      return response.json().then((error) => {
        throw error
      })
    }
  })
}

// Требуется создать Vue приложение
createApp({
  data() {
    return {
      meetup: null,
      meetupId: 1,
    }
  },
  created() {
    fetchMeetupById(this.meetupId).then((meetup) => {
      this.meetup = meetup
    })
  },
  watch: {
    meetupId(id) {
      fetchMeetupById(id).then((meetup) => {
        this.meetup = meetup
      })
    },
  },
}).mount('#app')
