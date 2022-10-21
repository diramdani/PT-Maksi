<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>PT Maksi</title>
</head>
<body>
	<script>
    function helloWorld () {
        console.log("Hello world!");
        return;
    }
    helloWorld();
    </script>
</body>
</br>
<body>
     <script>
    let i = 1;
    while (i <=10){
    console.log(i)
    i++
    }
    </script>
</body> 
</br>
<body>
     <script>
        let number = 23;
        let isPrime = true;
        for (let i = 2; i <= Math. sqrt (number); i++) {
        if (number % i == 0) {
            isPrime = false;
            }
        } 
            if(isPrime == true) {console.log("prime");}
        else {console.log("not prime");}
    </script>
</body>  
 </br>
<body>
    <script>
        let value = 5;
        if (value >0){  

        console.log("positive num");
        } else {
        console.log("not positive num");
        }
    </script>
</body>
</br>
<body>
    <script>
        let str = "hello world";
        let result = str.toUpperCase()
        console.log(result)
    </script>
</body>
</br>
<body>
     <script>
        let str = "hello world"
        let length = str.length
        let char = str[9]
        console.log(char)
    </script>
</body>
</br>
<body>
     <script>
    let string = "HELLO";
    let newArray = string.split("");
    newArray.forEach((item, index) => {
      console.log(item+ "\n")
    })
    </script>
</body>
</br>
<body>
    <script>
        var arr = [5, 9, 13, 43, 2, 7]
        var min = Math.min.apply(Math, arr)
        console.log(min)
    </script>
</body>
</br>
<body>
      <script>
        var arr = [5,9,13,43,2,7];
        var total = 0;
        for (i = 0 ; i<arr.length; i++){
            total += arr[i];
        }
        console.log(total);
    </script>
</body>
</br>
<body>
     <script>
        let arr = [5, 9, 13, 43, 2, 7]
        let newArr = arr.sort((a,b) => a-b)
        console.log(newArr);
    </script>
</body>
</html>