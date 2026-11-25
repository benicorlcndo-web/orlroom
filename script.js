/* =====================================
   ELEMENTS — LAPTOP
===================================== */

const laptop = document.querySelector(".laptop");

const projectsWindow =
    document.getElementById("projectsWindow");

const laptopDot =
    document.querySelector(".projects-window .dot");

const expandedWindow =
    document.getElementById("expandedWindow");

const dotExpanded =
    document.getElementById("dotExpanded");

const expandedContent =
    document.getElementById("expandedContent");

const windowContent =
    document.getElementById("windowContent");


/* =====================================
   ELEMENTS — BINDER
===================================== */

const binder =
    document.querySelector(".binder");

const binderWindow =
    document.getElementById("binderWindow");

const binderMagnify =
    document.querySelector(".binder-magnify");

const expandedBinderWindow =
    document.getElementById("expandedBinderWindow");

const magnifyExpanded =
    document.querySelector(".magnify-expanded");

const expandedBinderContent =
    document.getElementById("expandedBinderContent");

const binderWindowContent =
    document.getElementById("binderWindowContent");


/* =====================================
   ELEMENTS — BAG
===================================== */

const bag =
    document.querySelector(".bag");

const bagWindow =
    document.getElementById("bagWindow");

const bagOpenButton =
    document.getElementById("bagOpenButton");

const expandedBagWindow =
    document.getElementById("expandedBagWindow");

const archiveClose =
    document.getElementById("archiveClose");


/* =====================================
   ELEMENTS — BARRIER
==================================== */

const barrier =
    document.querySelector(".barrier");

const barrierWindow =
    document.getElementById("barrierWindow");


/* =====================================
   ELEMENTS — MUSIC
===================================== */

const music =
    document.querySelector(".music");

const musicWindow =
    document.getElementById("musicWindow");

const musicPlayButton =
    document.querySelector(".music-play-button");

const musicCover =
    document.querySelector(".music-player-cover");

let musicPlaying = false;

const musicTitle =
    document.querySelector(".music-player-info strong");

const musicArtist =
    document.querySelector(".music-player-info span");

const musicCurrentTime =
    document.querySelectorAll(".music-time")[0];

const musicDuration =
    document.querySelectorAll(".music-time")[1];

const musicProgressFill =
    document.querySelector(".music-progress-fill");

const musicSongs = [
    {
        title: "Spring Snow",
        artist: "10cm",
        file: "assets/song/10cmSpringSnow.mp3",
        cover: "assets/song logo/springsnow.logo.jpg"
    },
    {
        title: "bloodstream",
        artist: "Alyssa Grace",
        file: "assets/song/Alyssa Grace - bloodstream Official Music Video.mp3",
        cover: "assets/song logo/bloodstream.logo.jpg"
    },
    {
        title: "Breathe",
        artist: "Breathe",
        file: "assets/song/Breathe.mp3",
        cover: "assets/song logo/breathe.logo.jpg"
    },
    {
        title: "Bubblegum Party",
        artist: "BubblegumParty",
        file: "assets/song/BubblegumParty.mp3",
        cover: "assets/song logo/bubblegumparty.logo.jpg"
    },
    {
        title: "Feet Don't Fail Me Now",
        artist: "Joy Crookes",
        file: "assets/song/Joy Crookes - Feet Don_t Fail Me Now.mp3",
        cover: "assets/song logo/feetdontfeelmenow.logo.jpg"
    },
    {
        title: "Walk with You",
        artist: "Kylie Dailey",
        file: "assets/song/Walk with You_Kylie Dailey.mp3",
        cover: "assets/song logo/walkwithyou.logo.jpg"
    }
];


/* =====================================
   ELEMENTS — PLANT
===================================== */

const plant =
    document.querySelector(".plant");

const plantWindow =
    document.getElementById("plantWindow");

const plantObject = 
    document.querySelector(".object.plant");

const plantClose =
    document.getElementById("plantClose");

const plantMagnify =
    document.getElementById("plantMagnify");

const expandedPlantWindow =
    document.getElementById("expandedPlantWindow");

const gardenMagnify =
    document.getElementById("gardenMagnify");

const plantWindowContent =
    document.getElementById("plantWindowContent");

const expandedPlantContent =
    document.getElementById("expandedPlantContent");


/* =====================================
   SYNC CONTENT
===================================== */

if (windowContent && expandedContent) {
    windowContent.innerHTML =
        expandedContent.innerHTML;
}

if (binderWindowContent && expandedBinderContent) {
    binderWindowContent.innerHTML =
        expandedBinderContent.innerHTML;
}

if (plantWindowContent && expandedPlantContent) {
    plantWindowContent.innerHTML =
        expandedPlantContent.innerHTML;
}


/* =====================================
   ARCHIVE SUB WINDOWS
===================================== */

const educationWindow =
    document.getElementById("educationWindow");

const experienceWindow =
    document.getElementById("experienceWindow");

const certificatesWindow =
    document.getElementById("certificatesWindow");

const educationBack =
    document.getElementById("educationBack");

const experienceBack =
    document.getElementById("experienceBack");

const certificatesBack =
    document.getElementById("certificatesBack");

const educationItem =
    document.getElementById("educationItem");

const experienceItem =
    document.getElementById("experienceItem");

const certificatesItem =
    document.getElementById("certificatesItem");


/* =====================================
   ANIMATE CLOSE HELPER
===================================== */

function animateClose(element) {
    element.classList.add("shrink-out");
    element.addEventListener(
        "animationend",
        function handler() {
            element.classList.remove("shrink-out", "active");
            element.style.display = "";
            element.removeEventListener("animationend", handler);
        }
    );
}


/* =====================================
   CLOSE ARCHIVE SUB WINDOWS
===================================== */

function closeArchiveSubWindows() {

    if (educationWindow && educationWindow.classList.contains("active")) {
        animateClose(educationWindow);
    }

    if (experienceWindow && experienceWindow.classList.contains("active")) {
        animateClose(experienceWindow);
    }

    if (certificatesWindow && certificatesWindow.classList.contains("active")) {
        animateClose(certificatesWindow);
    }

}


/* =====================================
   CLOSE SMALL WINDOWS
===================================== */

function closeSmallWindows() {

    if (projectsWindow && projectsWindow.style.display === "flex") {
        animateClose(projectsWindow);
    } else if (projectsWindow) {
        projectsWindow.classList.remove("expand-in", "shrink-out");
        projectsWindow.style.display = "none";
    }

    if (binderWindow && binderWindow.style.display === "flex") {
        animateClose(binderWindow);
    } else if (binderWindow) {
        binderWindow.classList.remove("expand-in", "shrink-out");
        binderWindow.style.display = "none";
    }

    if (bagWindow && bagWindow.style.display === "flex") {
        animateClose(bagWindow);
    } else if (bagWindow) {
        bagWindow.classList.remove("expand-in", "shrink-out");
        bagWindow.style.display = "none";
    }

    if (musicWindow && musicWindow.style.display === "flex") {
        animateClose(musicWindow);
    } else if (musicWindow) {
        musicWindow.classList.remove("expand-in", "shrink-out");
        musicWindow.style.display = "none";
    }

    if (plantWindow && plantWindow.style.display === "flex") {
        animateClose(plantWindow);
    } else if (plantWindow) {
        plantWindow.classList.remove("expand-in", "shrink-out");
        plantWindow.style.display = "none";
    }

    if (barrierWindow && barrierWindow.style.display === "flex") {
        animateClose(barrierWindow);
    } else if (barrierWindow) {
        barrierWindow.classList.remove("expand-in", "shrink-out");
        barrierWindow.style.display = "none";
    }

}


/* =====================================
   CLOSE EXPANDED WINDOWS
===================================== */

function closeExpandedWindows() {
    if (expandedWindow && expandedWindow.classList.contains("active")) {
        animateClose(expandedWindow);
    }

    if (expandedBinderWindow && expandedBinderWindow.classList.contains("active")) {
        animateClose(expandedBinderWindow);
    }

    if (expandedBagWindow && expandedBagWindow.classList.contains("active")) {
        animateClose(expandedBagWindow);
    }

    if (expandedPlantWindow && expandedPlantWindow.classList.contains("active")) {
        animateClose(expandedPlantWindow);
    }
}


/* =====================================
   CLOSE EVERYTHING
===================================== */

function closeEverything() {

    closeSmallWindows();
    closeExpandedWindows();
    closeArchiveSubWindows();

}


/* =====================================
   LAPTOP
===================================== */

if (laptop && projectsWindow) {

    laptop.addEventListener(
        "click",
        function (event) {

            event.preventDefault();
            event.stopPropagation();

            const isOpen =
                projectsWindow.style.display === "flex";

            closeEverything();

            if (!isOpen) {

                projectsWindow.style.display = "flex";

                projectsWindow.classList.remove("expand-in");

                void projectsWindow.offsetWidth;

                projectsWindow.classList.add("expand-in");

            }

        }
    );

}


/* =====================================
   LAPTOP SMALL WINDOW
   → EXPANDED WINDOW
===================================== */

if (laptopDot && expandedWindow) {

    laptopDot.addEventListener(
        "click",
        function (event) {

            event.preventDefault();
            event.stopPropagation();

            closeSmallWindows();
            closeExpandedWindows();

            expandedWindow.classList.add("active");

        }
    );

}


/* =====================================
   CLOSE EXPANDED LAPTOP
===================================== */

if (dotExpanded && expandedWindow) {

    dotExpanded.addEventListener(
        "click",
        function (event) {

            event.preventDefault();
            event.stopPropagation();

            animateClose(expandedWindow);

        }
    );

}


/* =====================================
   BINDER
===================================== */

if (binder && binderWindow) {

    binder.addEventListener(
        "click",
        function (event) {

            event.preventDefault();
            event.stopPropagation();

            const isOpen =
                binderWindow.style.display === "flex";

            closeEverything();

            if (!isOpen) {
                binderWindow.style.display = "flex";

                binderWindow.classList.remove("expand-in");
                void binderWindow.offsetWidth;
                binderWindow.classList.add("expand-in");
            }

        }
    );

}


/* =====================================
   BINDER SMALL WINDOW
   → EXPANDED BINDER
===================================== */

if (binderMagnify && expandedBinderWindow) {

    binderMagnify.addEventListener(
        "click",
        function (event) {

            event.preventDefault();
            event.stopPropagation();

            closeSmallWindows();
            closeExpandedWindows();

            expandedBinderWindow.classList.add("active");

        }
    );

}


/* =====================================
   CLOSE EXPANDED BINDER
===================================== */

if (magnifyExpanded && expandedBinderWindow) {

    magnifyExpanded.addEventListener(
        "click",
        function (event) {

            event.preventDefault();
            event.stopPropagation();

            animateClose(expandedBinderWindow);

        }
    );

}


/* =====================================
   BAG
===================================== */

if (bag && bagWindow) {

    bag.addEventListener(
        "click",
        function (event) {

            event.preventDefault();
            event.stopPropagation();

            const isOpen = bagWindow.style.display === "flex";

            closeEverything();

            if (!isOpen) {
                bagWindow.style.display = "flex";
                bagWindow.classList.remove("expand-in");
                void bagWindow.offsetWidth;
                bagWindow.classList.add("expand-in");
            }

        }
    );

}


/* =====================================
   MUSIC
===================================== */

if (music && musicWindow) {

    music.addEventListener(
        "click",
        function (event) {

            event.preventDefault();
            event.stopPropagation();

            const isOpen = musicWindow.style.display === "flex";

            closeEverything();

            if (!isOpen) {
                musicWindow.style.display = "flex";
                musicWindow.classList.remove("expand-in");
                void musicWindow.offsetWidth;
                musicWindow.classList.add("expand-in");
            }

        }
    );

}

const musicAudio = new Audio();

let currentSongIndex = 0;

const musicNextButton =
    document.querySelector(
        '.music-player-controls button[aria-label="Next song"]'
    );

const musicPreviousButton =
    document.querySelector(
        '.music-player-controls button[aria-label="Previous song"]'
    );


/* =====================================
   PLAY / PAUSE
===================================== */

if (musicPlayButton) {

    musicPlayButton.addEventListener(
        "click",
        function (event) {

            event.preventDefault();
            event.stopPropagation();

            if (!musicSongs.length) {
                return;
            }

            if (!musicPlaying) {

                musicAudio.src =
                    musicSongs[currentSongIndex].file;

                if (musicCover) {
                    musicCover.innerHTML =
                        `<img src="${musicSongs[currentSongIndex].cover}" alt="">`;
                }

                musicAudio.currentTime = 0;

                musicPlaying = true;
                
                musicAudio.play().catch(() => {});

                if (musicTitle) {
                    musicTitle.textContent =
                        musicSongs[currentSongIndex].title;
                }

                if (musicArtist) {
                    musicArtist.textContent =
                        musicSongs[currentSongIndex].artist;
                }

                musicPlayButton.textContent = "Ⅱ";

                musicPlayButton.setAttribute(
                    "aria-label",
                    "Pause"
                );

            } else {

                musicAudio.pause();

                musicPlaying = false;

                musicPlayButton.textContent = "▶";

                musicPlayButton.setAttribute(
                    "aria-label",
                    "Play"
                );

            }

        }
    );

}


/* =====================================
   NEXT SONG
===================================== */

if (musicNextButton) {

    musicNextButton.addEventListener(
        "click",
        function (event) {

            event.preventDefault();
            event.stopPropagation();

            if (!musicSongs.length) {
                return;
            }

            currentSongIndex++;

            if (
                currentSongIndex >=
                musicSongs.length
            ) {
                currentSongIndex = 0;
            }

            musicAudio.src =
                musicSongs[currentSongIndex].file;

            if (musicCover) {
                musicCover.innerHTML =
                    `<img src="${musicSongs[currentSongIndex].cover}" alt="">`;
            }

            musicAudio.currentTime = 0;
            musicPlaying = true;

            musicAudio.play().catch(() => {});

            if (musicTitle) {
                musicTitle.textContent =
                    musicSongs[currentSongIndex].title;
            }

            if (musicArtist) {
                musicArtist.textContent =
                    musicSongs[currentSongIndex].artist;
            }

            if (musicCurrentTime) {
                musicCurrentTime.textContent =
                    "0:00";
            }

            if (musicProgressFill) {
                musicProgressFill.style.width =
                    "0%";
            }

            if (musicPlayButton) {
                musicPlayButton.textContent = "Ⅱ";

                musicPlayButton.setAttribute(
                    "aria-label",
                    "Pause"
                );
            }

        }
    );

}


/* =====================================
    BARRIER
==================================== */

if (barrier && barrierWindow) {

    barrier.addEventListener(
        "click",
        function (event) {

            event.preventDefault();
            event.stopPropagation();

            const isOpen = barrierWindow.style.display === "flex";

            if (isOpen) {
                animateClose(barrierWindow);
            } else {
                closeEverything();
                barrierWindow.style.display = "flex";
                barrierWindow.classList.remove("expand-in");
                void barrierWindow.offsetWidth;
                barrierWindow.classList.add("expand-in");
            }

        }
    );

}

/* =====================================
   MUSIC
===================================== */

if (musicPreviousButton) {

    musicPreviousButton.addEventListener(
        "click",
        function (event) {

            event.preventDefault();
            event.stopPropagation();

            if (!musicSongs.length) {
                return;
            }

            currentSongIndex--;

            if (currentSongIndex < 0) {
                currentSongIndex =
                    musicSongs.length - 1;
            }

            musicAudio.src =
                musicSongs[currentSongIndex].file;

            if (musicCover) {
                musicCover.innerHTML =
                    `<img src="${musicSongs[currentSongIndex].cover}" alt="">`;
            }

            musicAudio.currentTime = 0;

            musicPlaying = true;

            musicAudio.play().catch(() => {});

            if (musicTitle) {
                musicTitle.textContent =
                    musicSongs[currentSongIndex].title;
            }

            if (musicArtist) {
                musicArtist.textContent =
                    musicSongs[currentSongIndex].artist;
            }

            if (musicCurrentTime) {
                musicCurrentTime.textContent =
                    "0:00";
            }

            if (musicProgressFill) {
                musicProgressFill.style.width =
                    "0%";
            }

            if (musicPlayButton) {
                musicPlayButton.textContent = "Ⅱ";

                musicPlayButton.setAttribute(
                    "aria-label",
                    "Pause"
                );
            }

        }
    );

}

/* =====================================
   AUTO NEXT SONG
===================================== */

musicAudio.addEventListener(
    "ended",
    function () {

        if (!musicSongs.length) {
            return;
        }

        currentSongIndex++;

        if (
            currentSongIndex >=
            musicSongs.length
        ) {
            currentSongIndex = 0;
        }

        musicAudio.src =
            musicSongs[currentSongIndex].file;

        if (musicCover) {
            musicCover.innerHTML =
                `<img src="${musicSongs[currentSongIndex].cover}" alt="">`;
        }

        musicAudio.currentTime = 0;

        musicPlaying = true;

        musicAudio.play().catch(() => {});

        if (musicTitle) {
            musicTitle.textContent =
                musicSongs[currentSongIndex].title;
        }

        if (musicArtist) {
            musicArtist.textContent =
                musicSongs[currentSongIndex].artist;
        }

        if (musicCurrentTime) {
            musicCurrentTime.textContent =
                "0:00";
        }

        if (musicProgressFill) {
            musicProgressFill.style.width =
                "0%";
        }

        if (musicPlayButton) {
            musicPlayButton.textContent = "Ⅱ";

            musicPlayButton.setAttribute(
                "aria-label",
                "Pause"
            );
        }

    }
);


/* =====================================
   MUSIC TIME
===================================== */

function formatMusicTime(seconds) {

    if (!Number.isFinite(seconds)) {
        return "0:00";
    }

    const minutes =
        Math.floor(seconds / 60);

    const remainingSeconds =
        Math.floor(seconds % 60);

    return (
        minutes +
        ":" +
        String(remainingSeconds).padStart(2, "0")
    );

}

musicAudio.addEventListener(
    "loadedmetadata",
    function () {

        if (musicDuration) {
            musicDuration.textContent =
                formatMusicTime(
                    musicAudio.duration
                );
        }

    }
);


musicAudio.addEventListener(
    "timeupdate",
    function () {

        if (musicCurrentTime) {
            musicCurrentTime.textContent =
                formatMusicTime(
                    musicAudio.currentTime
                );
        }

        if (
            musicProgressFill &&
            musicAudio.duration
        ) {

            const progress =
                (
                    musicAudio.currentTime /
                    musicAudio.duration
                ) * 100;

            musicProgressFill.style.width =
                progress + "%";

        }

    }
);


/* =====================================
   SEEK MUSIC
===================================== */

const musicProgressBar =
    document.querySelector(
        ".music-progress-bar"
    );

if (musicProgressBar) {

    musicProgressBar.addEventListener(
        "click",
        function (event) {

            if (!musicAudio.duration) {
                return;
            }

            const rect =
                musicProgressBar.getBoundingClientRect();

            const clickPosition =
                event.clientX - rect.left;

            const percentage =
                clickPosition / rect.width;

            musicAudio.currentTime =
                percentage * musicAudio.duration;

        }
    );

}


/* =====================================
   PLANT
===================================== */

if (plant && plantWindow) {

    plant.addEventListener(
        "click",
        function (event) {

            event.preventDefault();
            event.stopPropagation();

            const isOpen = plantWindow.style.display === "flex";

            closeEverything();

            if (!isOpen) {
                plantWindow.style.display = "flex";
                plantWindow.classList.remove("expand-in");
                void plantWindow.offsetWidth;
                plantWindow.classList.add("expand-in");
            }

        }
    );

}


/* =====================================
   CLOSE PLANT
===================================== */

if (plantClose && plantWindow) {

    plantClose.addEventListener(
        "click",
        function (event) {

            event.preventDefault();
            event.stopPropagation();

            animateClose(plantWindow);

        }
    );

}

/* =====================================
   PLANT SMALL WINDOW
   → EXPANDED GARDEN
===================================== */

if (plantMagnify && expandedPlantWindow) {
    plantMagnify.addEventListener(
        "click",
        function (event) {
            event.preventDefault();
            event.stopPropagation();

            closeSmallWindows();
            closeExpandedWindows();

            expandedPlantWindow.classList.add("active");
        }
    );
}

if (gardenMagnify && expandedPlantWindow && plantWindow) {
    gardenMagnify.addEventListener(
        "click",
        function (event) {
            event.preventDefault();
            event.stopPropagation();

            animateClose(expandedPlantWindow);
            animateClose(plantWindow);
        }
    );
}


/* =====================================
   BAG SMALL WINDOW
   → EXPANDED BAG
===================================== */

if (bagOpenButton && expandedBagWindow) {

    bagOpenButton.addEventListener(
        "click",
        function (event) {

            event.preventDefault();
            event.stopPropagation();

            closeSmallWindows();
            closeExpandedWindows();

            expandedBagWindow.classList.add("active");

        }
    );

}


/* =====================================
   CLOSE ARCHIVE
===================================== */

if (archiveClose && expandedBagWindow) {

    archiveClose.addEventListener(
        "click",
        function (event) {

            event.preventDefault();
            event.stopPropagation();

            animateClose(expandedBagWindow);

        }
    );

}


/* =====================================
   CLICK INSIDE SMALL WINDOWS
   DON'T CLOSE
===================================== */

[
    projectsWindow,
    binderWindow,
    bagWindow,
    musicWindow,
    plantWindow,
    barrierWindow
].forEach(function (windowElement) {

    if (!windowElement) {
        return;
    }

    windowElement.addEventListener(
        "click",
        function (event) {

            event.stopPropagation();

        }
    );

});


/* =====================================
   CLICK INSIDE EXPANDED WINDOWS
   DON'T CLOSE
===================================== */

[
    expandedWindow,
    expandedBinderWindow,
    expandedBagWindow,
    expandedPlantWindow
].forEach(function (windowElement) {

    if (!windowElement) {
        return;
    }

    windowElement.addEventListener(
        "click",
        function (event) {

            event.stopPropagation();

        }
    );

});


/* =====================================
   CLICK INSIDE ARCHIVE SUB WINDOWS
   DON'T CLOSE
===================================== */

[
    educationWindow,
    experienceWindow,
    certificatesWindow
].forEach(function (windowElement) {

    if (!windowElement) {
        return;
    }

    windowElement.addEventListener(
        "click",
        function (event) {

            event.stopPropagation();

        }
    );

});


/* =====================================
   CLICK OUTSIDE
===================================== */

document.addEventListener(
    "click",
    function () {

        closeEverything();

    }
);


/* =====================================
   KEYBOARD SUPPORT — LAPTOP
===================================== */

if (laptop) {

    laptop.addEventListener(
        "keydown",
        function (event) {

            if (
                event.key === "Enter" ||
                event.key === " "
            ) {

                event.preventDefault();

                laptop.click();

            }

        }
    );

}


/* =====================================
   KEYBOARD SUPPORT — BINDER
===================================== */

if (binder) {

    binder.addEventListener(
        "keydown",
        function (event) {

            if (
                event.key === "Enter" ||
                event.key === " "
            ) {

                event.preventDefault();

                binder.click();

            }

        }
    );

}


/* =====================================
   KEYBOARD SUPPORT — BAG
===================================== */

if (bag) {

    bag.addEventListener(
        "keydown",
        function (event) {

            if (
                event.key === "Enter" ||
                event.key === " "
            ) {

                event.preventDefault();

                bag.click();

            }

        }
    );

}


/* =====================================
   ESCAPE
===================================== */

document.addEventListener(
    "keydown",
    function (event) {

        if (event.key === "Escape") {

            closeEverything();

        }

    }
);


/* =====================================
   EDUCATION
===================================== */

if (educationItem && educationWindow) {

    educationItem.addEventListener(
        "click",
        function (event) {

            event.preventDefault();
            event.stopPropagation();

            closeArchiveSubWindows();

            educationWindow.classList.add("active");

        }
    );

}


/* =====================================
   EXPERIENCE
===================================== */

if (experienceItem && experienceWindow) {

    experienceItem.addEventListener(
        "click",
        function (event) {

            event.preventDefault();
            event.stopPropagation();

            closeArchiveSubWindows();

            experienceWindow.classList.add("active");

        }
    );

}


/* =====================================
   CERTIFICATES
===================================== */

if (certificatesItem && certificatesWindow) {

    certificatesItem.addEventListener(
        "click",
        function (event) {

            event.preventDefault();
            event.stopPropagation();

            closeArchiveSubWindows();

            certificatesWindow.classList.add("active");

        }
    );

}


/* =====================================
   BACK — EDUCATION
===================================== */

if (educationBack && educationWindow) {

    educationBack.addEventListener(
        "click",
        function (event) {

            event.preventDefault();
            event.stopPropagation();

            animateClose(educationWindow);

        }
    );

}


/* =====================================
   BACK — EXPERIENCE
===================================== */

if (experienceBack && experienceWindow) {

    experienceBack.addEventListener(
        "click",
        function (event) {

            event.preventDefault();
            event.stopPropagation();

            animateClose(experienceWindow);

        }
    );

}


/* =====================================
   BACK — CERTIFICATES
===================================== */

if (certificatesBack && certificatesWindow) {

    certificatesBack.addEventListener(
        "click",
        function (event) {

            event.preventDefault();
            event.stopPropagation();

            animateClose(certificatesWindow);

        }
    );

}
