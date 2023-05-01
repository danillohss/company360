<template>
  <div>
    <h5>{{ dados.id }} - {{ dados.nome }}</h5>
    <div class="mb-3 row">
      <label class="col-sm-2 col-form-label">ID</label>
      <div class="col-sm-10">
        <input
          type="text"
          readonly
          class="form-control-plaintext"
          :value="dados.id"
        />
      </div>
    </div>

    <div class="mb-3 row">
      <label class="col-sm-2 col-form-label">Nome</label>
      <div class="col-sm-10">
        <input type="text" class="form-control" :value="dados.nome" />
      </div>
    </div>

    <div class="mb-3 row">
      <label class="col-sm-2 col-form-label">Telefone</label>
      <div class="col-sm-10">
        <input type="text" class="form-control" :value="dados.telefone" />
      </div>
    </div>

    <div class="col-auto">
      <router-link class="btn btn-secondary" :to="{ name: 'vendasPadrao' }"
        >Voltar</router-link
      >
      <button type="button" style="margin: 0 15px" class="btn btn-primary">
        Atualizar
      </button>
    </div>
  </div>
</template>

<script>
import ApiMixin from "@/mixins/ApiMixin";
export default {
  name: "LEAD",
  mixins: [ApiMixin],
  created() {
    this.getApiData(`/leads/${this.$route.params.id}`);
  },
};
</script>