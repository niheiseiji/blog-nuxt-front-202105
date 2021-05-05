<template>
  <div>
    <h1 class="red--text">hello world👋</h1>

    <div class="black--text">
      <ul>
        <li v-for="(post, index) in posts.data" :key="index">
          <nuxt-link :to="{ name: 'articles-id', params: { id: post.id } }">{{
            post.post_title
          }}</nuxt-link>
        </li>
      </ul>
    </div>

    <NuxtLink to="/about">About Page</NuxtLink>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    const url =
      'http://blog-prod-elb-1466614929.us-west-2.elb.amazonaws.com/api/articles'

    const response = await $axios.$get(url)

    return {
      posts: response,
    }
  },
}
</script>
