$("#btn").on("click", () => {
  console.log("here");
  let selectedSize;
  console.log("val" + selectedSize);
  if ($("input:radio[name='size']").is(":checked")) {
    selectedSize = $("input[name='size']:checked").val();
    // show the output:
  }
  output.innerText = selectedSize
    ? `You selected ${selectedSize}`
    : `You haven't selected any size`;
});

function myFunction() {
  // Get the checkbox
  var checkBox = document.getElementById("myCheck");
  // Get the output text
  var text = document.getElementById("text");

  // If the checkbox is checked, display the output text
  if (checkBox.checked == true) {
    text.style.display = "block";
  } else {
    text.style.display = "none";
  }
}
