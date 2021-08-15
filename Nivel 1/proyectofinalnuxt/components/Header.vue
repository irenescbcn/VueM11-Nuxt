<template>
  <div>
  <div>
    <nav class="navbar navbar-expand-md text-light">
        <h2 class="navbar-brand">PROYECTO FINAL</h2>
        <button class="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <nuxt-link to="/">Home</nuxt-link>
                </li>
                <li class="nav-item">
                    <nuxt-link to="/users/users">Users</nuxt-link>
                </li>
                <li class="nav-item">
                    <nuxt-link to="/albums/pictures">Pictures</nuxt-link>
                </li>
            </ul>
        </div> 
    </nav>
    </div>
  </div>
</template>

<style>
.navbar{
    background: #111;
    padding: 20px;
}


.navbar-toggler-icon {
        background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(255,255,255, 1)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 8h24M4 16h24M4 24h24'/%3E%3C/svg%3E");
}

.nav-item{
    margin: 0 10px;
}

.nav-item a{
    text-decoration: none;
    color: #eee;
}

.nav-item a:hover{
    border-bottom: 2px solid #eee
}

</style>