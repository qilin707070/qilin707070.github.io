export default {
    data(){
        return{
            statrsCount:1800,//星星数量
            distance:1000,//间距
        }
    },
    mounted(){
        let _this = this
        let starArr = _this.$refs.star
        console.log(starArr)
        starArr.forEach(item =>{
            var speed = 0.2 + (Math.random() * 1);
            var thisDistance = _this.distance + (Math.random() * 300);
            item.style.transformOrigin = `0 0 ${thisDistance}px`;
            item.style.transform=`translate3d(0,0,-${thisDistance}px)
            rotateY(${(Math.random() * 360)}deg) rotateX(${(Math.random() * -50)}deg) scale(${speed},${speed})`
        })
    }
}
