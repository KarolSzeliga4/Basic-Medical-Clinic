<template>
  <nav>
    <div class="row">
      <div class="col-3"></div>
      <div class="col-9">
        <div class="row justify-content-end">
          <div class="col-auto">
            <router-link to="/Zakresuslug">
              <button>Zakres usług</button>
            </router-link>
          </div>
          <div class="col-auto">
            <router-link to="/Nasilekarze">
              <button>Nasi lekarze</button>
            </router-link>
          </div>
          <div class="col-auto">
            <router-link to="/Cennik">
              <button>Cennik</button>
            </router-link>
          </div>
          <div class="col-auto">
            <router-link to="/Kontakt">
              <button>Kontakt</button>
            </router-link>
          </div>
          <div v-if="userState.accessToken.length" class="col-auto">
            <router-link to="/Bookingi">
              <button>Twoje wizyty</button>
            </router-link>
          </div>
          <div class="col-auto">
            <router-link to="/Zarezerwujwizyte">
              <button>Zarezerwuj wizytę</button>
            </router-link>
          </div>
          <div v-if="!userState.accessToken.length" class="col-auto">
            <router-link to="/Zalogujsie">
              <button>Zaloguj się</button>
            </router-link>
          </div>
          <div v-else class="col-auto">
            <router-link to="/">
              <button v-on:click="logout" >Wyloguj się</button>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
<script setup>
import userState from "../state/userState";

async function logout() {
  try {
    userState.accessToken = 0;
  } catch (error) {
    console.log("Error during logout :(");
  }
}
</script>