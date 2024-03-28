const $faqBtn1 = document.querySelector(".faq1");
const $faqBtn2 = document.querySelector(".faq2");
const $faqBtn3 = document.querySelector(".faq3");

const $container = document.querySelector(".qna-container")
const $firstAnswer = document.querySelector("#firstAnswer");
const $secondAnswer = document.querySelector("#secondAnswer");
const $thirdAnswer = document.querySelector("#thirdAnswer");




const selectedFaqBtn = ($num1, $num2, $num3)=>(event)=>{
    const selectedClass = "q-menu1";
    if( !$num1.classList.contains(selectedClass)){
        $num1.classList.add(selectedClass);
        $num2.classList.remove(selectedClass);
        $num3.classList.remove(selectedClass);
    }

    if($num1 == $faqBtn1){
        $firstAnswer.style.display = "initial";
        $secondAnswer.style.display = "none";
        $thirdAnswer.style.display = "none";

    }
    else if($num1 == $faqBtn2){
        $secondAnswer.style.display = "initial";
        $firstAnswer.style.display = "none";
        $thirdAnswer.style.display = "none";

    }else{
        $thirdAnswer.style.display = "initial";
        $secondAnswer.style.display = "none";
        $firstAnswer.style.display = "none";
    }
};

$faqBtn1.addEventListener("click", selectedFaqBtn($faqBtn1, $faqBtn2, $faqBtn3));
$faqBtn2.addEventListener("click", selectedFaqBtn($faqBtn2, $faqBtn1, $faqBtn3));
$faqBtn3.addEventListener("click", selectedFaqBtn($faqBtn3, $faqBtn2, $faqBtn1));