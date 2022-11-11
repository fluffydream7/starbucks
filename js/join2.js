for (let i = 2022; i >= 1900; i--) {
    var option = `<option value="${i}">${i}년</option>`
    $('#year').append(option)
}
for (let i = 1; i <= 12; i++) {
    var option = `<option value="${i}">${i}월</option>`
    $('#months').append(option)
}
for (let i = 1; i <= 31; i++) {
    var option = `<option value="${i}">${i}일</option>`
    $('#day').append(option)
}