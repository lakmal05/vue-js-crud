<script setup>
import { useRouter } from "vue-router";

const router = useRouter();
const login = () => {
  router.push(`/dashboard`);
};
</script>

<template>
  <div class="container py-5 h-100" @submit.prevent="handleSubmit">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col col-xl-10">
        <div
          class="card"
          style="border-radius: 2rem; box-shadow: 0 0px 3px rgb(41, 39, 39)"
        >
          <div class="row g-0">
            <div
              class="col-md-6 col-lg-7 d-flex align-items-center"
              style="width: 100%"
            >
              <div class="card-body p-4 p-lg-5 text-black">
                <form>
                  <div class="d-flex align-items-center mb-3 pb-1">
                    <i
                      class="fas fa-cubes fa-2x me-3"
                      style="color: #ff6219"
                    ></i>
                    <span class="h1 fw-bold mb-0" @click="login">LOGIN </span>
                  </div>

                  <h5 class="fw-normal mb-3 pb-3" style="letter-spacing: 1px">
                    Sign into your account
                  </h5>

                  <!-- E-MAIL -->
                  <div class="form-outline mb-6">
                    <input
                      type="email"
                      id="form2Example17"
                      class="form-control form-control-lg"
                      v-model="email"
                    />
                    <label class="form-label" for="form2Example17"
                      >Email address</label
                    >
                  </div>

                  <!-- PASSWORAD -->
                  <div class="form-outline mb-4">
                    <input
                      type="password"
                      id="form2Example27"
                      class="form-control form-control-lg"
                      v-model="password"
                    />
                    <label class="form-label" for="form2Example27"
                      >Password</label
                    >
                  </div>
                  <!-- LOGIN BUTTON -->
                  <div class="pt-1 mb-7">
                    <button
                      id="btnLogin"
                      class="btn btn-dark btn-lg btn-block"
                      type="button"
                      @click.prevent="login"
                    >
                      <!-- @click="navDashboard"  -->
                      Login
                    </button>
                  </div>

                  <!-- <a class="small text-muted" href="#!">Forgot password?</a> -->
                  <p
                    class="mb-5 pb-lg-2"
                    style="color: #393f81 margin: top 1px;"
                  >
                    Don't have an account?
                    <a href="#!" style="color: #393f81">Register here</a>
                  </p>
                  <a href="#!" class="small text-muted">Terms of use.</a>
                  <a href="#!" class="small text-muted">Privacy policy</a>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { useAuthStore } from "../pinia/auth";
import { useRouter } from "vue-router";
import { onActivated, reactive } from "vue";

export default {
  // setup() {
  //   const state = reactive({
  //     email: "",
  //     password: "",
  //   });
  // },
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    login() {
      // console.log("the email", this.email);
      const authStore = useAuthStore();
      const success = authStore.login(this.email, this.password);

      if (success) {
        const router = useRouter();
        router.push(`/dashboard`);
        console.log("login resived");
      } else {
        console.log("somthing worng");
      }
    },
  },
  beforeCreate() {
    console.log("before created ");
  },
  created() {
    console.log("created");
  },
  beforeUpdate() {
    console.log("before updated");
  },
  updated() {
    console.log("updaated");
  },
  mounted() {
    console.log("page mounted");
  },
  unmounted() {
    console.log("page unmounted");
  },

  //  const abc =computed(()=>{
  //   console.log("called computerd prop");
  //  })

  // onActivated() {
  //   console.log("activated");
  // },
  // onDeactiveated() {
  //   console.log("deactivated");
  // },
};
</script>

<!-- <script>
export default {
  computed: {
    myComputedProperty() {
      return "result";
    },
  },
};
</script> -->
