<!--<template>
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
</template>

<script>
export default {
  data: () => ({
    drawer: false,
    group: null,
      items: [
        { icon: "mdi-view-dashboard", title: "Dashboard", link: "/dashboard" }
      ]
  })
};
</script>

-->