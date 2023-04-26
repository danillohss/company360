<template>
  <div>
    <nav class="navbar navbar-light bg-light menu-superior">
      <div class="container">
        <a class="navbar-brand" href="#">Empresa 360</a>
        <div class="navbar-nav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link class="nav-link" to="/inicio">Sair</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <div class="d-flex">
      <div class="list-group menu-esquerda">
        <router-link class="list-group-item list-group-item-action" to="/home"
          ><i class="bi bi-speedometer2"></i> Dashboard</router-link
        >

        <div class="dropdown">
          <router-link
            class="list-group-item list-group-item-action dropdown-toggle bi bi-cart"
            to="/home/vendas"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Vendas
          </router-link>

          <ul class="dropdown-menu">
            <li>
              <router-link class="dropdown-item" to="/home/vendas"
                >Vendas</router-link
              >
            </li>
            <li>
              <router-link class="dropdown-item" to="/home/vendas/leads"
                >Leads</router-link
              >
            </li>
            <li>
              <router-link class="dropdown-item" to="/home/vendas/contratos"
                >Contratos</router-link
              >
            </li>
          </ul>
        </div>
        <router-link
          class="list-group-item list-group-item-action"
          to="/home/servicos"
          ><i class="bi bi-bar-chart-line-fill"></i> Serviços</router-link
        >
      </div>

      <div class="w-100">
        <nav aria-label="breadcrumb" class="pt-1 ps-3">
          <ol class="breadcrumb">
            <li class="breadcrumb-item active" aria-current="page">
              Dashboard
            </li>
          </ol>
        </nav>

        <div class="container-fluid">
          <router-view> </router-view>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  // eslint-disable-next-line
  name: "Home",
};
</script>

<style scoped>
.menu-superior {
  border-bottom: solid 1px #ccc;
}

.menu-esquerda {
  border-right: solid 1px #ccc;
  width: 250px;
}

.list-group-item {
  border-top: none;
  border-right: none;
}
</style>