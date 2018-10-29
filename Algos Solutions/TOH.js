function TowerOfHanoi(disks, source, destination, spare) {
	if(disks === 1) {
		console.log("Disk " + disks + " moved from " + source + " to " + destination);
	}
	else if (disks > 1){
		TowerOfHanoi(disks-1, source, spare, destination);
		console.log("Disk " + disks + " moved from " + source + " to " + destination);
		TowerOfHanoi(disks-1, spare, destination, source)
	}
	else {
		console.log("Cannot move empty disks");
	}
}

TowerOfHanoi(3, 'A', 'C', 'B');

