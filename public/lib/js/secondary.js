export default function closeOpenFuncSecond() {
  var summary_target = document.querySelector(".summary-box.second");
  var button_txt = document.querySelector(".summary_btn.second");

  if (summary_target.style.display === "flex") {
    summary_target.style.display = "none";
    button_txt.innerHTML = 'Open';
  } else {
    summary_target.style.display = "flex";
    button_txt.innerHTML = '<span aria-hidden="true">&times;</span> Close';
  }
}