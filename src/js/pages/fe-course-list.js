import data from '../data/fe-course-list.json'
import '../components/import-jquery'

window.vm = new Vue({
  el: '#app',
  data: function() {
    return {
      systemList: data['system-list'].map(item=>{ 
        return item
      })
    }
  },
  computed:{
    leftColumn(){
      return this.systemList.filter((a,index)=>{
        return index <= this.systemList.length/2
      })
    },
    rightColumn(){
      return this.systemList.filter((a,index)=>{
        return index > this.systemList.length/2
      })
    }
  }
})

$('.curriculum-wrapper').on('click','li',function () {
  $(this).toggleClass('active')
})