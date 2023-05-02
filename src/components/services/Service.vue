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
  created() {
    this.getApiData(`servicos/${this.$route.params.id}`);
  },
  beforeRouteUpdate(to) {
    if (to.params.id != undefined) {
      this.getApiData(`/servicos/${to.params.id}`);
    }
  },
};
</script>