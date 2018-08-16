<template>
    <div class="signUpForm">
        <br/><br/>
        <div class="shadow p-3 mb-5 bg-white rounded w-50 ">
            <br/><br/>
            <div class="form_container">
                <h3 class="text-lg-left font-weight-bold">Finish Registration</h3>
                <br/><br/>
                <div class="container-form">
                    <div class="left">
                        <b-form-group class="group">
                        <input type="text" required>
                        <span class="highlight"></span>
                        <span class="bar"></span>
                        <label>Name</label>
                    </b-form-group>
                    <b-form-group class="group">
                        <input type="text" required>
                        <span class="highlight"></span>
                        <span class="bar"></span>
                        <label>First Name</label>
                    </b-form-group>
                     <b-form-group class="group">
                        <input type="text" required>
                        <span class="highlight"></span>
                        <span class="bar"></span>
                        <label>Mobile Phone Number</label>
                    </b-form-group>
                    </div>
                    <div class="right">
                    <b-form-group  class="group">
                        <input type="text" required>
                        <span class="highlight"></span>
                        <span class="bar"></span>
                        <label>Password</label>
                    </b-form-group>
                     <b-form-group class="group">
                        <input type="text" required>
                        <span class="highlight"></span>
                        <span class="bar"></span>
                        <label>Last Name</label>
                    </b-form-group>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "SignUpForm",
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
.container-form{
    display: flex;
}
    p {
        text-align: left;
        margin-top: 25px;
        font-size: 15px;
    }
    .left{
        float: left;
        width: 53%;
    }
    .right{
        float: right;
        margin-right: 50px !important;
            }
    .group {
        position: relative;
        margin-bottom: 45px;
    }
    
    input {
        font-size: 18px;
        padding: 10px 10px 10px 5px;
        display: block;
        width: 240px;
        border: none;
        border-bottom: 1px solid #757575;
    }
    
    input:focus {
        outline: none;
    }
    
    
    /* LABEL ======================================= */
    
    label {
        color: #999;
        font-size: 18px;
        font-weight: normal;
        position: absolute;
        pointer-events: none;
        left: 5px;
        top: 10px;
        transition: 0.2s ease all;
    }
    
    
    /* active state */
    
    input:focus~label,
    input:valid~label {
        top: -20px;
        font-size: 14px;
        color: #00ccb7;
    }
    
    
    /* BOTTOM BARS ================================= */
    
    .bar {
        position: relative;
        display: block;
        width: 300px;
    }
    
    .bar:before,
    .bar:after {
        content: "";
        height: 2px;
        width: 0;
        bottom: 1px;
        position: absolute;
        background: #00ccb7;
        transition: 0.2s ease all;
    }
    
    .bar:before {
        left: 50%;
    }
    
    .bar:after {
        right: 50%;
    }
</style>
