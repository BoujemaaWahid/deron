import { faVideo, faPhone, faImage, faFile, faMicrophone, faPlayCircle, faChevronLeft, faPaperPlane, faBars } from '@fortawesome/free-solid-svg-icons';
export class Icons {
    public static icons = {
        video: faVideo,
        phone: faPhone,
        image: faImage,
        file: faFile,
        play: faPlayCircle,
        microphone: faMicrophone,
        left: faChevronLeft,
        send: faPaperPlane,
        bars: faBars
    }

    public static getSize(width: number): string{
        if( width <= 450 ) return "fa-1x";
        else if( width <= 550 ) return "fa-2x";
        else if( width <= 780 ) return "fa-3x";
        else return "fa-4x";
    }
}