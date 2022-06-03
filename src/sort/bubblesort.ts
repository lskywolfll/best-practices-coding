var items = [8080,5255,8080,6664,6646,6664,545,5554,555555,30000,145445, 145445];
function swap(items: number[], leftIndex:number, rightIndex:number){
    var temp = items[leftIndex];
    items[leftIndex] = items[rightIndex];
    items[rightIndex] = temp;
}
function partition(items: number[], left:number, right:number) {
    const pivot   = items[Math.floor((right + left) / 2)]; //middle item
    let i       = left; //left pointer
    let j       = right; //right pointer
    while (i <= j) {
        while (items[i] < pivot) {
            i++;
        }
        while (items[j] > pivot) {
            j--;
        }
        if (i <= j) {
            swap(items, i, j); //sawpping two elements
            i++;
            j--;
        }
    }
    return i;
}

function quickSort(items: number[], left:number, right:number): number[] {
    let index;
    if (items.length > 1) {
        index = partition(items, left, right); //index returned from partition
        if (left < index - 1) { //more elements on the left side of the pivot
            quickSort(items, left, index - 1);
        }
        if (index < right) { //more elements on the right side of the pivot
            quickSort(items, index, right);
        }
    }
    return items;
}

var sortedArray = quickSort(items, 0, items.length - 1);
console.log(sortedArray);