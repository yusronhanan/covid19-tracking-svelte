<!-- <script context="module"> ==> the call is performed before creating the component. -->
<script context="module">
  import stateName from "../data/stateName.js";
  export function preload(page) {
    const state = page.params["state"];

    if (stateName.find((s) => s.abbreviation === state) === undefined) {
      this.error(404, "State not found");
      return;
    }
    // console.log(page);
    try {
      //   throw new Error("this is bad");
      return { state };
    } catch (error) {
      this.error(500, "There was an error in calling the API");
      return;
    }
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
