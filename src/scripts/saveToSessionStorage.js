export function saveSubpage(name, startTime){
    let subpages = JSON.parse(sessionStorage.getItem("visitorSubpages"));
    let time = startTime;
    time = Date.now() - time;
    subpages.push({"url": name, "time": time});
    sessionStorage.visitorSubpages = JSON.stringify(subpages);
}

export function saveButton(name, button, clicks) {
    let buttons = JSON.parse(sessionStorage.getItem("visitorButtons"));
    buttons.push({"url": name, "button": button, "clicks": clicks});
    sessionStorage.buttons = JSON.stringify(buttons);
}