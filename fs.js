const {readFileSync,writeFileSync}=require('fs')
const {readFile,writeFile}=require('fs')
// const first=readFileSync('./folder/first.txt','utf-8')
// console.log(first)
// writeFileSync('./folder/second.txt','this is second file',{flag:'a'});

readFile('./folder/first.txt','utf-8',(err,res)=>{
    if(err) {
        console.log(err)
        return
    }
    else{
        console.log(res)
    }
})



