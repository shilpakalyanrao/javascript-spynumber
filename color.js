<script>
    function myfunction() {
        var inputdata = document.querySelector("input").value;
        var digits = inputdata.split("").map(Number);
        var sum = digits.reduce((a, b) => a + b);
        var product = digits.reduce((a, b) => a * b);
        if (sum === product) {
            document.querySelector("p").innerHTML = `${inputdata} is  a spy number`;
        }
        else {
            document.querySelector("p").innerHTML = `${inputdata} isa  not spy number`;

        }
    }
</script>
