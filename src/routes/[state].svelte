<!-- <script context="module"> ==> the call is performed before creating the component. -->
<script context="module">
  export function preload(page) {
    console.log(page);
    return { state: page.params["state"] };
  }
</script>

<script>
  import CovidStat from "../components/CovidStat.svelte";
  import CovidChart from "../components/CovidChart.svelte";
  export let state;
</script>

<svelte:head>
  <title>Covid US Tracking App - {state}</title>
</svelte:head>
<div class="section header">
  <div class="container">
    <h1>Covid-19 US Tracker - {state}</h1>
  </div>
</div>

<CovidStat />
<CovidChart />
