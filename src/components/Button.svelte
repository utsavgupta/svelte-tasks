<script>
    export let caption
    export let handleClick
    export let disabled = true
</script>

<style>
    button {
        color: white;
        background-color: #6a5682;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        font-weight: lighter;
        padding: 5px;
        width: 150px;
    }

    button:disabled {
        color: gray;
    }
</style>

<button on:click={handleClick} disabled='{disabled}'>{caption}</button>