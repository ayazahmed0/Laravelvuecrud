<template>
    <div>
  <label for="fname">First name:</label><br>
  <input type="text" id="name"  v-model='name' ><br>
  <label for="lname">Last name:</label><br>
  <input type="text" id="email"  v-model='email' ><br><br>
    <label for="lname">Description:</label><br>
  <input type="text" id="description"  v-model='description' ><br><br>
  <input type="submit" @click="sub" value="Submit">
   
    </div>
   
</template>
<script>

export default {
  data(){
    return{
    getuserdatas:[],
      name: "",
      email: "",
      description: "",
      }
  },
    methods: {
       sub: function(){
      axios.post('/api/application', {
  name: this.name,
  email: this.email,
  description: this.description
})
.then((response) => {
  console.log(response);
}, (error) => {
  console.log(error);
});
      }
    },
}
</script>