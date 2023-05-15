<template>
  <div class="card">
    <div class="card-header bg-primary text-white">{{ dados.servico }}</div>
    <div class="card-body">
      <p class="card-text">{{ dados.descricao }}</p>
    </div>
  </div>
</template>

<script>
import ApiMixin from "@/mixins/ApiMixin";
export default {
  name: "SERVICE",
  mixins: [ApiMixin],
  props: ["id"],
  created() {
    console.log(this.$props);
    this.getApiData(`servicos/${this.id}`);
  },
  //Guardião de rota beforeRouteUpdate, reage a alteração na rota, podendo fazer tratativas
  beforeRouteUpdate(to) {
    if (to.params.id != undefined) {
      this.getApiData(`/servicos/${to.params.id}`);
    }
  },
};
</script>