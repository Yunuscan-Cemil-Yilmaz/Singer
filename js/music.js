class Music {
    constructor(title, singer, img, file) {
        this.title = title;
        this.singer = singer;
        this.img = img;
        this.file = file;
    }

    getName() {
        return this.title + " - " + this.singer;
    }
}


const musicList = [
    // new Music("", "","",""),       
    // u should add your musics
    // u should give this datas to constructor on this format : 
    // title, singer, image file name with file extention on img folder, song(mp3) file name with file extention on mp3 folder .
];
