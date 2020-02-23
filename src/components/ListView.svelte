<script>
    import { fade, fly } from 'svelte/transition';

    export let items = Array()

    const removeItem = (idx) => {
        let confirmation = confirm('Are you sure you want to mark "' + items[idx] + '" as completed ?')

        if (confirmation) {
            items = items.slice(0, idx).concat(items.slice(idx+1))
        }
    }
</script>

<style>
    .parent {
        width: 650px;
        margin: 0 auto;
    }

    .child {
        padding: 2px;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        font-size: small;
        width: 100%;
    }

    .child:nth-child(odd) {
        background-color: #eee9f5;
    }

    .child:nth-child(even) {
        background-color: #ffffff;
    }

    .clickable:hover {
        cursor: pointer;
    }
</style>

<div class="parent">
    {#each items as item, i}
        <div class="child" in:fly="{{ x: -200, duration: 250 }}" out:fly="{{ x: 200, duration: 250 }}"><span class="clickable" on:click={() => removeItem(i)}>[✔️]</span> {item}</div>
    {/each}
</div>