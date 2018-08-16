<template>
    <div id="ForgotPassword">
        <br/><br/>
        <div class="shadow p-3 mb-5 bg-white rounded w-50 ">
            <br/><br/>
            <div class="form_container">
                <b-form v-if="show">
                    <div class="form-group">
                        <input type="text" id="name" class="form-control border border-dark border-top-0 border-right-0 border-left-0 rounded-0" required>
                        <label class="form-control-placeholder text-sm-left" label-for="name">Email Address</label>
                    </div>
                    <b-button type="submit" class="button w-100 border-0 border-dark">Password</b-button>
                </b-form>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ForgotPasswordForm",
        data() {
            return {
                form: {
                    email: "",
                    name: ""
                },
                show: true
            };
        }
    };
</script>

<style>
    .shadow {
        margin: 0 auto;
    }
    
    .button {
        background-color: #00ccb7 !important;
        padding-top: 13px !important;
        padding-bottom: 13px !important;
    }
    
    .form_container {
        width: 80%;
        margin: 0 auto;
    }
    
    h3 {
        color: black !important;
    }
    
    .center-link {
        margin-top: 45px !important;
    }
    
    label {
        font-size: 18px;
    }
</style>
