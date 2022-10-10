const answers=['B','B','B','B']

const form=document.querySelector('.quiz-form')
const result=document.querySelector('.result')
//console.log(result)// style possible
// form.q1.value="B"
// console.log(form.q1)

 



form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const user_input=[form.q1.value,form.q2.value,form.q3.value,form.q4.value]

    
    let score=0
    //console.log(user_input)
    user_input.forEach((value,index)=>{

        if(value === answers[index]){
            score+=25;
        }
       
    })
    scrollTo(0,0)
    result.classList.remove('d-none')
    let value=0
    let Id=setInterval(()=>{
        
        if(value === score){
            clearInterval(Id);
        }
        result.querySelector('span').textContent=`${value}%`
        value++;

    },10);
    
    console.log(result.querySelector('span').textContent)

     

})

