<template>
<div id="topnav">
    <v-toolbar id="toolbar"  >
      <v-app-bar-nav-icon color="black darken-2" @click.stop="drawer = !drawer" 
      v-if="$route.name =='dashboard' || $route.name =='account' "></v-app-bar-nav-icon>
      <v-toolbar-title>
        <v-img 
          @click="redirect('/')"
          id="logo"
          :src="require('@/assets/images/MyLogo.png')"
          class="my-3"
          contain
          height="45">
        </v-img>
      </v-toolbar-title>
      <v-spacer></v-spacer>
       <v-navigation-drawer
          v-model="drawer"
          absolute
          top
          temporary
          height="1000000"
          left
        >
        <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="light-blue--text text--accent-4"
        >
        <v-list-item v-for="(item, index) in items" 
            :key="index" 
            :to="item.link"
            >
            
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        
        </v-list-item-group>

      </v-list>
      </v-navigation-drawer>
      <v-toolbar-items >
        <v-btn text medium id="items" @click="redirect('/login')" v-if="$route.name != 'dashboard'">Login</v-btn>
        <v-divider
          class="mx-4"
          inset
          vertical>
        </v-divider>
        <v-btn text medium id="items" @click="redirect('/about')" v-if="$route.name != 'dashboard' ">About us</v-btn>
      </v-toolbar-items>
      
    </v-toolbar>
    
  </div>
</template>

<style scoped lang="scss">

@import "assets/styles/colors.scss";
#toolbar{
  background-color: transparent !important;
}
#logo{
  margin-left: -30% !important;
  cursor: pointer !important;
}

</style>

<script>

import ROUTER from "router";
import AUTH from "services/auth";

export default {
  name: "headernav",
  data(){
    return{
      auth: AUTH,
      drawer: false,
      group: null,
      items: [
        { icon: "mdi-view-dashboard", title: "Dashboard", link: "/dashboard" },
        { icon: "mdi-account", title: "Account", link: "/account" },
        { icon: "mdi-mouse", title: "Logout", link: "/" },
      ]
    }
  },

  watch: {
    group() {
      this.drawer = false;
    }
  },
  methods: {
      redirect(route){
          ROUTER.push(route)  
      }
  }
}
</script>