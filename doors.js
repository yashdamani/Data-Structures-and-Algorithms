var doors = new Array(100);

for (var i = 0; i < doors.length; i++) {
    doors[i] = false;
}
for (var i = 1; i <= doors.length; i++) {
    for (var j = i - 1; j < doors.length; j += i) {
        doors[j] = !doors[j];
    }
}
for (var i = 1; i <= doors.length; i++) {
    console.log(`Door ${i} ${doors[i-1]?"open":"closed"}`);
}