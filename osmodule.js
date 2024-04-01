const os=require('os')
const user=os.userInfo()
console.log(os.uptime())

const currentos={
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freemem:os.freemem()

}
console.log(currentos)