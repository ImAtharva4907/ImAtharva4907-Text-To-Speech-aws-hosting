import { useEffect, useRef, useState } from "react";
import { AiFillPlayCircle } from 'react-icons/ai';
import { BsPauseCircleFill } from 'react-icons/bs';
import { BiSolidDownload } from 'react-icons/bi';

const AudioPlayer = ({ audioFile }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);

    const audioRef = useRef(null);
    const progressBarRef = useRef(null);

    useEffect(() => {
        const audio = audioRef.current;

        if (audioFile) {
            const audioArrayBuffer = audioFile.AudioStream.buffer;
            const audioURL = URL.createObjectURL(new Blob([audioArrayBuffer], { type: "audio/mpeg" }));
            audio.src = audioURL;

            const onLoadedData = () => setDuration(audio.duration);
            const onTimeUpdate = updateProgressBar;
            const onEnded = () => setIsPlaying(false);

            audio.addEventListener('loadeddata', onLoadedData);
            audio.addEventListener('timeupdate', onTimeUpdate);
            audio.addEventListener('ended', onEnded);

            return () => {
                URL.revokeObjectURL(audioURL);
                audio.removeEventListener('loadeddata', onLoadedData);
                audio.removeEventListener('timeupdate', onTimeUpdate);
                audio.removeEventListener('ended', onEnded);
            };
        }
    }, [audioFile]);

    const updateProgressBar = () => {
        const audio = audioRef.current;
        const progress = (audio.currentTime / audio.duration) * 100;
        setCurrentTime(audio.currentTime);
        progressBarRef.current.style.width = `${progress}%`;
    };

    const downloadAudio = () => {
        if (audioFile) {
            const audioArrayBuffer = audioFile.AudioStream.buffer;
            const audioURL = URL.createObjectURL(new Blob([audioArrayBuffer], { type: "audio/mpeg" }));

            const a = document.createElement('a');
            a.href = audioURL;
            a.download = "audio.mp3";
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);

            URL.revokeObjectURL(audioURL);
        }
    };

    const togglePlay = () => {
        const audio = audioRef.current;
        if (isPlaying) {
            audio.pause();
        } else {
            audio.play();
        }
        setIsPlaying(!isPlaying);
    };

    return (
        <div className="audio-container">
            <audio ref={audioRef} />

            <div className="progress-container">
                <div ref={progressBarRef} className="progress-bar" />
            </div>

            {/* Audio Controls - Play and Download Buttons */}
            <div className="audio-controls">
                <button className="audio-button" disabled={!audioFile} onClick={togglePlay}>
                    {isPlaying ? <BsPauseCircleFill className="icon-btn" /> : <AiFillPlayCircle className="icon-btn" />}
                </button>

                <button className="audio-button" disabled={!audioFile} onClick={downloadAudio}>
                    <BiSolidDownload className="icon-btn" />
                </button>
            </div>
        </div>
    );
};

export default AudioPlayer;
