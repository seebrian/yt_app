import axios from "axios";
const KEY = "AIzaSyARVF--bjME2ET09Nz15Lhs1IKbofrpTjA";

//why KEY not key  mean that KEY is constant value

//does not have ending / of baseurl

//asynchronous syntax
export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: `${KEY}`
  }
});
