<template>
    <div>
    <label for="fname">First name:</label><br>
  <input type="text" id="name"  v-model='name' ><br>
  <label for="lname">Last name:</label><br>
  <input type="text" id="email"  v-model='email' ><br><br>
    <label for="lname">Description:</label><br>
  <input type="text" id="description"  v-model='description' ><br><br>
  <input type="submit" @click="sub" value="Submit">
    <table class="table table-hover">
    <thead>
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Description</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="getuserdata in getuserdatas" v-bind:key='getuserdata.id'>
        <td>{{getuserdata.name}}</td>
        <td>{{getuserdata.email}}</td>
        <td>{{getuserdata.description}}</td>
        <td>
         <button @click="edituserdata(getuserdata)" class='btn btn-warning'>Edit</button>
        <button @click="deletedata(getuserdata.id)" class='btn btn-danger'>Delete</button>
        </td>
      </tr>
    </tbody>
  </table>
  
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
      user_id:'',
pagination:{},
edit:false
      }

  },
   created (){
            this.getdata();
        },
  methods: {
          sub: function(){
               if(this.edit == false){
      axios.post('/api/application', {
  name: this.name,
  email: this.email,
  description: this.description
})
.then((response) => {
  this.getdata();
}, (error) => {
  console.log(error);
});
               }else{
                     axios.patch('/api/application/'+this.user_id, {
  name: this.name,
  email: this.email,
  description: this.description
})
.then((response) => {
   this.getdata();
}, (error) => {
  console.log(error);
});
               }
      },
      getdata:function(){
          axios.get('/api/application')
         .then((response) => {
      this.getuserdatas = response.data;
  });
      },
      
      deletedata:function(id){
           if(confirm('Are You Sure To Do This?')){
      axios.delete('/api/application/'+ id)
      .then((res) => {
            this.getdata();
      });
           }
      },
         edituserdata(userdata){
            this.edit = true;
            this.id = userdata.id;
            this.user_id = userdata.id;
            this.name = userdata.name;
            this.email = userdata.email;
            this.description = userdata.description;

        }
      }
  }

</script>