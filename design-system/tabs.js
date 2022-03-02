const tabList= document.querySelector('[role="tablist"]');
const tabs= tabList.querySelectorAll('[role="tab"]');

tabList.addEventListener('keydown', changeTabFocus)

tabs.forEach((tab)=>{
    tab.addEventListener('click', changeTabPanel)
} )

let tabFocus=0
function changeTabFocus(e){
    const keydownLeft=37;
    const keydownRight=39;
    //change the tabIndex of the current tab to -1
    if(e.keyCode=== keydownLeft || e.keyCode===keydownRight){
        tabs[tabFocus].setAttribute("tabindex", -1);
    }
    //if the right key is pushed, move to the next tab on the right
    if (e.keyCode===keydownRight){
        tabFocus++;
        if (tabFocus>=tabs.length){
            tabFocus=0;
        }
    }
    //if the left key is pushed, move to the next tab on the left
    if (e.keyCode===keydownLeft){
        tabFocus--;
        if (tabFocus<0){
            tabFocus=tabs.length-1;
        }
    }
    tabs[tabFocus].setAttribute("tabindex",0);
    tabs[tabFocus].focus();
}

function changeTabPanel(e){
    const targetTab=e.target;
    const targetPanel=targetTab.getAttribute("aria-controls");
    console.log(targetPanel);

}