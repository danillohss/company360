<template>
  <div>
    <nav class="navbar navbar-light bg-light menu-superior">
      <div class="container">
        <a class="navbar-brand" href="#">Empresa 360</a>
        <div class="navbar-nav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" href="/inicio">Voltar</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <div class="row mt-5">
      <div class="col-6 offset-3">
        <div class="card">
          <p class="card-header">Entrar</p>
          <div class="card-body">
            <div class="mb-3">
              <input type="email" class="form-control" placeholder="E-mail" />
            </div>
            <div class="mb-3">
              <input type="password" class="form-control" placeholder="Senha" />
            </div>
            <button class="btn btn-primary" @click="irPara()">Login</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line
  name: "Login",
  methods: {
    irPara() {
      //console.log(this.$router);
      this.$router.push('/home')
      //this.$router.forward() a função forward() permite avançar no histórico de navegação
      //this.$router.back() a função back() permite retornar no histórico de navegação
    },
  },
};
</script>