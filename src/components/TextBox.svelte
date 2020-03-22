<script>
    export let value

    export let onKeyUp
    export let onKeyPress
</script>

<style>
    .task-description {
        width: 500px;
        border: #372947 1px solid;
        padding: 5px;
        font-family: Georgia, 'Times New Roman', Times, serif;
        color: gray;
    }
</style>

<input type="text" class="task-description" bind:value placeholder="What's on your mind ..." on:keyup={onKeyUp} on:keypress={onKeyPress} />