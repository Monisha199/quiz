start_ele= $("#start");
opt_1 = $("#option-1");
opt_2 = $("#option-2");
opt_3 = $("#option-3");
opt_4 = $("#option-4");
ques_div = $("#ques");
next= $("#next");

//global variables
let score=0
let ans_clicked= true;
let decrease_score=false;
let decrease_once=true;
let ques_no = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14]


//function that starts quiz
function startQuiz(){
	start_ele.hide();
	$(".options").css({display:"block"});
    $("#myProgress").css({display:"block"});
    $("#next").css({display:"block"});
	changeQuestion()
    console.log("next_cle",next_clicked);
    
}

//function to check whether the selected option is correct answer 
function answered(event){
    let id="";
    let user_answer="";
    let number="";
    id='#'+event.target.id;
    user_answer=$(id).html();
    number = Number(ques_div.attr('data-ques'));
    opt_1.css({"background-color":"#6fc2a0"})
    opt_2.css({"background-color":"#6fc2a0"})
    opt_3.css({"background-color":"#6fc2a0"})
    opt_4.css({"background-color":"#6fc2a0"})
    $(id).css({"background-color":"#d48c43"})
    if(data[number].answer===user_answer){
        decrease_score=true;
        decrease_once=true;
        if(ans_clicked){
            score+=10
            ans_clicked=false;
        }
        
    }else{
        if(decrease_score && decrease_once){
            score-=10
            decrease_once=false
            ans_clicked=true
        }

    }
    // console.log("score",score)
    return;
}

//function to change randomize the order of questions
function chooseInt(ques_no){
    // console.log("ques no to choose from ",ques_no);
    if(ques_no.length===0){
        ques_div.html("game over")
        next.hide();
        $(".options").hide()
    }
    var item = Math.floor(Math.random()*ques_no.length);
    // console.log("item",item);
    // console.log(ques_no[item],"ques_no");
    // console.log("question",data[ques_no[item]].question)
    ques_name=data[ques_no[item]].question;
    // console.log(ques_name);
    ques_div.html(ques_name);
    // console.log("question after setting div",data[ques_no[item]].question)
    
    ques_div.attr('data-ques',ques_no[item]);
    opt_1.html(data[ques_no[item]].options[0]);
    opt_2.html(data[ques_no[item]].options[1]);
    opt_3.html(data[ques_no[item]].options[2]);
    opt_4.html(data[ques_no[item]].options[3]);
    opt_1.css({"background-color":"#6fc2a0"})
    opt_2.css({"background-color":"#6fc2a0"})
    opt_3.css({"background-color":"#6fc2a0"})
    opt_4.css({"background-color":"#6fc2a0"})
    ques_no.splice(item,1);
    // console.log(ques_no);

    //indicate the progress made in progress bar
    curr_width=$("#myBar").width()
    increase_width=String(curr_width+76)
    // console.log(curr_width,"curr_width");
    $("#myBar").width(increase_width+'px')


    
    return ques_no
}

//function to chnage question when user chooses next
async function changeQuestion(){

    if(ques_no.length===0){
        if(score<60){
            ques_div.html("Score : "+score +"<br/><br/> Better Luck Next Time")
        }else{
            ques_div.html("  Congratulations!!! <br/><br/>Score: "+score )
        }
        next.hide();
        $(".options").hide()
        $("#myBar").hide()
        return;
    }
    ques_no.slice(...chooseInt(ques_no))
    ans_clicked=true;

    
}
function timer(){
do{
    counter++;
    console.log("counter",counter)
}
while(next_clicked){
    
}
}
