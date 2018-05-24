<template>
    <div class="loadingBox">
        <img src="../assets/loading-process.gif" alt="">
        <span>正在拼命加载....</span>
    </div>
</template>

<script>
export default {
    name:"loadingProcess"
}
</script>

<style lang="scss" scoped>
@import "../scss/common.scss";
.loadingBox{
    width: 100%;
    height: 45px;
    @include flexbox(){
        justify-content: center;
        align-items: center;
    }
    >img{
        width: 35px;
        height: 35px;
    }
    >span{
        margin-left:10px;
        color: gray;
        font-size: 12px;
    }
}
</style>

