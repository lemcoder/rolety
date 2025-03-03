var imageArray=[]; // empty image objects array
//get the image urls based on number of images
let createArray=(numOfImgs=>{
    for(let i=1;i<numOfImgs+1;i++){
        getMeta(i);
    }
})(88); // set there the number of images

//set the properties of images and push them to array
function getMeta(numOfImg){ 
let img = new Image(); // create new image object
img.src = `img/${numOfImg}.jpg`;

img.number=numOfImg;//set the number of image
img.onload=function(){
    // set the properties of image object
let width=this.width;
let height=this.height;
let url=this.src;
    //add image object to array
imageArray[this.number]={url,width,height};
};

}
