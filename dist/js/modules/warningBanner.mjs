function warningBannerActive(text,bgColor,fontColor,fontSize){
    let warningBanner =  document.querySelector(".warningBanner")
    warningBanner.style = "top: 0; background: #f8e46c; text-align: center; position: fixed; z-index: 5; width: 100%; height: 11vh; display: grid; place-items: center; font-size: 1.4rem;color:#fafafa; transition: .25s ease-in-out; opacity:1 !important; color:#3f3d56;"
    warningBanner.textContent = text
    warningBanner.style.background = bgColor
    warningBanner.style.color = fontColor
    warningBanner.style.fontSize = fontSize
    
    warningBanner.insertAdjacentHTML("beforeend",`<progress id="progress" value="0" max="100"></progress>`) 
    setTimeout(()=>{
      document.querySelector("#progress").style.width = "0";
    },250)
    setTimeout(() => {
      warningBanner.style.top = "-11.1vh"
      warningBanner.textContent = ""
    }, 2550);
    warningBanner.addEventListener("click",({target})=>{
      target.style.top = "-11.1vh"
      target.textContent = ""
    })
  }

  export {warningBannerActive}