import { defineStore } from "pinia";
import axios from "axios";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    token: null,
    user: null,
  }),
  getters: {
    isAuthenticated: (state) => !!state.token,
  },
  actions: {
    async login(email, password) {
      console.log(" auth", email, password);
      try {
        const response = await axios.post("http://localhost:3000/auth/signin", {
          email,
          password,
        });
        console.log("response",response);
        this.token = response.data.token;
        this.user = response.data.user;
        console.log(response.data.token);
        return true;
      } catch (error) {
        console.error("Login failed:", error);
        return false;
      }
    },
    // async logout() {
    //   this.token = null;
    //   this.user = null;
    // },
    async fetchUser() {
      try {
        const response = await axios.get("localhost:8000/api/user", {
          headers: {
            Authorization: `Bearer ${this.token}`,
          },
        });
        this.user = response.data;
      } catch (error) {
        console.error("Error fetching user:", error);
        this.token = null;
        this.user = null;
      }
    },
  },
});
