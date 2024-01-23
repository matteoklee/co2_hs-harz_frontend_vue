export function saveSubpage(name){
    if(!sessionStorage.visitorSubpages)
        sessionStorage.visitorSubpages = JSON.stringify([])
    let subpages = JSON.parse(sessionStorage.getItem("visitorSubpages"));
    for(let i = 0; i < subpages.length; i++){
     if(subpages[i].url === name){
         subpages[i].visits++;
         sessionStorage.visitorSubpages = JSON.stringify(subpages);
         return;
     }
    }
    subpages.push({"url": name, "visits": 1});
    sessionStorage.visitorSubpages = JSON.stringify(subpages);
}

export function saveButton(name, button, clicks) {
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
    buttons.push({"url": name, "button": button, "clicks": clicks});
    sessionStorage.visitorButtons = JSON.stringify(buttons);
}