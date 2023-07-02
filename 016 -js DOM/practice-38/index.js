let wrapper = document.getElementById('wrapper');

function messageToUser() { 
    let message = confirm('Do you want to add new image?');
    if (message === true) {
       let getLinkFromUzer = prompt('Link for the image:');
        let image = document.createElement('img');
       image.src = getLinkFromUzer;      
       
       wrapper.append(image);
    }  

}
messageToUser();







