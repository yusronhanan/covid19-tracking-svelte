<script>
  export let segment;

  let isOpen;
  const toggleNav = () => {
    isOpen = !isOpen;
  };
</script>

<nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item" href="/">
      <img src="covid.png" alt="covid" />
    </a>

    <span
      role="button"
      class="navbar-burger"
      aria-label="menu"
      aria-expanded="false"
      data-target="navbarBasicExample"
      class:is-active={isOpen}
      on:click={toggleNav}
    >
      <span aria-hidden="true" />
      <span aria-hidden="true" />
      <span aria-hidden="true" />
    </span>
  </div>

  <div id="navbarBasicExample" class="navbar-menu" class:is-active={isOpen}>
    <div class="navbar-start">
      <a href="/" class="navbar-item" class:is-active={segment === undefined}>
        Home
      </a>

      <a
        href="/about"
        class="navbar-item"
        class:is-active={segment === "about"}
      >
        About
      </a>
    </div>

    <!-- <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <a href="/" class="button is-primary">
            <strong>Sign up</strong>
          </a>
          <a href="/" class="button is-light"> Log in </a>
        </div>
      </div>
    </div> -->
  </div>
</nav>

<style>
  @media (min-width: 769px) {
    nav {
      border-bottom: solid gray 1px;
    }
  }
</style>
