function setup() {
    createCanvas(windowWidth, windowHeight);
    textAlign(CENTER, CENTER);
    textSize(30);
    noLoop(); // No need to continuously draw
}

function draw() {
    background(255);

    // Calculate dimensions based on window size
    let flexItemWidth = windowWidth / 2;
    let flexItemHeight = windowHeight;

    // Responsive layout - one column layout for small screens
    if (windowWidth <= 800) {
        flexItemWidth = windowWidth;
        flexItemHeight = windowHeight / 2;
    }

    // Draw left flex item
    fill('#f1f1f1');
    rect(0, 0, flexItemWidth, flexItemHeight);
    fill(0);
    text('Left Item', flexItemWidth / 2, flexItemHeight / 2);

    // Draw right flex item
    fill('dodgerblue');
    rect(flexItemWidth, 0, flexItemWidth, flexItemHeight);
    fill(255);
    text('Right Item', flexItemWidth + flexItemWidth / 2, flexItemHeight / 2);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    redraw(); // Redraw the canvas when the window is resized
}
