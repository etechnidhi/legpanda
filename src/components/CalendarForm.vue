<template>
    <div id="CalendarForm">
        <div class="shadow p-3 mb-5 bg-white rounded w-50" id="shadowDiv">
            <div class="container my-5">
                <div class="form_container">
                    <div class="notification">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                    </div>
                    <v-select class="text-lg-left font-weight-bold" :items="months"></v-select>
                    <ul class="list-group list-group-flush text-left" id="calenderList" v-for="(key,index) in dates" :key="index">
                        <div class="content">
                            <div class="leftContent">
                                <div class="leftContentLeft">
                                    <h5>{{key}}
                                        <div style="width: 10%;">Mo</div>
                                    </h5>
                                </div>
    
                                <h5 style="margin-left: 20px;">Available</h5>
                            </div>
                            <div class="rightContent">
                                <h3 class="plusFloat">+</h3>
                            </div>
                        </div>
                    </ul>
                    <b-button type="submit" class="button w-100 border-0 border-dark" id="buttonId">Save</b-button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "CalendarForm",
  data: () => ({
    months: [
      "January","Febraury","March","April","May","June","Jully","August","September","October","November","December"
    ],
    dates: [
      "1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18",
      "19","20","21","21","22","23","24","25","26","27","28"
    ]
  })
};
</script>

<style>
.notification {
  background-color: #00ccb7;
  color: white;
  padding: 10px;
  text-align: left;
  border-radius: 4px;
  margin-bottom: 25px;
  padding-left: 25px !important;
  font-size: 15px;
  padding-right: 15px !important;
}

#calenderList {
  margin-top: 40px !important;
}

.v-menu > .v-menu__content {
  top: 30px !important;
  left: 0px !important;
  background: white;
}

.leftContent {
  width: 50%;
  display: flex;
}

.rightContent {
  width: 50%;
  text-align: right;
  margin-right: 20px;
}

.content {
  display: flex;
  border-bottom: 1px solid grey;
}
</style>
