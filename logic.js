console.log("hello world");
function func(){
    const words = ["roei","dai","tipesh","lo"];
    console.log(Math.floor(Math.random() * 3));
    document.getElementById("textInMid").innerHTML = words[Math.floor(Math.random() * 3)];
}
function changefunc(){
    console.log("hi");
    const solutions = {"זוויות צמודות משלימות זו את זו ל- ":"180","זוויות קודקודיות":"שוות","במשולש, מול זוויות שוות":"צלעות שוות","במשולש שווה שוקיים, זוויות הבסיס":"שוות","סכום כל שתי צלעות במשולש (?) מהצלע השלישית":"גדול", "במשולש שווה שוקיים , חוצה זווית הראש, התיכון לבסיס והגובה לבסיס":"מתלכדים"};
    let prompt = document.getElementById("textInMid").innerHTML;
    let ans = document.getElementById("textInput").value;
    console.log(ans);
    console.log(prompt);
    console.log(solutions[prompt])
    console.log("up");
    if (solutions[prompt] == ans){
        var audio = new Audio('ding.mp3');
        audio.play();
        document.getElementById("textInMid").innerHTML = Object.keys(solutions)[Math.round(Math.random() * (Object.keys(solutions).length)-1)]
    }

}