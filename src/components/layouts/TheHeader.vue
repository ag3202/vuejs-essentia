<template>
  <div class="navbar navbar-default topnav">
    <div class="container">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle" @click="toggleNav">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>

        <!-- 为 -->
        <router-link to="/" class="navbar-brand">
          <span class="title">{{ logo.title }}</span>
          <img :src="logo.src" :alt="logo.title">
        </router-link>
      </div>

      <div id="top-navbar-collapse" :class="['collapse', 'navbar-collapse', { in: showCollapsedNav }]">
        <ul class="nav navbar-nav">
          <li v-for="(item, index) in navList" :class="{ active: index === activeNavIndex }">
            <router-link :to='item.url' @click="changeNavIndex(index)">{{ item.name }}</router-link>
          </li>
        </ul>
        <!-- 入口组件 -->
        <div class="navbar-right">
          <TheEntry/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    // 引入 TheEntry.vue 的默认值
    import TheEntry from '@/components/layouts/TheEntry'
    export default {
        name: 'TheHeader',
        // 添加 components 选项，并注册 TheEntry
        components: {
            TheEntry
        },
        data() {
            return {
                logo: {
                    src: `${this.uploadsUrl}sites/ByvFbNlQYVwhvTyBgLdqitchoacDNznN.jpg`,
                    title: 'VuejsCaff'
                },
                navList: [{'name':'社区',"url":'/'}, {"name":'头条',"url":'/'}, {"name":'问答','url':'/'}, {"name":'教程','url':'/'},{"name":'测试','url':'/test'}],
                activeNavIndex: 0,
                showCollapsedNav: false
            }
        },
        beforeCreate() {
            this.uploadsUrl = 'https://vuejscaffcdn.phphub.org/uploads/'
        },
        methods: {
            changeNavIndex(index) {
                this.activeNavIndex = index
            },
            toggleNav() {
                this.showCollapsedNav = !this.showCollapsedNav
            }
        }
    }
</script>

<style scoped>
  .title { display: none;}
  .navbar-default .navbar-nav > .active > a { background: rgba(0,0,0,.03);}
</style>