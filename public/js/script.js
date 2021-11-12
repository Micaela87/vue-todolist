let slides = [];

// generates an array of objects based on previous data
while (slides.length < 10) {
    let newObj = {

    };

    newObj.done = true;
    newObj.text = `task${slides.length}`;

    slides.push(newObj);
}

console.log(slides);