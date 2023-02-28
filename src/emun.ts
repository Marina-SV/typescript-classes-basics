
// enum - это набор именованных числовых констант (смесь массива и объекта)

enum Directions {
    Up,
    Down,
    Left,
    Right
}

enum Dir {
    Up = 7,
    Down = 4,
    Left,
    Right
}

console.log(Directions.Down) // 1

// Reverse enum
console.log(Directions[3]) // Right

enum links {
    youtube = "https://youtube.com/",
    facebook = "https://facebook.com/",
    vk = "https://vk.com/",
}

const enum linksConst {
    youtube = "https://youtube.com/",
    facebook = "https://facebook.com/",
    vk = "https://vk.com/",
}
// const не создает предварительно объект, экономит память
console.log(links.youtube)