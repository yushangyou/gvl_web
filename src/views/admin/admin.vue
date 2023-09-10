<!--
 * @Author: yushangyou
 * @Date: 2023-09-09 16:52:50
 * @LastEditTime: 2023-09-09 18:23:24
 * @email: yushangyou2020@163.com
 * @Description: 
-->
<template>

   <div class="gvl_admin">
      <aside>
         <div class="gvl_logo">
            LOGO
         </div>
         <div class="gvl_menu">

         </div>
      </aside>
      <div class="gvl_main">
         <header>
            <div class="left">

            </div>
            <div class="right">

            </div>
         </header>
         <div class="gvl_tabs">

         </div>
         <main>
            <RouterView/>
         </main>
      </div>
   </div>



</template>

<script setup lang="ts">

</script>

<style lang="scss">

.gvl_admin{
   display: flex;
   aside{
      background-color: var(--color-bg-1);
      width: 240px;
      border-right: 1px solid var(--bg);
      .gvl_logo{
         width: 100%;
       height: 90px;
       display: flex;
       justify-content: center;
       align-items: center;
       background-color: rgb(var(--arcoblue-2));
      }
      .gvl_menu{

      }
   }
   .gvl_main{
      overflow: auto;
      width: calc(100vw - 240px);
     > header{
      height: 60px;
      background-color: var(--color-bg-1);
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 20px;

     }
      >.gvl_tabs{
         height: 30px;
      background-color: var(--color-bg-1);
      padding: 0 20px;
      border-top: 1px solid var(--bg);

      }
     > main{
      height: calc(100vh - 90px);
      background-color: var(--bg);
      padding: 20px;
     }
   }
}
</style>