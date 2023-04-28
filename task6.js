// 1. a) Write a constructor for the class Movie, which takes a String representing the title of the movie, 
// a String representing the studio, and a String representing the rating as its arguments, and sets the 
// respective class properties to these values.


class movie{
 constructor(studio,rating){
  this.studio= studio;
  this.rating= rating;
 }
 Movie1(){
  const title =new title();
  return title+this.studio+this.rating;
 }


}
const Movie =new movie("Studio green"+"4");
document.getElementById("demo").innerHTML="Movie Title is"+Movie.Movie1()+" ";

// b) The constructor for the class Movie will set the class property rating to "PG" as default when no rating is provided.
 
class movie {
  constructor(title, studio, rating){
      this.title = title;
      this.studio = studio;
      if(rating=="null")
      this.rating = "PG";
  }
}

//c) Write a method getPG, which takes an array of base type Movie as its argument, and returns a new array of only those movies in the input array with a rating of "PG". You may assume the input array is full of Movie instances. The returned array need not be full.
getPG();{
const Movies=["Ps2","Dasara","Pathan"];
}
const Movie1 = {movie:"ps2", rating:4.5, studio:"Lycastudio"};
const Movie2 = {movie:"Dasara", rating:3.5, studio:"greenstudio"};
const Movie3 = {movie:"pathan", rating:3.2, studio:"redgiant"};

//d) Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”, the studio “Eon Productions”, and the rating “PG­13”

const CasinoRoyale = new movie( "Casino Royal", "Eon Productions", "PG13");
