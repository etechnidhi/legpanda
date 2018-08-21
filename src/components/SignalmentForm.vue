<template>
    <div id="signalmentForm">
        <div class="shadow p-3 mb-5 bg-white rounded w-50" id="shadowDiv">
            <div class="container my-5">
                <div class="form_container">
                    <h3 class="text-lg-left font-weight-bold">Signalment</h3>
                    <div class="signalmentContainer">
                        <v-select label="Facilities"></v-select>
                        <v-select label="Additional Qualifications"></v-select>
                        <b-row>
                            <b-col>
                                <v-text-field v-model="name" label="Location" required></v-text-field>
                            </b-col>
                            <b-col>
                                <v-text-field v-model="name" label="Distnace of work" required></v-text-field>
                            </b-col>
                        </b-row>
                        <v-select label="Working Shifts"></v-select>
                        <v-select label="Remission of Pension Charges"></v-select>
                        <ul class="list-group list-group-flush text-left" id="ulListSignalment">
                            <li class="list-group-item">
                                <h6>Driving License</h6>
                                <div class="toggleRight">
                                    <v-switch v-model="tile"></v-switch>
                                </div>
                            </li>
                            <li class="list-group-item" @click="aboutMe">
                                <h6>Own car</h6>
                                <div class="toggleRight">
                                    <v-switch v-model="tile"></v-switch>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <b-button type="submit" class="button w-100 border-0 border-dark" id="buttonId">Save</b-button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "SignalmentForm"
};
</script>

<style>
.signalmentContainer {
  margin: 0 auto;
  margin-top: 50px;
}

h2 {
  margin-left: 0px !important;
}

.toggleRight {
  width: 20%;
  float: right;
  margin-top: -40px;
}

#ulListSignalment {
  margin-top: 15px !important;
}
</style>
