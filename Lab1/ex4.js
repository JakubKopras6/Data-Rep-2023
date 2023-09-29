// ages array
const ages = [25, 31, 42, 77];

// arrow fucntion called partB it takes ages array sets 
// it as map function
// items are the ages
let partD = ages.map((items)=>{
    
    // basic statment to multiply items only less than 70
    if (items < 70)
    {
    return item*2;
    }
    
    else
    {
        return item;
    }

});

console.log(partD);