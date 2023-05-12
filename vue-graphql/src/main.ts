import "vue-material/dist/vue-material.min.css"
import "vue-material/dist/theme/default.css"
import { createApp } from "vue"
import { createPinia } from "pinia"
import App from "./App.vue"
import router from "./router"
import VueApollo from 'vue-apollo'
import ApolloClient from 'apollo-boost'

const apolloClient = new ApolloClient({
  // You should use an absolute URL here
  uri: 'https://api.graphcms.com/simple/v1/awesomeTalksClone'
})

const app = createApp(App)
// app.use(VueApollo)
app.use(createPinia())
app.use(router)

app.mount("#app")
