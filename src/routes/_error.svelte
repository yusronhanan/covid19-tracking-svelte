<script>
  export let status;
  export let error;
</script>

<svelte:head>
  <title>Error - {status}</title>
</svelte:head>

{#if status === 404}
  <div class="container">
    <article class="message is-warning">
      <div class="message-header">
        <p>Page Not Found</p>
      </div>
      <div class="message-body">
        <a href="/">Click Here</a> to go back home.
      </div>

      <!-- <div class="message-body">
      {...error}
    </div> -->
    </article>
  </div>
{:else}
  <div class="container">
    <article class="message is-warning">
      <div class="message-header">
        <p>Error</p>
      </div>
      <div class="message-body">
        <a href="/">Click Here</a> to go back home.
      </div>

      <div class="message-body">
        {error.message}
      </div>
    </article>
  </div>
{/if}

<style>
  .container {
    margin: 40px;
  }
</style>
