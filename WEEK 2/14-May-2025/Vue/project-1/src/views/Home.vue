<template>
    <div>
        Hi
        <div>
            <HelloWorld/>
        </div>
    </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue';


export default {
    name : 'Home',
    components : {
        HelloWorld,
    }
}
</script>