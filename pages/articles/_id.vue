<template>
  <div>
    <h1 class="red--text">{{ post.data.post_title }}</h1>
    <div class="black--text" v-html="$md.render(post.data.post_content)"></div>
    <NuxtLink to="/">back Home</NuxtLink>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  async asyncData(context) {
    const response = await axios.get(
      'http://blog-prod-elb-1466614929.us-west-2.elb.amazonaws.com/api/articles/' +
        context.params.id
    )
    return { post: response.data, title: response.data.data.post_title }
  },
  head() {
    return {
      title: this.title,
    }
  },
}
</script>
