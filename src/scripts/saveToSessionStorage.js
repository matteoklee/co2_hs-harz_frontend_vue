export function saveSubpage(url){
    if(!sessionStorage.visitorSubpages)
        sessionStorage.visitorSubpages = JSON.stringify([])
    let subpages = JSON.parse(sessionStorage.getItem("visitorSubpages"));
    for(let i = 0; i < subpages.length; i++){
     if(subpages[i].url === url){
         subpages[i].visits++;
         sessionStorage.visitorSubpages = JSON.stringify(subpages);
         return;
     }
    }
    subpages.push({"url": url, "visits": 1});
    sessionStorage.visitorSubpages = JSON.stringify(subpages);
}

export function saveButton(url, button, clicks) {
    if (!sessionStorage.visitorButtons)
        sessionStorage.visitorButtons = JSON.stringify([])
    let buttons = JSON.parse(sessionStorage.getItem("visitorButtons"));
    for(let i = 0; i < buttons.length; i++){
        if(buttons[i].button === button){
            buttons[i].clicks += clicks;
            sessionStorage.visitorButtons = JSON.stringify(buttons);
            return;
        }
    }
    buttons.push({"url": url, "button": button, "clicks": clicks});
    sessionStorage.visitorButtons = JSON.stringify(buttons);
}