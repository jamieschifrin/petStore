document.getElementById('form').submit(myFunction())

function myFunction(event) {
    event.preventDefault()
    
    
    var data = document.getElementById("input1").value;
    var data1 = document.getElementById("input2").value;
    console.log(data, data1);

    document.getElementById("input1").value = ""
    document.getElementById("input2").value = ""

    
}

myFunction();
