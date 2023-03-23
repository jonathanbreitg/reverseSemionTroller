console.log("hello world");
function func(){
    const words = ["roei","dai","tipesh","lo"];
    console.log(Math.floor(Math.random() * 3));
    document.getElementById("textInMid").innerHTML = words[Math.floor(Math.random() * 3)];
}
function changefunc(){
    console.log("hi");
    const solutions = {"1":"2","3":"4"};
    let prompt = document.getElementById("textInMid").innerHTML;
    let ans = document.getElementById("textInput").value;
    console.log(ans);
    console.log(prompt);
    console.log(solutions[prompt])
    console.log("up");
    if (solutions[prompt] == ans){
        var audio = new Audio('ding.mp3');
        audio.play();
        document.getElementById("textInMid").innerHTML = Object.keys(solutions)[Math.round(Math.random() * 1)]
    }

}