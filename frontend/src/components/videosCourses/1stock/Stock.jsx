import React, { useEffect } from "react";
import playImage from "/assets/images/play.svg";
import pauseImage from "/assets/images/pause.svg";
import "./style.css";

const Stock = () => {
  useEffect(() => {
    const main_video = document.querySelector(".main-video video");
    const main_video_title = document.querySelector(".main-video .title");
    const video_playlist = document.querySelector(".video-playlist .videos");
    const data = [
      { id: "a1", title: "video 1", name: "v1.mp4", duration: "2:47" },
      { id: "a2", title: "video 2", name: "v2.mp4", duration: "2:45" },
      { id: "a3", title: "video 3", name: "v3.mp4", duration: "24:49" },
      { id: "a4", title: "video 4", name: "v4.mp4", duration: "3:59" },
      { id: "a5", title: "video 5", name: "v5.mp4", duration: "4:25" },
      { id: "a6", title: "video 6", name: "v6.mp4", duration: "5:33" },
      { id: "a7", title: "video 7", name: "v7.mp4", duration: "0:29" },
      { id: "a8", title: "video 8", name: "v8.mp4", duration: "1:12" },
      { id: "a9", title: "video 9", name: "v9.mp4", duration: "3:38" },
      { id: "a10", title: "video 10", name: "v10.mp4", duration: "3:38" },
    ];

    // Populate video playlist
    data.forEach((video, i) => {
      let video_element = `
        <div class="video" data-id="${video.id}">
          <img src=${playImage} alt="play">
          <p>${i + 1 > 9 ? i + 1 : "0" + (i + 1)}</p>
          <h3 class="title">${video.title}</h3>
          <p class="time">${video.duration}</p>
        </div>
      `;
      video_playlist.innerHTML += video_element;
    });

    const videos = document.querySelectorAll(".video");
    videos[0].classList.add("active");
    videos[0].querySelector("img").src = pauseImage;

    videos.forEach((selected_video) => {
      selected_video.onclick = () => {
        videos.forEach((all_videos) => {
          all_videos.classList.remove("active");
          all_videos.querySelector("img").src = playImage;
        });
        selected_video.classList.add("active");
        selected_video.querySelector("img").src = pauseImage;
        let match_video = data.find(
          (video) => video.id === selected_video.dataset.id
        );
        main_video.src = `/assets/videos/stockmarket/${match_video.name}`;
        main_video_title.innerHTML = match_video.title;
      };
    });
  }, []);

  return (
    <main className="main3">
      <button id="bridge" className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
        Stock Market Free Courses
      </button>
      <section className="videosStock">
        <section className="container-video">
          <section className="main-video">
            <video src="/assets/videos/stockmarket/v1.mp4" controls autoPlay muted></video>
            <h3 className="title">Title of the playing Video.</h3>
          </section>
          <section className="video-playlist">
            <h3 className="title">Stock Market Video's Playlist</h3>
            <p>10 lessons &nbsp; . &nbsp; 50m 48s</p>
            <div className="videos">
              {/* Video playlist will be populated dynamically */}
            </div>
          </section>
        </section>
      </section>
    </main>
  );
};

export default Stock;
