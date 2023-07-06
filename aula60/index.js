function recursiva(max) {
    console.log(max);
    if (max >= 10) return;
    max++;
    recursiva(max);
}

recursiva(0); // 0 1 2 3 4 5 6 7 8 9 10