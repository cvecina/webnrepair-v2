<script setup>
import LanguageSelector from "@/components/LanguageSelector.vue";
import { DarkMode } from "@/components";
import { ref, computed } from "vue";
import { useI18n } from "vue-i18n";
import { useAuthenticated, useSignOut } from "@nhost/vue";
import { useRouter } from "vue-router";
import Button from "primevue/button";
const { t } = useI18n();
const router = useRouter();

const Home = computed(() => t("menu.home"));

const goToContact = () => {
  router.push("/contact");
};

const isAuthenticated = useAuthenticated();
const { signOut } = useSignOut();

const handleSignOut = async () => {
  signOut();
  router.push("/");
};

const menuItems = ref([
  {
    id: 1,
    title: Home.value,
    // subItems: [
    // {
    //   id: 1,
    //   title: "Sub Item 1",
    //   description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    //   iconClasses: "pi pi-user",
    //   iconBackgroundColor: "bg-blue-600",
    //   new: true,
    // },
    // ],
    featuredItems: [
      // {
      //   id: 1,
      //   title: 'Learn how to use Peak in 10 mins',
      //   description: 'Enim diam vulputate ut pharetra sit. Eget arcu dictum varius duis at consectetur lorem donec.',
      //   image: 'images/blocks/navbar/navbar-1.jpeg'
      // },
      // {
      //   id: 2,
      //   title: 'Reimagining development lifecycles',
      //   description: 'Habitant morbi tristique senectus et netus et malesuada fames. Ut placerat orci nulla pellentesque dignissim.',
      //   image: 'images/blocks/navbar/navbar-2.jpeg'
      // }
    ],
  },
]);
</script>
<template>
  <section
    class="h-full"
    style="background-color: #171717; !important"
  >
    <div
      class="py-3 px-6 shadow-2 flex align-items-center justify-content-between relative"
    >
      <img src="/logo.png" alt="Image" height="50" />
      <a
        v-ripple
        class="p-ripple cursor-pointer block lg:hidden text-gray-400"
        v-styleclass="{
          selector: '@next',
          enterClass: 'hidden',
          leaveToClass: 'hidden',
          hideOnOutsideClick: true,
        }"
      >
        <i class="pi pi-bars text-4xl text-white"></i>
      </a>
      <nav
        class="bg-red align-items-center flex-grow-1 justify-content-between hidden lg:flex absolute lg:static w-full left-0 top-100 px-6 lg:px-0 shadow-2 lg:shadow-none lg:bg-transparent" style="background-color: #171717; !important"
      >
        <ul
          class="list-none p-0 m-0 lg:m-auto flex lg:align-items-center text-gray-400 select-none flex-column lg:flex-row"
        >
          <li v-for="item in menuItems" :key="item.id">
            <a
              v-ripple
              class="p-ripple flex px-0 px-3 xl:px-5 py-3 align-items-center hover:text-blue-600 font-medium transition-colors transition-duration-150 cursor-pointer"
              v-styleclass="{
                selector: '@next',
                enterClass: 'hidden',
                leaveToClass: 'hidden',
                leaveActiveClass: 'fadeout',
                hideOnOutsideClick: true,
              }"
            >
              <span class="font-semibold text-xl" style="color: #b8caff !important;">
              <router-link to="/">{{
                item.title
              }}</router-link></span>
            </a>
            <div
              v-if="item.subItems"
              class="lg:absolute hidden origin-top left-0 top-100 w-full p-4 overflow-y-scroll"
              style="
                background-color: rgba(0, 0, 0, 0.5);
                backdrop-filter: blur(100px);
                min-height: 30rem;
              "
            >
              <div class="flex h-full flex-wrap">
                <div class="flex w-full xl:w-6 flex-wrap p-0 lg:p-5">
                  <div
                    v-for="subItem in item.subItems"
                    :key="subItem.id"
                    class="w-full flex lg:w-6 mb-4 lg:mb-0 p-2"
                  >
                    <div
                      class="p-3 border-round flex justify-content-center align-items-center"
                      :class="subItem.iconBackgroundColor"
                    >
                      <i :class="subItem.iconClasses"></i>
                    </div>
                    <div>
                      <a
                        class="cursor-pointer text-white font-semibold text-lg lg:text-xl mb-2 mt-0 flex align-items-start"
                      >
                        {{ subItem.title }}
                        <span v-if="subItem.new" class="p-badge ml-2">New</span>
                      </a>
                      <p
                        class="text-base lg:text-lg mb-0 mt-0 text-white-alpha-70"
                      >
                        {{ subItem.description }}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
        <div
          class="flex justify-content-between lg:block border-top-1 lg:border-top-none py-3 lg:py-0 mt-3 lg:mt-0"
          style="border-color: rgba(222, 226, 230, 0.15)"
        >
          <Button
            label="Contactar"
            icon="pi pi-chevron-right"
            iconPos="right"
            class="p-button-rounded font-bold"
            @click="goToContact"
            style="background-color: #274bb6 !important; color: #fff; !important"
          ></Button>
        </div>
      </nav>
    </div>
  </section>
</template>
<style>
</style>
<!-- <template #end>
  <div class="flex justify-content-center align-items-center">
    <DarkMode class="m-2"></DarkMode>
    <LanguageSelector></LanguageSelector> 
  </div>
</template> -->