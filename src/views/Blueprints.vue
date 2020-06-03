<template>
  <div>
    <div class="d-flex justify-content-center mt-3">
      <div>
        <b-form-input v-model="nameSearch" placeholder="Search blueprint name..."></b-form-input>
      </div>
      <div class="d-flex ml-4">
        <label for="groupTypeSelect" class="w-50 align-self-center">Select type</label>
        <b-form-select
          v-model="groupType"
          :options="groupTypes"
          id="groupTypeSelect"
        >
        </b-form-select>
      </div>
    </div>
    <div class="d-flex flex-wrap justify-content-center mt-5">
      <Blueprint
        v-for="blueprint in sortedBlueprints"
        :key="blueprint.id"
        :blueprint="blueprint"
      />
    </div>
  </div>
</template>

<script>
  import firebase from 'firebase';
  import Blueprint from "@/components/Blueprint";
  import _ from 'lodash';

  export default {
    name: "Blueprints",
    components: {Blueprint},
    data(){
      return {
        blueprints: [],
        nameSearch: "",
        groupType: "",
        me: 0,
        te: 0,
      }
    },

    computed: {
      sortedBlueprints(){
        return this.blueprints.filter(bp => {
          let filter = true
          if (!_.isEmpty(this.nameSearch)){
            if (!bp.name.toLowerCase().includes(this.nameSearch.toLowerCase())){
              filter = false;
            }
          }
          if (!_.isEmpty(this.groupType)){
            if (bp.group !== this.groupType){
              filter = false
            }
          }
          return filter;
        })
      },

      groupTypes(){
        return _.uniq(_.map(this.blueprints, 'group')).sort()
      },
    },

    mounted(){
      firebase
        .database()
        .ref('/blueprints')
        .on('value', snapshot => {
          const bps = snapshot.val();
          let blueprintsArray = [];
          for (const id in bps){
            let bp = bps[id];
            bp.id = id;
            blueprintsArray.push(bp)
          }
          this.blueprints = blueprintsArray;
        })
    }
  }
</script>

<style scoped>
.search{
  width: 300px;
}
</style>
