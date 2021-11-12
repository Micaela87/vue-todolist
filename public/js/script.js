let slides = [];

// generates an array of objects based on previous data
while (slides.length < 10) {
    let newObj = {

    };

    newObj.done = false;
    newObj.text = `task${slides.length + 1}`;

    slides.push(newObj);
}

console.log(slides);