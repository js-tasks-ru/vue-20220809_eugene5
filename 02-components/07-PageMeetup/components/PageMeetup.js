import { defineComponent } from '../vendor/vue.esm-browser.js'
import UiContainer from './UiContainer.js'
import UiAlert from './UiAlert.js'
import { fetchMeetupById } from '../meetupService.js'
import MeetupView from '../../06-MeetupView/components/MeetupView'

export default defineComponent({
  name: 'PageMeetup',

  components: {
    UiAlert,
    UiContainer,
    MeetupView,
  },

  props: {
    meetupId: {
      type: Number,
      required: true,
    },
  },

  data() {
    return {
      meetup: null,
      loading: true,
      error: false,
    }
  },

  watch: {
    meetupId: {
      handler(id) {
        this.loading = true
        this.error = false
        this.meetup = null

        fetchMeetupById(id)
          .then((meetup) => {
            this.meetup = meetup
            this.loading = false
          })
          .catch((error) => {
            this.loading = false
            this.error = error.message
            this.meetup = null
          })
      },
      immediate: true,
    },
  },

  template: `
    <div class="page-meetup">
      <!-- meetup view -->
      <meetup-view v-if="meetup" :meetup="meetup" />

      <UiContainer v-if="loading">
        <UiAlert>Загрузка...</UiAlert>
      </UiContainer>

      <UiContainer v-if="error">
        <UiAlert>{{ error }}</UiAlert>
      </UiContainer>
    </div>`,
})
