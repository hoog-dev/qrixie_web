<script lang="ts">
export let href: string = "";
export let label: string = "";
</script>

<a href="{href}" class="flex self-start px-10 py-2 text-primary border border-primary rounded hover:shadow-btn hover:-translate-x-2 hover:-translate-y-2 duration-100">
    {label}
</a>
