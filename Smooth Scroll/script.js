var navMenuAnchorTags = document.querySelectorAll('.nav-menu a');
var interval;

navMenuAnchorTags.forEach((Element)=>{
    Element.addEventListener('click', function(event){
        event.preventDefault();
        console.log(this.textContent);
        var targetId=document.getElementById(this.textContent);
        interval = setInterval(()=>{
            scrollToItem(targetId);
        },20);
    });
});

function scrollToItem(targetId){
    var targetSectionCoordinates = targetId.getBoundingClientRect();
    if (targetSectionCoordinates.top <= 50) {
        clearInterval(interval);
        return;
    }
    window.scrollBy(0, 40);
}