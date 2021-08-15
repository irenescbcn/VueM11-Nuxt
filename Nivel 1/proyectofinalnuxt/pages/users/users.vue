<template>
    <UsersComponent></UsersComponent>
</template>


<style>
.users-enter-from,
.users-leave-to{
  opacity: 0;
}

.users-enter-active,
.users-leave-active{
  transition: opacity 0.4s ease-out;
}
</style>