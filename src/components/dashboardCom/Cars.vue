<script setup>
import { useRouter } from "vue-router";
const router = useRouter();
const navDashboard = () => {
  router.push(`/dashboard`);
};

// Vue.use(VueAxios.axios);
</script>

<template>
  <div>
    <button @click="navDashboard">Back</button>

    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium labore
      ut quam dolorem, repellendus consequatur sint! Doloribus ducimus id
      molestiae suscipit aliquid pariatur sunt. Facilis beatae temporibus
      inventore a totam.
    </p>

    <button>Fetch Data</button>
  </div>
</template>

<script>
import axios from "axios";
// import res from "express/lib/response";

//('https://dummy.restapiexample.com/api/v1/employees')
export default {
  name: "Employee",
  mounted() {
    const requestDelay = 1000;
    const apiUrl = "https://dummy.restapiexample.com/api/v1/employees";
    // axios
    //   .get(apiUrl)
    //   .then((resp) => {
    //     console.log(resp);
    //   })
    //   .catch((error) => {
    //     console.error("Error fetching data:", error);
    //   });

    axios
      .post("https://jsonplaceholder.typicode.com/posts", {
        userId: 100,
        id: 5452,
        title: "qui est esse",
        body: "estor b",
      })
      .then((resp) => {
        console.log("data send", resp);
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .delete("https://jsonplaceholder.typicode.com/posts/1", {
      //  userId:1,
      //  id:1
      })
      .then((resp) => {
        console.log( "delted",resp);
      });

    axios
      .put("https://jsonplaceholder.typicode.com/posts/1", {
        title: "updated",
      })
      .then((resp) => {
        console.log( "updated",resp);
      })
      .catch((err) => {
        console.log("update err",err);
      });
  },
};
</script>
