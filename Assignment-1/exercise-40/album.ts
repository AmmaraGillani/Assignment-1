function make_album(artist_name,album_title,num_track=0)
{
    var music_album =
    {
        artist : artist_name,
        album: album_title,
        track : num_track
    };
    
    return music_album;
}
console.log(make_album('Drake','Take Care'));
console.log(make_album('Rihanna','Loud'));
console.log(make_album('Coldplay','Everyday Life'));
console.log(make_album('Rihanna','Loud',12));
