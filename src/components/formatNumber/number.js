
 const formatNumber =(num)=> {                                                      //format number 1000  to 1,000
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
}
export default formatNumber