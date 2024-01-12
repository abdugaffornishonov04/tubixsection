let playBtn = document.querySelector(".ts-video button");
let theVideoContent = document.querySelector(".ts-address-video-invalid")

playBtn.addEventListener("click", () => {
  theVideoContent.classList.add("ts-address-video")
  theVideoContent.classList.remove("ts-address-video-invalid");

  let button = document.querySelector(".ts-address-video button").addEventListener("click", () =>{
    theVideoContent.classList.remove( "ts-address-video" )
    theVideoContent.classList.add( "ts-address-video-invalid" );
  })
})
